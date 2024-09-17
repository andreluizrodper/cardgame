<template>
  <div class="flex flex-col">
    <NavBar />
    <div v-if="account" class="p-4">
      <RouterView />
    </div>
  </div>
</template>

<script>
import { RouterView } from "vue-router";
import NavBar from "@/components/dashboard/ui/nav-bar.vue";

export default {
  components: {
    RouterView,
    NavBar,
  },
  computed: {
    account() {
      return this.$store.state.account;
    },
  },
};
</script>
