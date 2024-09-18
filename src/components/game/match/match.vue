<template>
  <div v-if="isLoading" class="flex items-center justify-center min-h-[100vh]">
    <Loading />
  </div>
  <div v-if="!isLoading" class="min-h-[100vh] flex flex-col w-full bg-gray-600">
    <OpponentTable :opponent="opponent" />
    <div class="flex-1 items-center flex">
      <Turn :match="match" :player="player" :opponent="opponent" />
    </div>
    <PlayerTable :player="player" :match="match" :opponent="opponent" />
  </div>
</template>

<script>
import Loading from "@/components/ui/loading.vue";
import OpponentTable from "@/components/game/match/ui/opponent-table.vue";
import PlayerTable from "@/components/game/match/ui/player-table.vue";
import Turn from "@/components/game/match/ui/turn.vue";

export default {
  components: {
    Loading,
    OpponentTable,
    PlayerTable,
    Turn,
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
    isLoading: {
      type: Boolean,
    },
  },
  computed: {
    deck() {
      return this.player.deck;
    },
    account() {
      return this.$store.state.account;
    },
    opponentHand() {
      return this.opponent.hand;
    },
    hand() {
      return this.player.hand ?? [];
    },
  },
};
</script>
