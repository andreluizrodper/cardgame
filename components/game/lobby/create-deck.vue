<template>
  <div class="bg-stone-50 py-6 flex justify-center">
    <Button as-child>
      <router-link :to="{ name: 'deck-builder' }">
        Create your first deck
      </router-link>
    </Button>
  </div>
</template>

<script setup>
import { Button } from "@/components/ui/button";
</script>
