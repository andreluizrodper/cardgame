<template>
  <div class="flex min-h-[100vh] flex flex-col">
    <div class="flex-1">
      <Greeting />
      <Decks />
    </div>
    <Footer />
  </div>
</template>

<script setup>
import Decks from "@/components/game/decks/list.vue";
import Greeting from "@/components/game/greeting.vue";
import Footer from "@/components/game/footer.vue";
</script>
