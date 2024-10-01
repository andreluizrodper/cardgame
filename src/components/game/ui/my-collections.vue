<template>
  <div>
    <p class="text-sm px-4">My cards</p>
    <div class="flex overflow-auto gap-2 px-4 pb-6">
      <Card
        v-for="(card, cardIndex) in allCards"
        :key="cardIndex"
        :card="card"
        class="min-w-32"
      />
    </div>
  </div>
</template>

<script>
import Wisps from "@/assets/cards/wisps.json";
import Card from "@/components/game/decks/card.vue";

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
