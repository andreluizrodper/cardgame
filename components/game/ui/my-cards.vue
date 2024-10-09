<template>
  <div class="flex flex-col gap-3 py-6">
    <p class="text-sm px-4">My cards</p>
    <div class="overflow-auto flex flex-wrap gap-1 pb-6">
      <CardDetail
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
import CardDetail from "../match/table-top/CardDetail.vue";

export default {
  components: {
    CardDetail,
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
