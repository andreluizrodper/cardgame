<template>
  <div
    class="relative min-w-48 max-w-48 flex"
    :class="{
      '-ml-32 group-hover:mr-2 group-hover:ml-0 duration-300 hover:-translate-y-5':
        !isOpponent,
      '-mr-32 group-hover:ml-2 group-hover:mr-0 duration-300 hover:-translate-y-5':
        isOpponent,
    }"
  >
    <div
      @click="toggleCardTable"
      class="border rounded border-white min-w-48 max-w-48 flex flex-col bg-white drop-shadow overflow-hidden"
      :class="{
        'border-b-0 rounded-t group-hover:rounded-b': !isOpponent,
        'border-t-0 rounded-b group-hover:rounded-t': isOpponent,
      }"
    >
      <div class="relative">
        <img :src="cardImage" :class="{ 'transform rotate-180': isOpponent }" />
        <div
          v-if="!isOpponent"
          class="absolute top-2 right-2 border rounded bg-white px-1 text-xs shadow-sm"
        >
          {{ card.manaType ?? card.type }}
        </div>
      </div>
      <div v-if="!isOpponent" class="text-base flex-1 text-left px-2 py-2">
        {{ card.name }}
      </div>
      <div v-if="!isOpponent" class="p-2 pb-1 flex flex-col w-full">
        <div v-if="card.manaNeeded" class="flex justify-between w-full">
          <div class="flex gap-2">
            <div class="flex gap-2 items-center">
              <Sword size="16" /> {{ card.attack }}
            </div>
            <div class="flex gap-2 items-center">
              <Heart size="16" /> {{ card.toughness }}
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
    <button
      v-if="!isOpponent"
      @click="goToCemetary"
      size="sm"
      class="absolute top-2 left-2 px-2 py-1 rounded border bg-white"
    >
      <Skull size="16" />
    </button>
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
    isOpponent: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    cardImage() {
      return this.isOpponent ? "/assets/deck/back.png" : this.card.artwork;
    },
  },
  emits: ["toggleCardTable", "toggleCardCemetary"],
  methods: {},
};
</script>
