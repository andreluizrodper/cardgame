<template>
  <div
    @click="toggleCard"
    class="border rounded border-white min-w-48 max-w-48 flex flex-col bg-white drop-shadow overflow-hidden"
    :class="expandedHand ? 'mr-2' : '-ml-32'"
  >
    <div class="bg-stone-200 flex h-40 min-w-48" />
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
  </div>
</template>

<script>
import { Shield, Sword } from "lucide-vue-next";

export default {
  components: {
    Shield,
    Sword,
  },
  props: {
    expandedHand: {
      type: Boolean,
    },
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
