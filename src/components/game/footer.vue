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
    <DropdownMenu>
      <DropdownMenuTrigger>
        <AccountAvatar :id="account.id" />
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start">
        <DropdownMenuItem @click="logOut">
          <LogOut size="16" class="mr-2" />
          Sair
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  </div>
</template>

<script>
import AccountAvatar from "@/components/ui/account-avatar.vue";
import { LogOut, Boxes, Home } from "lucide-vue-next";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { signOut } from "firebase/auth";
import { auth } from "@/utils/firebase.js";

export default {
  components: {
    AccountAvatar,
    LogOut,
    Home,
    Boxes,
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
  },
  computed: {
    account() {
      return this.$store.state.account;
    },
    year() {
      return new Date().getFullYear();
    },
  },
  methods: {
    logOut() {
      signOut(auth).then(() => {
        this.$store.commit("setAccount", null);
        this.$router.push({ name: "Home" });
      });
    },
  },
};
</script>
