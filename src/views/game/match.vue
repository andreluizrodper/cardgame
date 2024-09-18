<template>
  <div v-if="!match" class="min-h-[100vh] flex items-center justify-center">
    <Loading />
  </div>
  <div v-if="match">
    <Waiting v-if="match.data().status === 'waiting'" :match="match" />
    <TableTop
      v-if="
        ['playing', 'done'].includes(match.data().status) && player && opponent
      "
      :match="match"
      :player="player"
      :opponent="opponent"
    />
    <div v-if="match.data().status === 'forfeit'">
      This match is not available anymore
    </div>
  </div>
</template>

<script>
import Loading from "@/components/ui/loading.vue";
import Waiting from "@/components/game/match/waiting.vue";
import TableTop from "@/components/game/match/table-top.vue";
import { updateMatch } from "@/utils/match";
import { doc, onSnapshot } from "firebase/firestore";
import { firestore } from "@/utils/firebase";
import { getAccount, updateAccount } from "@/utils/account";

export default {
  components: {
    Loading,
    Waiting,
    TableTop,
  },
  computed: {
    account() {
      return this.$store.state.account;
    },
    player() {
      return this.match
        .data()
        .players.find((player) => player.id === this.account.id);
    },
    opponent() {
      return this.match
        .data()
        .players.find((player) => player.id !== this.account.id);
    },
  },
  data() {
    return {
      match: null,
      battle: false,
    };
  },
  async mounted() {
    onSnapshot(doc(firestore, "match", this.$route.params.id), async (doc) => {
      this.match = doc;

      if (!this.match.data().shared_with.includes(this.account.id)) {
        const shared_with = this.match.data().shared_with;
        shared_with.push(this.account.id);
        const turnPlayer1 = Math.floor(Math.random() * 1000 + 1) % 2;
        const opponentAccount = await getAccount({
          id: this.match.data().created_by,
          setStore: false,
        });
        const matchesPlayer1 = this.account.data().matches ?? 0 + 1;
        updateAccount({
          id: this.account.id,
          data: {
            ...this.account.data(),
            matches: matchesPlayer1,
          },
        });
        const matchesPlayer2 = opponentAccount.data().matches ?? 0 + 1;
        updateAccount({
          id: this.match.data().created_by,
          data: {
            ...opponentAccount.data(),
            matches: matchesPlayer2,
          },
        });
        updateMatch({
          id: this.$route.params.id,
          data: {
            shared_with,
            status: "playing",
            turn: 1,
            players: [
              {
                data: this.account.data(),
                turn: !!turnPlayer1,
                id: this.account.id,
                status: "selecting-deck",
                health: 20,
              },
              {
                data: opponentAccount.data(),
                turn: !turnPlayer1,
                id: this.match.data().created_by,
                status: "selecting-deck",
                health: 20,
              },
            ],
          },
        });
      }
    });
  },
};
</script>
