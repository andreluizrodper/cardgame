<template>
  <div class="min-h-[100vh] flex flex-col">
    <div class="flex flex-1 items-center">
      <div class="flex flex-col gap-8 w-full justify-center items-center">
        <div class="flex flex-col gap-2 items-center">
          <p>Get good =[</p>
        </div>
      </div>
    </div>
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
