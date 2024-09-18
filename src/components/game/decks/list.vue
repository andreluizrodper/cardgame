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
      <div v-for="deck in decks" :key="deck.id" class="border rounded">
        <div class="flex flex-col gap-2 p-4 h-44 bg-stone-200 justify-end">
          {{ deck.data().name }}
        </div>
        <div class="flex gap-2 w-full justify-between border-t p-4">
          <div class="flex gap-2 items-center">
            <Layers3 size="16" />
            {{ deck.data().cards.length }}
          </div>
          <div class="flex gap-2">
            <router-link
              :to="{ name: 'deck-editor', params: { id: deck.id } }"
              class="border rounded px-2 py-1"
            >
              <Edit size="16" />
            </router-link>
            <button @click="archiveDeck(deck)" class="border rounded px-2 py-1">
              <Trash size="16" />
            </button>
          </div>
        </div>
      </div>
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
import { getDecks, updateDeck } from "@/utils/deck";
import { Layers3, Trash, Edit, Plus } from "lucide-vue-next";
export default {
  components: {
    Loading,
    Layers3,
    Plus,
    Edit,
    Trash,
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
    archiveDeck(deck) {
      this.$store.commit("setDialog", {
        title: "Do you want to archive this deck?",
        action: () => this.doArchiveDeck(deck),
      });
    },
    async doArchiveDeck(deck) {
      console.log(deck);
      await updateDeck({ id: deck.id, data: { archived: true } });
      this.getDecks();
    },
  },
};
</script>
