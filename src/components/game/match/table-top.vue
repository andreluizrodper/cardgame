<template>
  <SelectingDeck
    v-if="isSelectingDeck"
    :match="match"
    :player="player"
    :opponent="opponent"
  />
  <WaitingPlayer v-if="isWaiting" />
  <Match v-if="isReady" :match="match" :player="player" :opponent="opponent" />
  <Win v-if="hasPlayerWon" />
  <Lose v-if="hasPlayerLose" />
</template>

<script>
import Loading from "@/components/ui/loading.vue";
import SelectingDeck from "@/components/game/match/selecting-deck.vue";
import WaitingPlayer from "@/components/game/match/waiting-player.vue";
import Match from "@/components/game/match/match.vue";
import Win from "@/components/game/match/win.vue";
import Lose from "@/components/game/match/lose.vue";

export default {
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
  components: {
    Loading,
    SelectingDeck,
    WaitingPlayer,
    Match,
    Lose,
    Win,
  },
  computed: {
    account() {
      return this.$store.state.account;
    },
    isSelectingDeck() {
      return this.player.status === "selecting-deck";
    },
    isWaiting() {
      return (
        this.player.status === "ready" &&
        this.opponent.status === "selecting-deck"
      );
    },
    isReady() {
      return this.player.status === "ready" && this.opponent.status === "ready";
    },
    hasPlayerWon() {
      return this.player.status === "win";
    },
    hasPlayerLose() {
      return this.player.status === "lose";
    },
  },
};
</script>
