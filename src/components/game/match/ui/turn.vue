<template>
  <div v-if="player.turn" class="flex items-center flex-1 justify-center gap-2">
    <Button size="sm" @click="endTurn">End my turn</Button>
  </div>
  <div
    v-if="!player.turn"
    class="flex justify-center w-full flex-col gap-2 items-center"
  >
    <span class="text-sm">Waiting for your opponent</span>
    <Loading />
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
    endTurn() {
      const match = this.match.data();
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
