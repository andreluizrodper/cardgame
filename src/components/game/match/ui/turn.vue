<template>
  <div
    v-if="!isSpectator"
    class="flex items-center flex-1 justify-center gap-2"
  >
    <div v-if="player.turn" class="flex items-center flex-1 justify-end gap-2">
      <Button
        size="sm"
        class="translate-x-5 -rotate-90 relative z-50"
        variant="outline"
        :disabled="player.hand && player.hand.length > 7"
        @click="endTurn"
      >
        End my turn
      </Button>
      <div
        v-if="!match.data().hasStarted"
        class="z-[100] fixed top-0 right-0 bottom-0 left-0 flex items-center justify-center"
      >
        <div class="fixed top-0 right-0 bottom-0 left-0 bg-black opacity-50" />
        <div class="bg-white rounded drop-shadow p-6 flex flex-col gap-8">
          <div class="text-sm">
            You have won the dice roll and has the choice to start the match!
          </div>
          <div class="flex justify-center gap-8">
            <Button @click="start">I want to start</Button>
            <Button @click="pass">Pass</Button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <Battle v-if="onBattle" :battle="this.match.data().battle" :match="match" />
</template>

<script>
import { Button } from "@/components/ui/button";
import { updateMatch } from "@/utils/match";
import Card from "@/components/game/match/ui/card-hand.vue";
import Loading from "@/components/ui/loading.vue";
import Battle from "@/components/game/match/battle.vue";

export default {
  components: {
    Loading,
    Button,
    Battle,
    Card,
  },
  computed: {
    onBattle() {
      return !!this.match.data().battle;
    },
  },
  props: {
    isSpectator: {
      type: Boolean,
    },
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
    start() {
      const match = this.match.data();
      match.hasStarted = true;
      updateMatch({ id: this.$route.params.id, data: match });
    },
    pass() {
      const match = this.match.data();
      this.player.turn = false;
      this.opponent.turn = true;
      match.hasStarted = true;
      match.players = [this.player, this.opponent];
      updateMatch({ id: this.$route.params.id, data: match });
    },
    startBattle() {
      const match = this.match.data();
      match.battle = {
        attack: { status: "waiting", player: this.player },
        defense: { status: "waiting", player: this.opponent },
      };
      updateMatch({ id: this.$route.params.id, data: match });
    },
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
    doDraw() {
      const maxLength = this.player.deck.length;
      const cardIndex = Math.floor(Math.random() * maxLength + 1);
      return this.player.deck.splice(cardIndex, 1)[0];
    },
  },
};
</script>
