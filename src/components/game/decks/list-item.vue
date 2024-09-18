<template>
  <div class="border rounded bg-white text-gray-900">
    <div class="flex flex-col gap-2 p-4 h-44 bg-stone-400 justify-end">
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
</template>

<script>
import { Layers3, Trash, Edit } from "lucide-vue-next";
import { updateDeck } from "@/utils/deck";
export default {
  props: {
    deck: {
      type: Object,
    },
  },
  components: {
    Layers3,
    Trash,
    Edit,
  },
  emits: ["updateDecks"],
  methods: {
    archiveDeck() {
      this.$store.commit("setDialog", {
        title: "Do you want to archive this deck?",
        action: () => this.doArchiveDeck(),
      });
    },
    async doArchiveDeck() {
      await updateDeck({ id: this.deck.id, data: { archived: true } });
      this.$emit("updateDecks");
    },
  },
};
</script>
