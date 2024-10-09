<template>
  <Waiting v-if="match.data().status === 'waiting'" :match="match" />
  <Playing v-if="match.data().status === 'playing'" :match="match" />
</template>

<script>
import Waiting from "@/components/game/lobby/board/waiting.vue";
import Playing from "@/components/game/lobby/board/playing.vue";

export default {
  components: {
    Waiting,
    Playing,
  },
  props: {
    match: { type: Object },
  },
};
</script>
