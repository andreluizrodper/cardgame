<template>
  <div v-if="matches" class="px-4 py-3 flex flex-col">
    <p class="text-gray-600 text-sm">Matches open right now:</p>
    <div class="flex flex-col gap-2">
      <ListItem v-for="match in matches" :key="match.id" :match="match" />
    </div>
  </div>
</template>

<script>
import Loading from "@/components/ui/loading.vue";
import ListItem from "@/components/game/board/list-item.vue";
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
        where("created_by", "!=", this.account.id),
        where("public", "==", true),
        where("status", "==", "waiting"),
        limit(3)
      ),
      (doc) => {
        this.matches = doc.docs;
        console.log(this.matches);
      }
    );
  },
};
</script>
