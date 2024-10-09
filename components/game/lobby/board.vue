<template>
  <div v-if="matches && matches.length > 0" class="px-4 py-3 flex flex-col">
    <p class="text-gray-600 text-sm mb-2">Matches happening right now:</p>
    <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      <ListItem v-for="match in matches" :key="match.id" :match="match" />
    </div>
  </div>
</template>

<script>
import Loading from "@/components/ui/loading.vue";
import ListItem from "@/components/game/lobby/board/list-item.vue";
import {
  query,
  collection,
  where,
  limit,
  onSnapshot,
} from "firebase/firestore";
import { firestore } from "@/utils/firebase";

export default {
  components: {
    Loading,
    ListItem,
  },
  computed: {
    account() {
      return this.$store.state.account;
    },
  },
  data() {
    return {
      matches: null,
    };
  },
  async mounted() {
    onSnapshot(
      query(
        collection(firestore, "match"),
        where("public", "==", true),
        where("status", "in", ["waiting", "playing"]),
        limit(4)
      ),
      (doc) => {
        this.matches = doc.docs;
      }
    );
  },
};
</script>
