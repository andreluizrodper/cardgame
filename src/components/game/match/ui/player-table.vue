<template>
  <div class="absolute z-40 left-0 right-0 bottom-0 bg-gray-100 pt-4">
    <div
      class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 px-1 overflow-hidden max-h-96"
      :class="expanded ? 'overflow-y-auto' : 'overflow-y-hidden'"
    >
      <div
        v-for="(card, index) in cards"
        :key="index"
        class="mx-1 drop-shadow flex justify-center"
        :class="expanded ? 'my-1 min-h-36' : 'h-12 -mb-4 overflow-hidden'"
      >
        <Card
          v-if="card.name"
          :card="card"
          :isTurn="player.turn"
          @discardCard="discardCard"
        />
        <EmptyCard v-if="!card.name" />
      </div>
    </div>
    <div
      @click="expanded = !expanded"
      class="absolute -top-4 flex justify-center left-0 right-0"
    >
      <span class="bg-gray-100 rounded-t px-2 py-1">
        <ChevronDown v-if="expanded" size="16" />
        <ChevronUp v-if="!expanded" size="16" />
      </span>
    </div>
    <div
      class="bg-gray-200 overflow-hidden"
      :class="expandedHand ? '' : 'h-16'"
    >
      <div class="flex justify-between p-2">
        <div class="text-xs">My hand</div>
        <div class="flex gap-2">
          <RefreshCcw size="16" @click="draw" />
          <div @click="expandedHand = !expandedHand">
            <ChevronDown v-if="expandedHand" size="16" />
            <ChevronUp v-if="!expandedHand" size="16" />
          </div>
        </div>
      </div>
      <div class="overflow-x-auto gap-1 pb-2 px-1">
        <div class="flex" :class="expandedHand ? '' : 'ml-32'">
          <CardHand
            v-for="(card, index) in player.hand"
            :key="index"
            :card="card"
            :expandedHand="expandedHand"
            @toggleCard="toggleCardHand"
          />
        </div>
      </div>
    </div>
    <div
      v-if="player.data"
      class="w-full relative py-2 flex justify-center text-sm"
    >
      <div class="flex w-full justify-between px-4">
        <div>
          {{ player.data.name }}
        </div>
        <div class="flex gap-2">
          <span class="flex gap-1 items-center">
            <Heart size="16" /> {{ player.health }}
          </span>
          <span class="flex gap-1 items-center">
            <Layers3 size="16" />
            {{ player.deck.length }}
          </span>
        </div>
      </div>
      <div class="absolute top-0 left-0 right-0 h-0.5 flex justify-end">
        <div
          class="h-0.5 bg-green-500"
          :style="{ width: `${(player.health / 20) * 100}%` }"
        />
      </div>
    </div>
  </div>
</template>

<script>
import {
  ChevronDown,
  ChevronUp,
  Heart,
  Layers3,
  RefreshCcw,
} from "lucide-vue-next";
import Card from "@/components/game/match/ui/card.vue";
import CardHand from "@/components/game/match/ui/card-hand.vue";
import EmptyCard from "@/components/game/match/ui/empty-card.vue";
import { updateMatch } from "@/utils/match";

export default {
  components: {
    Card,
    CardHand,
    ChevronDown,
    ChevronUp,
    EmptyCard,
    Heart,
    Layers3,
    RefreshCcw,
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
      let tableCards;
      if (this.player.turn) tableCards = this.player.tempTable ?? [];
      else tableCards = this.player.table ?? [];
      return tableCards;
    },
  },
  data() {
    return {
      expandedHand: false,
      expanded: false,
    };
  },
  mounted() {
    if (this.player.turn) {
      this.draw();
    }
  },
  methods: {
    draw() {
      if (this.player.hand?.length > 0) {
        this.player.deck.push(...this.player.hand);
      }
      this.player.hand = this.player.deck.splice(0, 8);
      const match = this.match.data();
      match.players = [this.player, this.opponent];
      updateMatch({ id: this.$route.params.id, data: match });
    },
    toggleCardHand(card) {
      const tempTable = this.player.tempTable ?? [];
      const hand = this.player.hand ?? [];
      const index = hand.indexOf(card);
      hand.splice(index, 1);
      tempTable.push(card);
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
  },
};
</script>
