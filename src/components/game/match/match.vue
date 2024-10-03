<template>
  <div v-if="isLoading" class="flex items-center justify-center min-h-[100vh]">
    <Loading />
  </div>
  <div
    v-if="!isLoading"
    class="min-h-[100vh] flex flex-col w-full"
    :class="isSpectator ? 'pointer-events-none' : ''"
    :style="{
      'background-image': 'url(/assets/bg/battlefield_3.png)',
      'background-repeat': 'no-repeat',
      'background-size': 'cover',
    }"
  >
    <OpponentTable :opponent="opponent" />
    <PlayerTable
      :isSpectator="isSpectator"
      :player="player"
      :match="match"
      :opponent="opponent"
    />
  </div>
</template>

<script>
import Loading from "@/components/ui/loading.vue";
import OpponentTable from "@/components/game/match/ui/opponent-table.vue";
import PlayerTable from "@/components/game/match/ui/player-table.vue";

export default {
  components: {
    Loading,
    OpponentTable,
    PlayerTable,
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
    isSpectator: {
      type: Boolean,
    },
  },
};
</script>
