<template>
  <div class="bg-stone-50 py-6 flex justify-center">
    <Button @click="createMatch"> Play now </Button>
  </div>
</template>

<script>
import { Button } from "@/components/ui/button";
import { createMatch } from "@/utils/match";

export default {
  components: {
    Button,
  },
  methods: {
    async createMatch() {
      const match = await createMatch();
      this.$router.push({ name: "match", params: { id: match.id } });
    },
  },
};
</script>
