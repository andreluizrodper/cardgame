<template>
  <div class="absolute z-40 left-0 right-0 bottom-0">
    <div class="flex">
      <Info :player="player" :isSpectator="isSpectator" />
      <div class="flex-1 flex items-end">
        <Hand
          :cards="player.hand"
          :isOpponent="false"
          @toggleCardTable="toggleCardTable"
          @toggleCardCemetary="toggleCardCemetary"
        />
      </div>
    </div>
  </div>
  <InitialDrawDialog
    :isOpen="player.turn && !player.hand && player.currentStep === 'Draw'"
    :amountSpell="amountSpell"
    :amountMana="amountMana"
    @draw="handleInitialDraw"
  />
  <DrawCardDialog
    :isOpen="
      player.turn &&
      player.hand &&
      !player.hasDrawn &&
      player.currentStep === 'Draw'
    "
    @drawSpell="drawSpell"
    @drawMana="drawMana"
  />
  <CemeterySheet
    :isOpen="cemetarySheet"
    :cards="player.cemetary"
    @update:open="toggleCemetarySheet"
    @toggleCard="toggleCard"
  />
</template>

<script>
import DrawCardDialog from "@/components/game/match/table-top/battle/ui/draw-card-dialog.vue";
import InitialDrawDialog from "@/components/game/match/table-top/battle/ui/initial-draw-dialog.vue";
import Info from "@/components/game/match/table-top/battle/ui/info.vue";
import Hand from "@/components/game/match/table-top/hand.vue";
import CemeterySheet from "@/components/game/match/table-top/battle/ui/cemetery.vue";

export default {
  components: {
    DrawCardDialog,
    InitialDrawDialog,
    Info,
    Hand,
    CemeterySheet,
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
  computed: {
    account() {
      return this.$store.state.account;
    },
    drawAvailable() {
      return (
        this.amountMana + this.amountSpell <= 7 &&
        this.amountMana + this.amountSpell > 0
      );
    },
    spellCards() {
      return this.player.deck.filter((card) => card.manaNeeded);
    },
    spellCardsCount() {
      return this.spellCards.length;
    },
    manaCards() {
      return this.player.deck.filter((card) => card.manaValue);
    },
    manaCardsCount() {
      return this.manaCards.length;
    },
    cards() {
      return this.player.table;
    },
    tableSpellCards() {
      return this.player.table.filter((card) => card.manaNeeded);
    },
  },
  data() {
    return {
      cemetarySheet: false,
      expandedHand: false,
      expanded: true,
      amountMana: 0,
      amountSpell: 0,
    };
  },
  methods: {
    updateStep(step) {
      this.player.currentStep = step;
      this.doUpdateMatch();
    },
    endTurn() {
      this.player.turn = false;
      this.player.manaDown = false;
      this.player.hasDrawn = false;
      this.opponent.mana = 0;
      this.opponent.turn = true;
      this.opponent.currentStep = "Upkeep";
      this.opponent.table?.map((card) => {
        card.turnCount += 1;
        card.turnActive = false;
        return card;
      });
      this.match.turn += 1;
      this.doUpdateMatch();
    },
    toggleMana(card) {
      if (this.player.manaDown) return;
      card.turnActive = true;
      const mana = this.player.mana ?? 0;
      this.player.mana = mana + parseInt(card.manaValue);
      this.player.manaDown = true;
      const match = this.match.data();
      match.players = [this.player, this.opponent];
      updateMatch({ id: this.$route.params.id, data: match });
    },
    toggleCemetarySheet() {
      this.cemetarySheet = false;
    },
    toggleCardCemetary(card) {
      const cemetary = this.player.cemetary ?? [];
      cemetary.push(card);
      this.player.cemetary = cemetary;
      const indexCard = this.player.hand.indexOf(card);
      this.player.hand.splice(indexCard, 1);
      const match = this.match.data();
      match.players = [this.player, this.opponent];
      updateMatch({ id: this.$route.params.id, data: match });
    },
    quit() {
      this.player.status = "lose";
      this.opponent.status = "win";
      const match = this.match.data();
      match.status = "done";
      match.players = [this.player, this.opponent];
      let playerLose = this.player.data.lose ?? 0;
      playerLose++;
      updateAccount({
        id: this.player.id,
        data: {
          ...this.player.data,
          lose: playerLose,
        },
        setStore: false,
      });
      let opponentWin = this.opponent.data.win ?? 0;
      opponentWin++;
      updateAccount({
        id: this.opponent.id,
        data: {
          ...this.opponent.data,
          win: opponentWin,
        },
        setStore: false,
      });
      updateMatch({ id: this.$route.params.id, data: match });
      this.$router.push({ name: "lobby" });
    },
    doUpdateMatch() {
      const match = this.match.data();
      match.players = [this.player, this.opponent];
      updateMatch({ id: this.$route.params.id, data: match });
    },
    drawMana() {
      const mana = this.manaCards.splice(0, 1);
      this.player.hand.push(...mana);
      this.player.hasDrawn = true;
      this.doUpdateMatch();
    },
    drawSpell() {
      const spell = this.spellCards.splice(0, 1);
      this.player.hand.push(...spell);
      this.player.hasDrawn = true;
      this.doUpdateMatch();
    },
    firstDraw() {
      const mana = this.manaCards.splice(0, this.amountMana);
      const spell = this.spellCards.splice(0, this.amountSpell);
      this.player.hand = [...mana, ...spell];
      this.player.hasDrawn = true;
      this.doUpdateMatch();
    },
    toggleCardTable(card) {
      console.log(card);
      const table = this.player.table ?? [];
      const hand = this.player.hand ?? [];
      const index = hand.indexOf(card);
      hand.splice(index, 1);
      table.push(card);
      this.player.table = table;
      this.player.hand = hand;
      if (card.manaNeeded) {
        this.player.mana = this.player.mana - card.manaNeeded;
      }
      this.doUpdateMatch();
    },
    handleInitialDraw({ amountSpell, amountMana }) {
      this.amountSpell = amountSpell;
      this.amountMana = amountMana;
      this.firstDraw();
    },
  },
};
</script>
