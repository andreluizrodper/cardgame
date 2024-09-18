<template>
  <RouterView v-if="account" />
  <Dialog />
</template>

<script>
import { RouterView } from "vue-router";
import Dialog from "@/components/ui/dialog.vue";

export default {
  components: {
    RouterView,
    Dialog,
  },
  computed: {
    account() {
      return this.$store.state.account;
    },
  },
};
</script>
