<template>
  <div class="flex flex-col sticky pt-2 border-b top-0 bg-white">
    <div class="flex justify-between px-2 items-center">
      <div class="text-sm">Duel</div>
      <Button size="xs" variant="outline" @click="quit">Quit</Button>
    </div>
    <div class="text-sm flex justify-between">
      <div class="w-1/2 relative py-2 flex justify-center">
        <span>{{ player.data.name }}</span>
        <div class="absolute bottom-0 left-0 right-0 h-0.5 flex justify-start">
          <div
            class="h-0.5 bg-green-500"
            :style="{ width: `${(player.health / 20) * 100}%` }"
          />
        </div>
      </div>
      <div class="w-1/2 relative py-2 flex justify-center">
        <span>{{ opponent.data.name }}</span>
        <div class="absolute bottom-0 left-0 right-0 h-0.5 flex justify-end">
          <div
            class="h-0.5 bg-red-500"
            :style="{ width: `${(opponent.health / 20) * 100}%` }"
          />
        </div>
      </div>
    </div>
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
