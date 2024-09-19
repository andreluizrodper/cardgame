<template>
  <div>
    <RouterView />
    <Toaster />
  </div>
</template>

<script>
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/utils/firebase.js";
import { RouterView } from "vue-router";
import { loginAccount, accountExists } from "@/utils/account.js";
import Toaster from "@/components/ui/toast/Toaster.vue";

export default {
  components: {
    RouterView,
    Toaster,
  },
  computed: {
    account() {
      return this.$store.state.account;
    },
  },
  name: "App",
  created() {
    onAuthStateChanged(auth, async (user) => {
      if (user && !this.account) {
        const checkAccountExists = await accountExists({ id: user.uid });
        if (checkAccountExists) {
          this.$store.commit("setUser", user);
          loginAccount({ id: user.uid });
          this.loading = false;
        } else {
          this.loading = false;
        }
      } else {
        if (this.$route.path.includes("match")) {
          this.$store.commit("setRedirectMatch", this.$route.params.id);
          this.$router.push({ name: "home" });
        }
        if (this.$route.path.includes("game")) {
          this.$router.push({ name: "home" });
        }
        this.loading = false;
      }
    });
  },
};
</script>
@/utils/account.js
