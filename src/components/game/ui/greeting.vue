<template>
  <div class="px-4 py-2 flex justify-between">
    <p class="text-sm">Hey, {{ account.data().name }}</p>
  </div>
</template>

<script>
export default {
  computed: {
    account() {
      return this.$store.state.account;
    },
  },
};
</script>
