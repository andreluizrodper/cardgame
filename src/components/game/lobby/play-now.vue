<template>
  <div class="bg-stone-50 py-6 flex justify-center">
    <Button @click="createMatch"> Play now </Button>
  </div>
</template>

<script>
import { Button } from "@/components/ui/button";
import { getWaitingMatches, createMatch } from "@/utils/match";

export default {
  components: {
    Button,
  },
  methods: {
    async createMatch() {
      const matches = await getWaitingMatches();
      if (matches.length > 0) {
        const index = Math.floor(Math.random() * matches.length);
        const match = matches[index];
        this.$router.push({ name: "match", params: { id: match.id } });
      } else {
        const match = await createMatch();
        this.$router.push({ name: "match", params: { id: match.id } });
      }
    },
  },
};
</script>
