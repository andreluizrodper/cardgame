<template>
  <span
    class="border border-gray-500 bg-gray-600 text-gray-200 rounded px-2 py-1 text-xs"
  >
    {{ win }}/{{ matches }} - {{ exp }} exp
  </span>
</template>

<script>
export default {
  computed: {
    account() {
      return this.$store.state.account;
    },
    exp() {
      return this.account?.data().exp ?? 0;
    },
    win() {
      return this.account?.data().win ?? 0;
    },
    matches() {
      return this.account?.data().matches ?? 0;
    },
  },
};
</script>
