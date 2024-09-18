<template>
  <div
    class="relative min-w-48 max-w-48 flex"
    :class="[expandedHand ? 'mr-2' : '-ml-32'].join(' ')"
  >
    <button
      @click="goToCemetary"
      size="sm"
      class="absolute top-2 left-2 z-20 px-2 py-1 rounded border bg-white"
    >
      <Skull size="16" />
    </button>

    <div
      @click="toggleCard"
      class="border rounded border-white min-w-48 max-w-48 flex flex-col bg-white drop-shadow overflow-hidden"
      :class="
        [
          expandedHand ? 'mr-2' : '-ml-32',
          card.manaNeeded && (!mana || mana < card.manaNeeded)
            ? 'opacity-40'
            : '',
        ].join(' ')
      "
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
    </div>
  </div>
</template>

<script>
import { Button } from "@/components/ui/button";
import { Heart, Sword, Gem, Skull } from "lucide-vue-next";

export default {
  components: {
    Heart,
    Sword,
    Gem,
    Skull,
    Button,
  },
  props: {
    isTurn: {
      type: Boolean,
    },
    mana: {
      type: Number,
    },
    expandedHand: {
      type: Boolean,
    },
    card: {
      type: Object,
    },
  },
  emits: ["toggleCard", "toggleCardCemetary"],
  methods: {
    toggleCard() {
      if (!this.isTurn) return;
      if (!this.card.manaValue && this.mana < this.card.manaNeeded) return;
      this.card.turnCount = 0;
      this.$emit("toggleCard", this.card);
    },
    goToCemetary() {
      this.$emit("toggleCardCemetary", this.card);
    },
  },
};
</script>
