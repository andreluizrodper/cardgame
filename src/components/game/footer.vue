<template>
  <div
    class="sticky bottom-0 bg-white left-0 border-t px-4 py-2 flex items-center"
  >
    <div class="flex-1 flex items-center gap-8 justify-center">
      <router-link
        :to="{ name: 'lobby' }"
        exact-active-class="bg-gray-900 p-3 rounded-full text-white"
      >
        <Home size="18" />
      </router-link>
      <router-link
        :to="{ name: 'decks' }"
        exact-active-class="bg-gray-900 p-3 rounded-full text-white"
      >
        <Boxes size="18" />
      </router-link>
    </div>
    <AccountAvatar :id="account.id" />
  </div>
</template>

<script>
import AccountAvatar from "@/components/ui/account-avatar.vue";
import { Boxes, Home } from "lucide-vue-next";

export default {
  components: {
    AccountAvatar,
    Home,
    Boxes,
  },
  computed: {
    account() {
      return this.$store.state.account;
    },
    year() {
      return new Date().getFullYear();
    },
  },
};
</script>
