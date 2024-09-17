<template>
  <div class="border rounded bg-white w-full relative">
    <div v-if="isTurn">
      <div
        class="absolute h-40 justify-center top-0 left-0 right-0 flex gap-2 flex-col"
      >
        <div class="flex justify-center w-full">
          <Button @click="discardCard" size="xs">Discard</Button>
        </div>
        <div class="flex justify-center w-full">
          <Button @click="toggleCardHand" size="xs">Back to hand</Button>
        </div>
        <div class="flex justify-center w-full">
          <Button @click="toggleCardSide" size="xs">
            {{ card.side === "down" ? "Face down" : "Face up" }}
          </Button>
        </div>
      </div>
      <div class="bg-stone-200 h-40" />
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
      <div class="bg-stone-200 h-40" />
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
