<template>
  <div class="flex flex-col gap-3 py-6">
    <p class="text-sm px-4">My cards</p>
    <div class="overflow-auto flex flex-wrap gap-1 pb-6">
      <Card
        v-for="(card, cardIndex) in allCards"
        :key="cardIndex"
        :card="card"
        class="min-w-32"
        :cardList="true"
      />
    </div>
  </div>
</template>

<script>
import Wisps from "@/assets/cards/wisps.json";
import Card from "@/components/game/ui/card.vue";

export default {
  components: {
    Card,
  },
  computed: {
    allCards() {
      return this.collections.flatMap((collection) => collection.cards);
    },
  },
  data() {
    return {
      collections: [Wisps],
    };
  },
};
</script>
