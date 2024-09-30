<template>
  <button
    @click="toggleCard"
    class="border rounded bg-white min-w-48 max-w-48 max-auto flex flex-col flex-1"
    :class="card.isAvailable ? 'opacity-100' : 'opacity-20'"
  >
    <div class="relative">
      <img :src="card.artwork" />
      <div
        class="absolute top-2 right-2 border rounded bg-white px-1 text-xs shadow-sm"
      >
        {{ card.manaType ?? card.type }}
      </div>
    </div>
    <div class="text-base flex-1 text-left px-2 py-2">{{ card.name }}</div>
    <div class="p-2 pb-1 flex flex-col w-full">
      <div v-if="card.manaNeeded" class="flex justify-between w-full">
        <div class="flex gap-2">
          <div class="flex gap-2 items-center">
            <Sword size="16" /> {{ card.attack }}
          </div>
          <div class="flex gap-2 items-center">
            <Heart size="16" /> {{ card.defense }}
          </div>
        </div>
        <div class="flex gap-2 items-center">
          <Gem size="16" /> {{ card.manaNeeded }}
        </div>
      </div>
      <div v-if="card.manaValue" class="flex justify-between w-full">
        <div class="flex gap-2 items-center">
          <Gem size="16" /> {{ card.manaValue }}
        </div>
      </div>
    </div>
  </button>
</template>

<script>
import { Heart, Sword, Gem } from "lucide-vue-next";

export default {
  components: {
    Heart,
    Sword,
    Gem,
  },
  props: {
    artwork: {
      type: String,
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
