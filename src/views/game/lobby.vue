<template>
  <div class="flex min-h-[100vh] flex flex-col">
    <div class="flex-1">
      <Hero />
      <Greeting />
      <Board />
      <PlayNow />
      <Announcement />
      <Feed />
    </div>
    <Footer />
  </div>
</template>

<script setup>
import Hero from "@/components/game/hero.vue";
import Greeting from "@/components/game/greeting.vue";
import Board from "@/components/game/board.vue";
import PlayNow from "@/components/game/play-now.vue";
import Announcement from "@/components/game/announcement.vue";
import Feed from "@/components/game/feed.vue";
import Footer from "@/components/game/footer.vue";
</script>
