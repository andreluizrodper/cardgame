<template>
  <div class="bg-stone-500">
    <div
      class="min-h-[100vh] flex flex-col md:mx-auto max-w-7xl shadow bg-white"
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
          <span class="flex gap-1 items-center text-sm"> My account </span>
        </div>
        <UserData v-if="account" :account="account" />
        <DeleteMyAccount :account="account" />
      </div>
    </div>
  </div>
  <Dialog />
</template>

<script>
import Hero from "@/components/my-account/hero.vue";
import UserData from "@/components/my-account/user-data.vue";
import DeleteMyAccount from "@/components/my-account/delete-account.vue";
import NavBar from "@/components/game/ui/nav-bar.vue";
import { Home, ChevronRight } from "lucide-vue-next";
import Dialog from "@/components/ui/dialog.vue";

export default {
  components: {
    Home,
    ChevronRight,
    NavBar,
    Hero,
    UserData,
    DeleteMyAccount,
    Dialog,
  },
  computed: {
    account() {
      return this.$store.state.account;
    },
  },
};
</script>
