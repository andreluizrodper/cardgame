<template>
  <div class="flex bg-stone-800 text-white flex-col gap-4 px-4 py-6">
    <div class="flex justify-between">
      <router-link :to="{ name: 'decks' }">
        <p class="text-sm underline">My decks</p>
      </router-link>
    </div>
    <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
      <ListItem v-for="deck in decks" :key="deck.id" :deck="deck" />
    </div>
  </div>
</template>

<script>
import ListItem from "@/components/game/decks/list-item.vue";

export default {
  components: { ListItem },
  props: {
    decks: { type: Array },
  },
};
</script>
