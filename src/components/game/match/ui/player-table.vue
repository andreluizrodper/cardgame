<template>
  <div
    class="absolute z-40 left-0 right-0 bottom-0 bg-gray-100 pt-4"
    :class="expanded ? 'pb-2' : ''"
  >
    <div
      class="grid grid-cols-2 px-1 overflow-hidden max-h-96"
      :class="expanded ? 'overflow-y-auto' : 'overflow-y-hidden'"
    >
      <div
        v-for="(card, index) in cards"
        :key="index"
        class="mx-1 drop-shadow"
        :class="expanded ? 'my-1 min-h-36' : 'h-12 -mb-4 overflow-hidden'"
      >
        <Card
          v-if="card.name"
          :card="card"
          :isTurn="player.turn"
          @toggleCard="toggleCard"
          @discardCard="discardCard"
          @toggleCardSize="toggleCardSize"
        />
        <EmptyCard v-if="!card.name" />
      </div>
    </div>
    <div
      @click="expanded = !expanded"
      class="absolute -top-4 flex justify-center left-0 right-0"
    >
      <span class="bg-gray-100 rounded-b px-2 py-1">
        <ChevronDown v-if="expanded" size="16" />
        <ChevronUp v-if="!expanded" size="16" />
      </span>
    </div>
  </div>
</template>

<script>
import { ChevronDown, ChevronUp } from "lucide-vue-next";
import Card from "@/components/game/match/ui/card.vue";
import EmptyCard from "@/components/game/match/ui/empty-card.vue";
import { updateMatch } from "@/utils/match";

export default {
  components: {
    Card,
    ChevronDown,
    ChevronUp,
    EmptyCard,
  },
  props: {
    match: {
      type: Object,
    },
    player: {
      type: Object,
    },
    opponent: {
      type: Object,
    },
  },
  computed: {
    cards() {
      const emptyCards = [...new Array(8).keys()];
      let tableCards;
      if (this.player.turn) tableCards = this.player.tempTable ?? [];
      else tableCards = this.player.table ?? [];
      const table = [...tableCards, ...emptyCards].splice(0, 8);
      return table;
    },
  },
  data() {
    return {
      expanded: false,
    };
  },
  methods: {
    toggleCard(card) {
      const tempTable = this.player.tempTable ?? [];
      const hand = this.player.hand ?? [];
      const index = tempTable.indexOf(card);
      tempTable.splice(index, 1);
      hand.push(card);
      this.player.tempTable = tempTable;
      this.player.hand = hand;
      const match = this.match.data();
      match.players = [this.player, this.opponent];
      updateMatch({ id: this.$route.params.id, data: match });
    },
    discardCard(card) {
      const tempTable = this.player.tempTable ?? [];
      const index = tempTable.indexOf(card);
      this.player.tempTable = tempTable;
      tempTable.splice(index, 1);
      const match = this.match.data();
      match.players = [this.player, this.opponent];
      updateMatch({ id: this.$route.params.id, data: match });
    },
    toggleCardSize(card) {
      const tempTable = this.player.tempTable ?? [];
      const index = tempTable.indexOf(card);
      const side = card.side === "down" ? "up" : "down";
      this.player.tempTable[index].side = side;
      const match = this.match.data();
      match.players = [this.player, this.opponent];
      updateMatch({ id: this.$route.params.id, data: match });
    },
  },
};
</script>
