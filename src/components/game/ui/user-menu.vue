<template>
  <DropdownMenu>
    <DropdownMenuTrigger>
      <AccountAvatar :id="account?.id" />
    </DropdownMenuTrigger>
    <DropdownMenuContent align="end">
      <DropdownMenuLabel>
        {{ account.data().name }}
      </DropdownMenuLabel>
      <DropdownMenuSeparator />
      <DropdownMenuItem>
        <router-link :to="{ name: 'my-account' }"> My account </router-link>
      </DropdownMenuItem>
      <DropdownMenuSeparator />
      <DropdownMenuItem @click="logOut" class="cursor-pointer">
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
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuLabel,
} from "@/components/ui/dropdown-menu";
import { signOut } from "firebase/auth";
import { auth } from "@/utils/firebase.js";

export default {
  components: {
    AccountAvatar,
    LogOut,
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuSeparator,
    DropdownMenuItem,
    DropdownMenuTrigger,
    DropdownMenuLabel,
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
        this.$router.push({ name: "home" });
      });
    },
  },
};
</script>
