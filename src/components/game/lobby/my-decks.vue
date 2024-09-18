<template>
  <div class="flex bg-stone-800 text-white flex-col gap-4 px-4 py-6">
    <div class="flex justify-between">
      <router-link :to="{ name: 'decks' }">
        <p class="text-sm underline">My decks</p>
      </router-link>
    </div>
    <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
      <router-link
        v-for="deck in decks"
        :key="deck.id"
        :to="{ name: 'deck-editor', params: { id: deck.id } }"
        class="border rounded p-4 flex justify-center items-center text-center flex flex-col gap-2"
      >
        <p>{{ deck.data().name }}</p>

        <p>{{ deck.data().cards.length }} cards</p>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    decks: { type: Array },
  },
};
</script>
