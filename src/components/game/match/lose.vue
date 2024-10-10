<template>
  <img
    src="@/assets/bg/defeat.jpg"
    class="object-cover object-center fixed h-[100vh] w-[100vw]"
  />
  <div class="relative z-30 min-h-[100vh] flex flex-col">
    <div class="flex flex-1 items-center" />
    <div class="p-4 flex justify-center">
      <Button variant="outline">
        <router-link :to="{ name: 'lobby' }">Back to lobby</router-link>
      </Button>
    </div>
  </div>
</template>

<script>
import { Button } from "@/components/ui/button";

export default {
  components: {
    Button,
  },
};
</script>
