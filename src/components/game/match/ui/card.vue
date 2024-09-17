<template>
  <div class="border rounded bg-white w-full relative">
    <div v-if="isTurn">
      <div class="bg-stone-200 h-40 w-48" />
      <div class="p-4 flex flex-col">
        <div class="text-base text-left">{{ card.name }}</div>
        <div class="flex gap-2">
          <div class="flex gap-2 items-center">
            <Sword size="16" /> {{ card.attack }}
          </div>
          <div class="flex gap-2 items-center">
            <Shield size="16" /> {{ card.defense }}
          </div>
        </div>
      </div>
    </div>
    <div v-if="!isTurn && !card.side" class="flex flex-col h-62">
      <div class="bg-stone-200 h-40 w-48" />
      <div class="p-4 flex flex-col">
        <div class="text-base text-left">{{ card.name }}</div>
        <div class="flex gap-2">
          <div class="flex gap-2 items-center">
            <Sword size="16" /> {{ card.attack }}
          </div>
          <div class="flex gap-2 items-center">
            <Shield size="16" /> {{ card.defense }}
          </div>
        </div>
      </div>
    </div>
    <div v-if="!isTurn && card.side === 'down'">
      <div class="bg-stone-200 h-60 bg-stone-200" />
    </div>
  </div>
</template>

<script>
import { Shield, Sword } from "lucide-vue-next";
import { Button } from "@/components/ui/button";

export default {
  components: {
    Shield,
    Sword,
    Button,
  },
  props: {
    card: {
      type: Object,
    },
    isTurn: {
      type: Boolean,
    },
  },
  emits: ["toggleCard", "discardCard", "toggleCardSize"],
  methods: {
    toggleCardHand() {
      this.$emit("toggleCard", this.card);
    },
    toggleCardSide() {
      this.$emit("toggleCardSize", this.card);
    },
    discardCard() {
      this.$emit("discardCard", this.card);
    },
  },
};
</script>
