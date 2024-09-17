<template>
  <RouterView v-if="account" />
</template>

<script>
import { RouterView } from "vue-router";

export default {
  components: {
    RouterView,
  },
  computed: {
    account() {
      return this.$store.state.account;
    },
  },
};
</script>
