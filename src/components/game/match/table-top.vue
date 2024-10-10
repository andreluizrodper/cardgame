<template>
  <router-link
    v-if="isSpectator"
    :to="{ name: 'lobby' }"
    class="absolute top-2 left-2 border border-gray-500 hover:bg-gray-800 rounded bg-gray-700 text-white p-2 text-sm"
  >
    <Home size="16" />
  </router-link>
  <SelectingDeck
    v-if="isSelectingDeck"
    :match="match"
    :player="player"
    :opponent="opponent"
  />
  <WaitingPlayer v-if="isWaiting" />
  <Battle
    v-if="isReady"
    :match="match"
    :player="player"
    :opponent="opponent"
    :isSpectator="isSpectator"
  />
</template>

<script>
import Loading from "@/components/ui/loading.vue";
import SelectingDeck from "@/components/game/match/table-top/selecting-deck.vue";
import WaitingPlayer from "@/components/game/match/table-top/waiting-player.vue";
import Battle from "@/components/game/match/table-top/battle.vue";
import { Home } from "lucide-vue-next";

export default {
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
  components: {
    Home,
    Loading,
    SelectingDeck,
    WaitingPlayer,
    Battle,
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
  },
};
</script>
