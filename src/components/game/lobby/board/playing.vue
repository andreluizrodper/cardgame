<template>
  <router-link :to="{ name: 'match', params: { id: match.id } }">
    <div
      class="border px-4 py-2 flex flex-col items-center gap-2 rounded hover:shadow-md bg-gray-50"
    >
      <div class="flex items-center gap-4">
        <div class="flex flex-col gap-1 items-center flex-1">
          <div class="text-center">{{ player1.data.name }}</div>
          <div class="flex gap-2 items-center">
            <Heart size="16" /> {{ player1.health }}
          </div>
        </div>
        <X size="22" />
        <div class="flex flex-col gap-1 items-center flex-1">
          <div class="text-center">{{ player2.data.name }}</div>
          <div class="flex gap-2 items-center">
            <Heart size="16" /> {{ player2.health }}
          </div>
        </div>
      </div>
    </div>
  </router-link>
</template>

<script>
import { Button } from "@/components/ui/button";
import { Heart, X } from "lucide-vue-next";

export default {
  components: {
    Button,
    Heart,
    X,
  },
  props: {
    match: { type: Object },
  },
  computed: {
    player1() {
      return this.match.data().players[0];
    },
    player2() {
      return this.match.data().players[1];
    },
  },
  mounted() {
    console.log(this.match.data().players);
  },
};
</script>
