<template>
  <div v-if="!match" class="min-h-[100vh] flex items-center justify-center">
    <Loading />
  </div>
  <div v-if="match">
    <Waiting v-if="match.data().status === 'waiting'" :match="match" />
    <TableTop
      v-if="match.data().status === 'playing' || match.data().status === 'done'"
      :match="match"
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
  },
  data() {
    return {
      match: null,
      battle: false,
    };
  },
  async mounted() {
    onSnapshot(doc(firestore, "match", this.$route.params.id), (doc) => {
      this.match = doc;

      if (this.match.data().turn % 3 === 0) {
        const match = this.match.data();
        const player1 = match.players[0];
        const player2 = match.players[1];
        const player1Table = player1.table.filter(
          (card) => card.side !== "down"
        );
        const player2Table = player2.table.filter(
          (card) => card.side !== "down"
        );

        const attack1 = player1Table.reduce((sum, item) => {
          return (sum += item.attack);
        }, 0);
        const defense1 = player1Table.reduce((sum, item) => {
          return (sum += item.defense);
        }, 0);

        const attack2 = player2Table.reduce((sum, item) => {
          return (sum += item.attack);
        }, 0);
        const defense2 = player2Table.reduce((sum, item) => {
          return (sum += item.defense);
        }, 0);

        player1.health += defense1 - attack2;
        player2.health += defense2 - attack1;

        if (player2.health <= 0) {
          player2.status = "lose";
          player1.status = "lose";
          match.status = "done";
        }

        if (player1.health <= 0) {
          player1.status = "lose";
          player2.status = "lose";
          match.status = "done";
        }

        match.turn += 1;
        match.players = [player1, player2];
        updateMatch({ id: this.$route.params.id, data: match });
      }

      if (!this.match.data().shared_with.includes(this.account.id)) {
        const shared_with = this.match.data().shared_with;
        shared_with.push(this.account.id);
        const turnPlayer1 = Math.floor(Math.random() * 1000 + 1) % 2;
        updateMatch({
          id: this.$route.params.id,
          data: {
            shared_with,
            status: "playing",
            turn: 1,
            players: [
              {
                turn: !!turnPlayer1,
                id: this.account.id,
                status: "selecting-deck",
                health: 20,
              },
              {
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
