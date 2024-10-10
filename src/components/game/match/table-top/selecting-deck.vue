<template>
  <img
    src="@/assets/bg/select-deck.jpg"
    class="object-cover object-center fixed h-[100vh] w-[100vw] opacity-40"
  />
  <div
    v-if="decks"
    class="flex min-h-[100vh] items-center w-full flex-col justify-center relative z-40"
  >
    <div class="bg-white rounded shadow-md p-6 flex flex-col gap-8">
      <p class="text-xl font-bold text-center">Select your deck</p>
      <div class="flex justify-center py-6" v-if="!decks">
        <Loading />
      </div>
      <div class="flex justify-center gap-4">
        <button
          v-for="deck in decks"
          :key="deck.id"
          @click="toggleDeck(deck)"
          class="border rounded py-2 flex justify-center items-center text-center bg-gray-50 w-44 flex-col gap-4 hover:shadow-md"
        >
          <span class="text-xl">{{ deck.data().name }}</span>
          <span class="text-based flex gap-2 items-center"
            ><Layers3 size="16" />{{ deck.data().cards.length }}</span
          >
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import Loading from "@/components/ui/loading.vue";
import { getDecks } from "@/utils/deck";
import { updateMatch } from "@/utils/match";
import { Layers3 } from "lucide-vue-next";

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
    Layers3,
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

      if (this.decks.length === 1) {
        this.toggleDeck(this.decks[0]);
      }
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
