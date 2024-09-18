<template>
  <div class="absolute z-40 left-0 right-0 bottom-0 bg-gray-100 pt-4">
    <div
      class="px-1 flex max-h-96"
      :class="expanded ? 'overflow-y-auto' : 'overflow-y-hidden pl-36'"
    >
      <div
        v-for="(card, index) in cards"
        :key="index"
        class="mx-1 drop-shadow flex justify-center"
        :class="expanded ? 'my-1 min-h-36' : 'h-12 -ml-32 -mb-4'"
      >
        <Card
          :card="card"
          :isTurn="player.turn"
          :expanded="expanded"
          @toggleMana="toggleMana"
        />
      </div>
    </div>
    <div
      @click="expanded = !expanded"
      class="absolute -top-4 flex justify-center left-0 right-0"
    >
      <span class="bg-gray-100 rounded-t px-2 py-1">
        <ChevronDown v-if="expanded" size="16" />
        <ChevronUp v-if="!expanded" size="16" />
      </span>
    </div>
    <div
      class="bg-gray-200 overflow-hidden"
      :class="expandedHand ? '' : 'h-16'"
    >
      <div class="flex justify-between p-2">
        <div class="text-sm flex gap-2 items-center">
          My hand

          <span
            class="border bg-gray-50 rounded flex gap-2 items-center px-2 py-1"
          >
            <Layers3 size="16" /> {{ (player.hand && player.hand.length) || 0 }}
          </span>
        </div>
        <div class="flex gap-2">
          <button
            v-if="player.cemetary"
            class="border bg-gray-50 rounded flex gap-2 items-center px-2 py-1 relative"
            @click="cemetarySheet = true"
          >
            <span
              class="absolute -top-1 -right-2 px-2 rounded-full text-xs bg-red-300 text-white"
              >{{ player.cemetary.length }}</span
            >
            <Skull size="16" />
          </button>
          <button
            class="border bg-gray-50 rounded flex gap-2 items-center px-2 py-1"
            @click="draw"
          >
            <RefreshCcw size="16" />
          </button>
          <button
            @click="expandedHand = !expandedHand"
            class="border bg-gray-50 rounded flex gap-2 items-center px-2 py-1"
          >
            <ChevronDown v-if="expandedHand" size="16" />
            <ChevronUp v-if="!expandedHand" size="16" />
          </button>
        </div>
      </div>
      <div class="overflow-x-auto gap-1 pb-2 px-1">
        <div class="flex" :class="expandedHand ? '' : 'ml-32'">
          <CardHand
            v-for="(card, index) in player.hand"
            :key="index"
            :card="card"
            :expandedHand="expandedHand"
            :mana="player.mana"
            :isTurn="player.turn"
            @toggleCard="toggleCardHand"
            @toggleCardCemetary="toggleCardCemetary"
          />
        </div>
      </div>
    </div>
    <div
      v-if="player.data"
      class="w-full relative py-2 flex justify-center text-sm"
    >
      <div class="flex w-full justify-between px-4 items-center">
        <div>
          {{ player.data.name }}
        </div>
        <div class="flex gap-2">
          <span
            class="flex gap-1 items-center"
            :class="!player.mana || player.mana <= 0 ? 'opacity-40' : ''"
          >
            <Gem size="16" /> {{ player.mana }}
          </span>
          <span class="flex gap-1 items-center">
            <Heart size="16" /> {{ player.health }}
          </span>
          <span class="flex gap-1 items-center">
            <Layers3 size="16" />
            {{ player.deck.length }}
          </span>
          <Button size="xs" variant="outline" @click="quit">Quit match</Button>
        </div>
      </div>
      <div class="absolute top-0 left-0 right-0 h-0.5 flex">
        <div
          class="h-0.5 bg-green-500"
          :style="{ width: `${(player.health / 20) * 100}%` }"
        />
      </div>
    </div>
  </div>
  <Sheet
    class="max-w-md"
    :open="cemetarySheet"
    @update:open="toggleCemetarySheet"
  >
    <SheetContent>
      <SheetHeader>
        <SheetTitle> Cemetary </SheetTitle>
        <SheetDescription> </SheetDescription>
      </SheetHeader>
      <div class="grid gap-2 grid-cols-2 overflow-y-auto">
        <Card
          v-for="(card, index) in player.cemetary"
          :key="index"
          :card="card"
          @toggleCard="toggleCard"
        />
      </div>
    </SheetContent>
  </Sheet>
</template>

<script>
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  ChevronDown,
  ChevronUp,
  Heart,
  Layers3,
  RefreshCcw,
  Skull,
  Gem,
} from "lucide-vue-next";
import Card from "@/components/game/match/ui/card.vue";
import CardHand from "@/components/game/match/ui/card-hand.vue";
import { updateMatch } from "@/utils/match";
import { Button } from "@/components/ui/button";
import { updateAccount } from "@/utils/account";

export default {
  components: {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
    Button,
    Card,
    CardHand,
    Gem,
    ChevronDown,
    Skull,
    ChevronUp,
    Heart,
    Layers3,
    RefreshCcw,
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
  },
  computed: {
    cards() {
      return this.player.table;
    },
  },
  data() {
    return {
      cemetarySheet: false,
      expandedHand: false,
      expanded: false,
    };
  },
  mounted() {
    if (this.player.turn) {
      this.draw();
    }
  },
  methods: {
    toggleMana(card) {
      card.turnActive = true;
      const mana = this.player.mana ?? 0;
      this.player.mana = mana + card.manaValue;
      const match = this.match.data();
      match.players = [this.player, this.opponent];
      updateMatch({ id: this.$route.params.id, data: match });
    },
    toggleCemetarySheet() {
      this.cemetarySheet = false;
    },
    toggleCardCemetary(card) {
      const cemetary = this.player.cemetary ?? [];
      cemetary.push(card);
      this.player.cemetary = cemetary;
      const indexCard = this.player.hand.indexOf(card);
      this.player.hand.splice(indexCard, 1);
      const match = this.match.data();
      match.players = [this.player, this.opponent];
      updateMatch({ id: this.$route.params.id, data: match });
    },
    quit() {
      this.player.status = "lose";
      this.opponent.status = "win";
      const match = this.match.data();
      match.status = "done";
      match.players = [this.player, this.opponent];
      let playerLose = this.player.data.lose ?? 0;
      playerLose++;
      updateAccount({
        id: this.player.id,
        data: {
          ...this.player.data,
          lose: playerLose,
        },
      });
      let opponentWin = this.opponent.data.win ?? 0;
      opponentWin++;
      updateAccount({
        id: this.opponent.id,
        data: {
          ...this.opponent.data,
          win: opponentWin,
        },
      });
      updateMatch({ id: this.$route.params.id, data: match });
      this.$router.push({ name: "lobby" });
    },
    draw() {
      if (this.player.hand?.length > 0) {
        this.player.deck.push(...this.player.hand);
      }
      this.player.hand = this.player.deck.splice(0, 8);
      const match = this.match.data();
      match.players = [this.player, this.opponent];
      updateMatch({ id: this.$route.params.id, data: match });
    },
    toggleCardHand(card) {
      const table = this.player.table ?? [];
      const hand = this.player.hand ?? [];
      const index = hand.indexOf(card);
      hand.splice(index, 1);
      table.push(card);
      this.player.table = table;
      this.player.hand = hand;
      this.player.mana = this.player.mana - card.manaNeeded;
      const match = this.match.data();
      match.players = [this.player, this.opponent];
      updateMatch({ id: this.$route.params.id, data: match });
    },
  },
};
</script>
