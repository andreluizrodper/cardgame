<template>
  <div v-if="isLoading" class="flex items-center justify-center min-h-[100vh]">
    <Loading />
  </div>
  <div
    v-if="!isLoading"
    class="min-h-[100vh] flex flex-col w-full bg-cover"
    :class="isSpectator ? 'pointer-events-none' : ''"
    :style="{ 'background-image': 'url(/assets/bg/battlefield_1.png)' }"
  >
    <!-- <OpponentTable :player="player" :opponent="opponent" /> -->
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
import OpponentTable from "@/components/game/match/table-top/battle/opponent-table.vue";
import PlayerTable from "@/components/game/match/table-top/battle/player-table.vue";

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
