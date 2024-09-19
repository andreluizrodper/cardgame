<template>
  <div class="absolute z-30 left-0 right-0 top-0 flex">
    <div class="flex-1 flex items-end">
      <div class="flex mb-8 w-full justify-center">
        <div
          class="px-1 scale-75 -mx-32 flex max-h-96 justify-center items-end flex-wrap"
        >
          <div
            v-for="(card, index) in cards"
            :key="index"
            class="mx-1 drop-shadow flex justify-center my-1 min-h-36"
          >
            <Card :card="card" />
          </div>
        </div>
      </div>
    </div>
    <div>
      <div
        class="text-sm top-0 z-80 right-0 bg-stone-600 text-stone-200 p-2 rounded shadow-md flex flex-col items-end gap-1 shadow-lg"
      >
        <div>
          {{ opponent.data.name }}
        </div>
        <div class="flex gap-4">
          <span
            class="flex gap-1 items-center"
            :class="!opponent.mana || opponent.mana <= 0 ? 'opacity-40' : ''"
          >
            <Gem size="16" /> {{ opponent.mana }}
          </span>
          <span class="flex gap-1 items-center">
            <Heart size="16" /> {{ opponent.health }}
          </span>
          <span class="flex gap-1 items-center">
            <Layers3 size="16" />
            {{ opponent.deck.length }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Gem, ChevronDown, ChevronUp, Heart, Layers3 } from "lucide-vue-next";
import Card from "@/components/game/match/ui/card.vue";

export default {
  components: {
    Card,
    Heart,
    ChevronDown,
    ChevronUp,
    Layers3,
    Gem,
  },
  props: {
    opponent: {
      type: Object,
    },
  },
  computed: {
    cards() {
      return this.opponent.table;
    },
  },
  data() {
    return {
      expanded: false,
    };
  },
};
</script>
