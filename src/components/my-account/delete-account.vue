<template>
  <div class="mx-auto max-w-md mt-4">
    <Button @click="archiveAccount" variant="outline" size="sm"
      >I want to delete my account</Button
    >
  </div>
</template>

<script>
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { updateAccount } from "@/utils/account";
import { signOut } from "firebase/auth";

export default {
  components: {
    Button,
    Card,
    CardContent,
  },
  props: {
    account: {
      type: Object,
    },
  },
  methods: {
    doArchiveAccount() {
      updateAccount({
        id: this.account.id,
        data: {
          ...this.account.data(),
          archived: true,
        },
      });
      signOut(auth).then(() => {
        this.$store.commit("setAccount", null);
        this.$router.push({ name: "home" });
      });
    },
    archiveAccount() {
      this.$store.commit("setDialog", {
        title: "Are you sure?",
        description: "You can activate your account later.",
        action: () => this.doArchiveAccount(),
      });
    },
  },
};
</script>
