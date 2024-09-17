<template>
  <button @click="toggleCard" class="border rounded bg-white min-w-40">
    <div class="bg-stone-200 h-40 w-28" />
    <div class="p-4 flex flex-col">
      <div class="text-base text-left">{{ card.name }}</div>
      <div class="flex gap-2">
        <div class="flex gap-2 items-center">
          <Sword size="16" /> {{ card.attack }}
        </div>
        <div class="flex gap-2 items-center">
          <Shield size="16" /> {{ card.defense }}
        </div>
      </div>
    </div>
  </button>
</template>

<script>
import { Shield, Sword } from "lucide-vue-next";

export default {
  components: {
    Shield,
    Sword,
  },
  props: {
    card: {
      type: Object,
    },
  },
  emits: ["toggleCard"],
  methods: {
    toggleCard() {
      this.$emit("toggleCard", this.card);
    },
  },
};
</script>
