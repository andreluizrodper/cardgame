<template>
  <button
    class="border hover:shadow-md rounded overflow-hidden"
    @click="toggleCollection()"
  >
    <img :src="collection.artwork" class="w-full h-24 object-cover" />
    <div class="px-2 py-2 bg-stone-50 text-gray-800 flex flex-col gap-1">
      <span class="text-xs truncate">{{ collection.name }}</span>
      <span class="text-xs"
        >{{ cardAmount }} / {{ availableCardsAmount }} cards</span
      >
    </div>
  </button>
</template>

<script>
export default {
  props: {
    collection: {
      type: Object,
    },
    selectedCardsNames: {
      type: Array,
    },
  },
  emits: ["selectCollection"],
  computed: {
    availableCardsAmount() {
      return this.collection.cards.filter(
        (card) => !this.selectedCardsNames.includes(card.name)
      ).length;
    },
    cardAmount() {
      return this.collection.cards.length;
    },
  },
  methods: {
    toggleCollection() {
      this.$emit("selectCollection", this.collection);
    },
  },
};
</script>
