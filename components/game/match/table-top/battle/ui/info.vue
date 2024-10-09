<template>
  <div class="text-sm w-56 left-0 flex flex-col gap-2">
    <Steps
      :currentStep="player.currentStep"
      @updateStep="updateStep"
      @endTurn="endTurn"
    />
    <div class="flex flex-col gap-2 mx-2">
      <div class="flex justify-between text-stone-200 items-center">
        <p class="text-sm">Spell deck</p>
        <p class="flex gap-2 items-center">
          <Layers3 size="16" /> {{ spellCardsCount }}
        </p>
      </div>
      <img
        src="/assets/deck/back-2-90-deg.png"
        class="h-42 object-center rounded"
      />
    </div>
    <div class="flex flex-col gap-2 mx-2">
      <div class="flex justify-between text-stone-200 items-center">
        <p class="text-sm">Mana deck</p>
        <p class="flex gap-2 items-center">
          <Layers3 size="16" /> {{ manaCardsCount }}
        </p>
      </div>
      <img
        src="/assets/deck/back-3-90-deg.png"
        class="h-42 object-center rounded"
      />
    </div>
    <div
      class="bg-stone-600 text-stone-200 p-2 rounded shadow-md flex flex-col items-start gap-1"
    >
      <div>
        {{ player.data.name }}
      </div>
      <div class="flex gap-4">
        <span
          class="flex gap-1 items-center"
          :class="!player.mana || player.mana <= 0 ? 'opacity-40' : ''"
        >
          <Gem size="16" /> {{ player.mana }}
        </span>
        <span class="flex gap-1 items-center">
          <Heart size="16" /> {{ player.health }}
        </span>
        <span class="flex gap-1 items-center">
          <Layers3 size="16" />
          {{ player.deck.length }}
        </span>
        <button
          v-if="player.cemetary"
          class="border bg-gray-50 rounded flex gap-2 items-center px-2 py-1 relative"
          @click="cemetarySheet = true"
        >
          <span
            class="absolute -top-1 -right-2 px-2 rounded-full text-xs bg-red-300 text-white"
            >{{ player.cemetary.length }}</span
          >
          <Skull size="16" />
        </button>
      </div>
      <button
        v-if="!isSpectator"
        class="px-2 rounded bg-stone-400 text-stone-700 hover:bg-stone-900 hover:text-red-300"
        @click="quit"
      >
        Quit match
      </button>
    </div>
  </div>
</template>

<script>
import { Gem, Heart, Layers3, Skull } from "lucide-vue-next";

export default {
  components: {
    Gem,
    Heart,
    Layers3,
    Skull,
  },
  props: {
    player: {
      type: Object,
      required: true,
    },
    isSpectator: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    spellCardsCount() {
      return this.player.deck.filter((card) => card.manaNeeded).length;
    },
    manaCardsCount() {
      return this.player.deck.filter((card) => card.manaValue).length;
    },
  },
  emits: ["openCemetary", "quit"],
};
</script>
