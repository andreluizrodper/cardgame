<template>
  <div class="flex justify-center py-6" v-if="!decks">
    <Loading />
  </div>
  <div
    v-if="decks"
    class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 px-4 py-6"
  >
    <router-link
      v-for="deck in decks"
      :key="deck.id"
      :to="{ name: 'deck-editor', params: { id: deck.id } }"
      class="border rounded p-4 flex justify-center items-center text-center"
    >
      {{ deck.data().name }}
    </router-link>
    <router-link
      v-if="decks.length < maxDecks"
      :to="{ name: 'deck-builder' }"
      class="border rounded p-4 flex justify-center items-center text-center"
    >
      Create a new deck
    </router-link>
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
      maxDecks: 2,
    };
  },
  mounted() {
    this.getDecks();
  },
  methods: {
    async getDecks() {
      this.decks = await getDecks();
      console.log(this.decks);
    },
  },
};
</script>
