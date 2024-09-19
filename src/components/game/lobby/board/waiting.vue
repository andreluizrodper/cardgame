<template>
  <router-link :to="{ name: 'match', params: { id: match.id } }">
    <div
      class="border px-4 py-2 flex flex-col items-center gap-2 rounded hover:shadow-md bg-gray-50"
    >
      {{ account && account.data().name }} is waiting for an opponent
    </div>
  </router-link>
</template>

<script>
import { getAccount } from "@/utils/account";
import { Button } from "@/components/ui/button";

export default {
  components: {
    Button,
  },
  props: {
    match: { type: Object },
  },
  data() {
    return {
      account: null,
    };
  },
  async mounted() {
    this.account = await getAccount({
      id: this.match.data().created_by,
      setStore: false,
    });
  },
};
</script>
