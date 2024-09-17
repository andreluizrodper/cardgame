<template>
  <div
    class="absolute z-30 left-0 right-0 top-0 bg-gray-100 pb-4"
    :class="expanded ? 'pb-2' : ''"
  >
    <div
      class="grid grid-cols-2 px-1 overflow-hidden max-h-96 rotate-180"
      :class="expanded ? 'overflow-y-auto' : 'overflow-y-hidden'"
    >
      <div
        v-for="(card, index) in cards"
        :key="index"
        class="mx-1 drop-shadow"
        :class="expanded ? 'my-1 min-h-36' : 'h-12 -mb-4 overflow-hidden'"
      >
        <Card v-if="card.name" :card="card" />
        <EmptyCard v-if="!card.name" />
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
import { ChevronDown, ChevronUp } from "lucide-vue-next";
import Card from "@/components/game/match/ui/card.vue";
import EmptyCard from "@/components/game/match/ui/empty-card.vue";

export default {
  components: {
    Card,
    ChevronDown,
    ChevronUp,
    EmptyCard,
  },
  props: {
    opponent: {
      type: Object,
    },
  },
  computed: {
    cards() {
      const emptyCards = [...new Array(8).keys()];
      const table = [...(this.opponent.table ?? []), ...emptyCards].splice(
        0,
        8
      );
      return table;
    },
  },
  data() {
    return {
      expanded: false,
    };
  },
};
</script>
