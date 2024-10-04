<template>
  <div class="bg-stone-500">
    <div
      class="flex min-h-[100vh] flex flex-col md:mx-auto max-w-7xl shadow bg-white"
    >
      <div class="flex-1">
        <NavBar />
        <Hero />
        <div class="px-4 py-2 text-sm flex gap-2 items-center">
          <router-link
            :to="{ name: 'lobby' }"
            class="flex items-center gap-2 text-sm"
          >
            <Home size="16" />
            Lobby
          </router-link>
          <ChevronRight size="14" />
          <span class="flex gap-1 items-center text-sm"> My decks </span>
        </div>
        <Decks />
        <MyCollections />
      </div>
    </div>
  </div>
</template>

<script setup>
import Decks from "@/components/game/decks/list.vue";
import MyCollections from "@/components/game/ui/my-cards.vue";
import Hero from "@/components/game/ui/hero.vue";
import NavBar from "@/components/game/ui/nav-bar.vue";
import { Home, ChevronRight } from "lucide-vue-next";
</script>
