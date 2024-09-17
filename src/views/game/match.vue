<template>
  <div v-if="!match" class="min-h-[100vh] flex items-center justify-center">
    <Loading />
  </div>
  <div v-if="match">
    <Waiting v-if="match.data().status === 'waiting'" :match="match" />
    <TableTop v-if="match.data().status === 'playing'" :match="match" />
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
    };
  },
  async mounted() {
    onSnapshot(doc(firestore, "match", this.$route.params.id), (doc) => {
      this.match = doc;

      if (!this.match.data().shared_with.includes(this.account.id)) {
        const shared_with = this.match.data().shared_with;
        shared_with.push(this.account.id);
        const turnPlayer1 = Math.floor(Math.random() * 1000 + 1) % 2;
        updateMatch({
          id: this.$route.params.id,
          data: {
            shared_with,
            status: "playing",
            players: [
              {
                turn: !!turnPlayer1,
                id: this.account.id,
                status: "selecting-deck",
              },
              {
                turn: !turnPlayer1,
                id: this.match.data().created_by,
                status: "selecting-deck",
              },
            ],
          },
        });
      }
    });
  },
};
</script>
