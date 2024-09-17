<template>
  <div v-if="player.turn" class="flex items-center flex-1 justify-center gap-2">
    <Button size="sm" :disabled="player.drawn" @click="draw">
      Draw a card
    </Button>
    <Button size="sm" @click="expanded = !expanded"> My hand </Button>
    <Button size="sm" @click="endTurn">End my turn</Button>
  </div>
  <div
    v-if="!player.turn"
    class="flex justify-center w-full flex-col gap-2 items-center"
  >
    <span class="text-sm">Waiting for your opponent</span>
    <Loading />
  </div>
  <div
    v-show="expanded"
    class="absolute bottom-0 left-0 right-0 z-50 bg-gray-100"
  >
    <div class="overflow-x-auto py-2 px-4 flex gap-1">
      <Card
        v-for="(card, index) in player.hand"
        :key="index"
        :card="card"
        @toggleCard="toggleCard"
      />
    </div>
  </div>
</template>

<script>
import { Button } from "@/components/ui/button";
import { updateMatch } from "@/utils/match";
import Card from "@/components/game/match/ui/card-hand.vue";
import Loading from "@/components/ui/loading.vue";

export default {
  components: {
    Loading,
    Button,
    Card,
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
  data() {
    return {
      expanded: false,
    };
  },
  methods: {
    toggleCard(card) {
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
    draw() {
      if (this.player.hand) {
        this.player.hand.push(this.doDraw());
      } else {
        this.player.hand = [];
        for (let a = 0; a < 8; a++) {
          this.player.hand.push(this.doDraw());
        }
      }
      const match = this.match.data();
      this.player.drawn = true;
      match.players = [this.player, this.opponent];
      updateMatch({ id: this.$route.params.id, data: match });
    },
    endTurn() {
      const match = this.match.data();
      this.player.drawn = false;
      this.player.turn = false;
      this.player.table = this.player.tempTable;
      this.player.tempTable = [];
      this.opponent.turn = true;
      this.opponent.tempTable = this.opponent.table ?? [];
      match.turn += 1;
      match.players = [this.player, this.opponent];
      updateMatch({ id: this.$route.params.id, data: match });
    },
    doDraw() {
      const maxLength = this.player.deck.length;
      const cardIndex = Math.floor(Math.random() * maxLength + 1);
      return this.player.deck.splice(cardIndex, 1)[0];
    },
  },
};
</script>
