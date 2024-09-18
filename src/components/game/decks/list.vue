<template>
  <div class="flex justify-center py-6" v-if="!decks">
    <Loading />
  </div>
  <div v-if="decks" class="py-6">
    <div class="px-3 mb-2 flex justify-between items-center">
      <p class="text-xl">My decks</p>
      <p class="flex gap-2 items-center border rounded px-2 bg-gray-50">
        <Layers3 size="16" /> {{ decks.length }}
      </p>
    </div>
    <div class="grid grid-cols-2 md:grid-cols-4 gap-4 px-3">
      <Listitem v-for="deck in decks" :key="deck.id" :deck="deck" />
      <router-link
        v-if="decks.length < maxDecks"
        :to="{ name: 'deck-builder' }"
        class="border hidden md:flex rounded p-4 justify-center items-center text-center flex-col gap-2"
      >
        <Plus size="26" />
        Create a new deck
      </router-link>
    </div>
    <div class="px-2 md:hidden">
      <router-link
        v-if="decks.length < maxDecks"
        :to="{ name: 'deck-builder' }"
        class="border rounded p-4 flex justify-center items-center text-center flex-col gap-2"
      >
        <Plus size="26" />
        Create a new deck
      </router-link>
    </div>
  </div>
</template>

<script>
import Loading from "@/components/ui/loading.vue";
import { getDecks } from "@/utils/deck";
import { Layers3, Plus } from "lucide-vue-next";
import Listitem from "@/components/game/decks/list-item.vue";

export default {
  components: {
    Loading,
    Plus,
    Layers3,
    Listitem,
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
    },
  },
};
</script>
