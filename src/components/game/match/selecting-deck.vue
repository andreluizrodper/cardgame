<template>
  <div class="flex justify-center py-6" v-if="!decks">
    <Loading />
  </div>
  <div
    v-if="decks"
    class="flex min-h-[100vh] items-center w-full flex-col justify-center"
  >
    <p class="text-xl font-bold">Select your deck</p>
    <div
      class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 px-4 py-6 w-full"
    >
      <button
        v-for="deck in decks"
        :key="deck.id"
        @click="toggleDeck(deck)"
        class="border rounded p-4 flex justify-center items-center text-center"
      >
        {{ deck.data().name }}
      </button>
    </div>
  </div>
</template>

<script>
import Loading from "@/components/ui/loading.vue";
import { getDecks } from "@/utils/deck";
export default {
  components: {
    Loading,
  },
  data() {
    return {
      decks: null,
    };
  },
  mounted() {
    this.getDecks();
  },
  emits: ["toggleDeck"],
  methods: {
    async getDecks() {
      this.decks = await getDecks();
      if (this.decks.length === 0) {
        this.$store.commit("setRedirectMatch", this.$route.params.id);
        this.$router.push({ name: "deck-builder" });
      }
      if (this.decks.length === 1) {
        const sortedDeck = this.sortDeck(this.decks[0].data().cards);
        this.$emit("toggleDeck", sortedDeck);
      }
    },
    toggleDeck(deck) {
      const sortedDeck = this.sortDeck(deck.data().cards);
      this.$emit("toggleDeck", sortedDeck);
    },
    sortDeck(deck) {
      return deck
        .map((value) => ({ value, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .map(({ value }) => value);
    },
  },
};
</script>
