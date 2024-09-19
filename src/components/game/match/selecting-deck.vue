<template>
  <div
    v-if="decks"
    class="flex min-h-[100vh] items-center w-full flex-col justify-center"
  >
    <p class="text-xl font-bold">Select your deck</p>
    <div class="flex justify-center py-6" v-if="!decks">
      <Loading />
    </div>
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
import { updateMatch } from "@/utils/match";

export default {
  props: {
    match: {
      type: Object,
    },
    player: {
      type: Object,
    },
    opponent: {
      type: Object,
    },
  },
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
  methods: {
    async getDecks() {
      this.decks = await getDecks();
    },
    toggleDeck(deck) {
      const match = this.match.data();
      this.player.status = "ready";
      this.player.deck = this.sortDeck(deck.data().cards);
      match.players = [this.player, this.opponent];
      updateMatch({
        id: this.$route.params.id,
        data: match,
      });
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
