<template>
  <div
    class="absolute z-30 left-0 right-0 top-0 bg-gray-100 pb-4"
    :class="expanded ? 'pb-2' : ''"
  >
    <div>
      <div
        v-if="opponent.data"
        class="w-full relative py-2 flex justify-center text-sm"
      >
        <div class="flex w-full justify-between px-4">
          <div>
            {{ opponent.data.name }}
          </div>
          <div class="flex gap-2">
            <span class="flex gap-1 items-center">
              <Heart size="16" /> {{ opponent.health }}
            </span>
            <span class="flex gap-1 items-center">
              <Layers3 size="16" />
              {{ opponent.deck.length }}
            </span>
          </div>
        </div>
        <div class="absolute bottom-0 left-0 right-0 h-0.5 flex justify-end">
          <div
            class="h-0.5 bg-red-500"
            :style="{ width: `${(opponent.health / 20) * 100}%` }"
          />
        </div>
      </div>
    </div>
    <div
      class="px-1 flex max-h-96"
      :class="expanded ? 'overflow-y-auto' : 'overflow-y-hidden pl-36'"
    >
      <div
        v-for="(card, index) in cards"
        :key="index"
        class="mx-1 drop-shadow flex justify-center"
        :class="expanded ? 'my-1 min-h-36' : 'h-12 -ml-32 -mb-4'"
      >
        <Card :card="card" :expanded="expanded" />
      </div>
    </div>
    <div
      @click="expanded = !expanded"
      class="absolute -bottom-4 flex justify-center left-0 right-0"
    >
      <span class="bg-gray-100 rounded-b px-2 py-1">
        <ChevronDown v-if="!expanded" size="16" />
        <ChevronUp v-if="expanded" size="16" />
      </span>
    </div>
  </div>
</template>

<script>
import { ChevronDown, ChevronUp, Heart, Layers3 } from "lucide-vue-next";
import Card from "@/components/game/match/ui/card.vue";

export default {
  components: {
    Card,
    Heart,
    ChevronDown,
    ChevronUp,
    Layers3,
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
