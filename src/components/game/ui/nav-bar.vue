<template>
  <div class="flex justify-between items-center bg-stone-900 p-2">
    <router-link :to="{ name: 'lobby' }">
      <Logo />
    </router-link>
    <div class="flex gap-4 items-center">
      <UserPoints />
      <UserMenu />
    </div>
  </div>
</template>

<script setup>
import Logo from "@/components/ui/logo.vue";
import UserMenu from "@/components/game/ui/user-menu.vue";
import UserPoints from "@/components/game/ui/user-points.vue";
</script>
