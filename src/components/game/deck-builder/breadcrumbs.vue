<template>
  <div class="px-4 text-sm flex gap-2 items-center">
    <router-link
      :to="{ name: 'lobby' }"
      class="flex items-center gap-2 text-sm underline"
    >
      <Home size="16" />
      Lobby
    </router-link>
    <ChevronRight size="14" />
    <router-link
      :to="{ name: 'decks' }"
      class="flex gap-1 items-center text-sm underline"
    >
      My decks
    </router-link>
    <ChevronRight size="14" />
    <span class="text-gray-600">
      <span v-if="$route.params.id"> Editing deck </span>
      <span v-else> Creating deck </span>
    </span>
  </div>
</template>

<script setup>
import { ChevronRight, Home } from "lucide-vue-next";
</script>
