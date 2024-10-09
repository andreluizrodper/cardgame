<template>
  <!-- <div class="absolute z-30 left-0 right-0 top-0">
    <div class="flex">
      <div class="text-sm w-56 right-0 flex flex-col gap-2">
        <div class="flex flex-col gap-2 mx-2">
          <div class="flex justify-between text-stone-200 items-center">
            <p class="text-sm">Spell deck</p>
            <p class="flex gap-2 items-center">
              <Layers3 size="16" /> {{ spellCardsCount }}
            </p>
          </div>
          <img
            src="/assets/deck/back-2-90-deg.png"
            class="h-42 object-center rounded"
          />
        </div>
        <div class="flex flex-col gap-2 mx-2">
          <div class="flex justify-between text-stone-200 items-center">
            <p class="text-sm">Mana deck</p>
            <p class="flex gap-2 items-center">
              <Layers3 size="16" /> {{ manaCardsCount }}
            </p>
          </div>
          <img
            src="/assets/deck/back-3-90-deg.png"
            class="h-42 object-center rounded"
          />
        </div>
        <div
          class="bg-stone-600 text-stone-200 p-2 rounded shadow-md flex flex-col items-start gap-1"
        >
          <div>
            {{ opponent.data.name }}
          </div>
          <div class="flex gap-4">
            <span
              class="flex gap-1 items-center"
              :class="!opponent.mana || opponent.mana <= 0 ? 'opacity-40' : ''"
            >
              <Gem size="16" /> {{ opponent.mana }}
            </span>
            <span class="flex gap-1 items-center">
              <Heart size="16" /> {{ opponent.health }}
            </span>
            <span class="flex gap-1 items-center">
              <Layers3 size="16" />
              {{ opponent.deck.length }}
            </span>
            <button
              v-if="opponent.cemetary"
              class="border bg-gray-50 rounded flex gap-2 items-center px-2 py-1 relative"
              @click="cemetarySheet = true"
            >
              <span
                class="absolute -top-1 -right-2 px-2 rounded-full text-xs bg-red-300 text-white"
                >{{ opponent.cemetary.length }}</span
              >
              <Skull size="16" />
            </button>
          </div>
        </div>
      </div>
      <div class="flex-1 flex items-start">
        <div class="flex mt-12 w-full justify-center">
          <div
            class="px-1 scale-75 -mx-32 flex max-h-96 justify-center items-start flex-wrap"
          >
            <div
              v-for="(card, index) in cards"
              :key="index"
              class="mx-1 drop-shadow flex justify-center my-1 min-h-36"
            >
              <Card :card="card" :isOpponent="true" />
            </div>
          </div>
        </div>
        <Hand :cards="opponent.hand" :isOpponent="true" />
      </div>
    </div>
  </div> -->
  <Sheet
    class="max-w-md"
    :open="cemetarySheet"
    @update:open="toggleCemetarySheet"
  >
    <SheetContent>
      <SheetHeader>
        <SheetTitle> Opponent's Cemetary </SheetTitle>
        <SheetDescription> </SheetDescription>
      </SheetHeader>
      <div class="grid gap-2 grid-cols-2 overflow-y-auto">
        <CardDetail
          v-for="(card, index) in opponent.cemetary"
          :key="index"
          :card="card"
          :isOpponent="true"
        />
      </div>
    </SheetContent>
  </Sheet>
</template>

<script>
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Heart, Layers3, Skull, Gem } from "lucide-vue-next";
import Hand from "@/components/game/match/table-top/hand.vue";
import CardDetail from "@/components/game/match/table-top/CardDetail.vue";

export default {
  components: {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    Hand,
    Gem,
    Heart,
    Layers3,
    Skull,
    CardDetail,
  },
  props: {
    opponent: {
      type: Object,
    },
    player: {
      type: Object,
    },
  },
  computed: {
    spellCardsCount() {
      return this.opponent.deck.filter((card) => card.manaNeeded).length;
    },
    manaCardsCount() {
      return this.opponent.deck.filter((card) => card.manaValue).length;
    },
    cards() {
      return this.opponent.table;
    },
  },
  data() {
    return {
      cemetarySheet: false,
    };
  },
  methods: {
    toggleCemetarySheet() {
      this.cemetarySheet = false;
    },
  },
};
</script>
