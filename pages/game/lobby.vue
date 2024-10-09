<template>
  <div class="bg-stone-500">
    <div
      class="flex min-h-[100vh] flex flex-col md:mx-auto max-w-7xl shadow bg-white"
    >
      <div class="flex-1">
        <NavBar />
        <Hero />
        <div v-if="decks && decks.length > 0" class="flex flex-col">
          <Board />
          <PlayNow />
          <MyDecks :decks="decks" />
        </div>
        <CreateDeck v-if="decks && decks.length === 0" />
        <MyCards />
        <Announcement />
        <Feed />
      </div>
    </div>
  </div>
</template>

<script>
import Hero from "@/components/game/ui/hero.vue";
import Greeting from "@/components/game/ui/greeting.vue";
import Board from "@/components/game/lobby/board.vue";
import PlayNow from "@/components/game/lobby/play-now.vue";
import CreateDeck from "@/components/game/lobby/create-deck.vue";
import MyDecks from "@/components/game/lobby/my-decks.vue";
import Announcement from "@/components/game/lobby/announcement.vue";
import Feed from "@/components/game/lobby/feed.vue";
import MyCards from "@/components/game/ui/my-cards.vue";
import NavBar from "@/components/game/ui/nav-bar.vue";
import { getDecks } from "@/utils/deck";

export default {
  components: {
    Hero,
    Greeting,
    Board,
    PlayNow,
    MyDecks,
    CreateDeck,
    Announcement,
    MyCards,
    Feed,
    NavBar,
  },
  data() {
    return {
      decks: null,
    };
  },
  async mounted() {
    this.decks = await getDecks();
  },
};
</script>
