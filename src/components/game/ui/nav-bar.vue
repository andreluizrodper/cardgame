<template>
  <div class="flex justify-between items-center bg-stone-900 p-2">
    <router-link :to="{ name: 'lobby' }">
      <Logo />
    </router-link>
    <UserMenu />
  </div>
</template>

<script setup>
import Logo from "@/components/ui/logo.vue";
import UserMenu from "@/components/game/ui/user-menu.vue";
</script>
