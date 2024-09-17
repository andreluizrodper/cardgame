<template>
  <div
    class="sticky border-b top-0 bg-white flex justify-between p-2 items-center"
  >
    <div class="text-sm">Duel</div>
    <Button size="xs" variant="outline" @click="quit">Quit match</Button>
  </div>
</template>

<script>
import { Button } from "@/components/ui/button";
import { updateMatch } from "@/utils/match";

export default {
  props: {
    opponent: {
      type: Object,
    },
    player: {
      type: Object,
    },
    match: {
      type: Object,
    },
  },
  components: {
    Button,
  },
  methods: {
    quit() {
      this.player.status = "lose";
      this.opponent.status = "win";
      const match = this.match.data();
      match.status = "done";
      match.players = [this.player, this.opponent];
      updateMatch({ id: this.$route.params.id, data: match });
      this.$router.push({ name: "lobby" });
    },
  },
};
</script>
