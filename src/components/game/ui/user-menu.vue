<template>
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
</template>

<script>
import AccountAvatar from "@/components/ui/account-avatar.vue";
import { LogOut } from "lucide-vue-next";
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
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
  },
  computed: {
    account() {
      return this.$store.state.account;
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
