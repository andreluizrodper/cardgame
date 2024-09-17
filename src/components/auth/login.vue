<template>
  <div class="grid gap-6">
    <p>Get in and destroy your friends</p>
    <Button @click="doLoginGoogle" variant="outline">
      <span class="flex justify-center items-center gap-4">
        <img src="@/assets/google.png" class="w-[24px]" />
        Entrar com Google
      </span>
    </Button>
  </div>
</template>

<script>
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { LoaderCircle } from "lucide-vue-next";
import { loginAccount, createAccount, accountExists } from "@/utils/account.js";
import {
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "@/utils/firebase.js";

export default {
  components: {
    Button,
    Input,
    Label,
    LoaderCircle,
  },
  data() {
    return {
      email: "",
      pwd: "",
      loading: false,
      error: false,
      message: "",
    };
  },
  computed: {
    redirectMatch() {
      return this.$store.state.redirectMatch;
    },
  },
  methods: {
    doLoginGoogle() {
      const provider = new GoogleAuthProvider();

      signInWithPopup(auth, provider).then(async (result) => {
        const doAccountExists = await accountExists({ id: result.user.uid });
        if (!doAccountExists) {
          const data = {
            name: result.user.displayName,
            email: result.user.email,
            owner: result.user.uid,
          };
          await createAccount({ data });
        } else {
          await loginAccount({ id: result.user.uid });
        }
        if (this.redirectMatch)
          this.$router.push({
            name: "match",
            params: { id: this.redirectMatch },
          });
        else this.$router.push({ name: "lobby" });
      });
    },
  },
};
</script>
@/utils/account.js
