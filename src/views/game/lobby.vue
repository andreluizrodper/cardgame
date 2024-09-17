<template>
  <div
    class="flex min-h-[100vh] flex flex-col md:m-2 lg:px-4 lg:mx-auto max-w-xl"
  >
    <div class="flex-1">
      <Hero />
      <Greeting />
      <div v-if="decks && decks.length > 0" class="flex flex-col">
        <Board />
        <PlayNow />
        <MyDecks :decks="decks" />
      </div>
      <CreateDeck v-if="decks && decks.length === 0" />
      <Announcement />
      <Feed />
    </div>
    <Footer />
  </div>
</template>

<script>
import Hero from "@/components/game/hero.vue";
import Greeting from "@/components/game/greeting.vue";
import Board from "@/components/game/board.vue";
import PlayNow from "@/components/game/play-now.vue";
import CreateDeck from "@/components/game/create-deck.vue";
import MyDecks from "@/components/game/my-decks.vue";
import Announcement from "@/components/game/announcement.vue";
import Feed from "@/components/game/feed.vue";
import Footer from "@/components/game/footer.vue";
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
    Feed,
    Footer,
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
