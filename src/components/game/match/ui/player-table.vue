<template>
  <div class="absolute z-40 left-0 right-0 bottom-0 flex">
    <div class="text-sm w-56 left-0 flex flex-col gap-2">
      <div class="mx-2 relative z-30">
        <Button @click="endTurn" :disabled="!player.turn" variant="outline"
          >End my turn</Button
        >
      </div>
      <div class="flex flex-col gap-2 mx-2">
        <div class="flex justify-between text-stone-200 items-center">
          <p class="text-sm">Spell deck</p>
          <p class="flex gap-2 items-center">
            <Layers3 size="16" /> {{ spellCardsCount }}
          </p>
        </div>
        <div
          class="w-50 h-32 bg-stone-400 bg-cover rounded flex items-start pl-3 justify-end pb-2 flex-col"
          :style="{ backgroundImage: 'url(/assets/deck/back.png)' }"
        >
          <div v-if="player.hand" class="">
            <Button @click="drawSpell" :disabled="!player.hasDrawn"
              >Draw</Button
            >
          </div>
          <div v-if="!player.hand" class="flex gap-2 justify-end px-2 w-full">
            <Input
              class="w-16"
              v-model="amountSpell"
              :max="7 - amountMana"
              :min="0"
              type="number"
            />
          </div>
        </div>
      </div>
      <div class="flex flex-col gap-2 mx-2">
        <div class="flex justify-between text-stone-200 items-center">
          <p class="text-sm">Mana deck</p>
          <p class="flex gap-2 items-center">
            <Layers3 size="16" /> {{ manaCardsCount }}
          </p>
        </div>
        <div
          class="w-50 h-32 bg-stone-400 bg-cover rounded flex items-start pl-3 justify-end pb-2 flex-col"
          :style="{ backgroundImage: 'url(/assets/deck/back.png)' }"
        >
          <div v-if="player.hand" class="">
            <Button @click="drawMana" :disabled="!player.hasDrawn">Draw</Button>
          </div>
          <div v-if="!player.hand" class="flex gap-2 justify-end px-2 w-full">
            <Input
              class="w-16"
              v-model="amountMana"
              :max="8 - amountSpell"
              :min="0"
              type="number"
            />
          </div>
        </div>
      </div>
      <div v-if="player.turn">
        <div
          v-if="!player.hand"
          class="text-stone-200 px-2 text-xs flex gap-2 items-center"
        >
          It's your first draw, select up to 7 cards to draw
          <Button size="xs" :disabled="!drawAvailable" @click="firstDraw"
            >Draw</Button
          >
        </div>
      </div>
      <div
        class="bg-stone-600 text-stone-200 p-2 rounded shadow-md flex flex-col items-start gap-1"
      >
        <div>
          {{ player.data.name }}
        </div>
        <div class="flex gap-4">
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
        </div>
        <button
          v-if="!isSpectator"
          class="px-2 rounded bg-stone-400 text-stone-700 hover:bg-stone-900 hover:text-red-300"
          @click="quit"
        >
          Quit match
        </button>
      </div>
    </div>
    <div class="flex-1 flex items-end">
      <div class="flex mb-8 w-full justify-center">
        <div
          class="px-1 scale-75 -mx-32 flex max-h-96 justify-center items-end flex-wrap"
        >
          <div
            v-for="(card, index) in cards"
            :key="index"
            class="mx-1 drop-shadow flex justify-center my-1 min-h-36"
          >
            <Card :card="card" :isTurn="player.turn" @toggleMana="toggleMana" />
          </div>
        </div>
      </div>
      <div
        v-if="!isSpectator"
        class="flex group justify-center absolute h-16 overflow-hidden hover:h-auto hover:overflow-auto bottom-0 left-0 right-0 z-30 left-[300px] hover:ml-0 duration-300 hover:bottom-2 pt-6"
      >
        <CardHand
          v-for="(card, index) in player.hand"
          :key="index"
          :card="card"
          :mana="player.mana"
          :isTurn="player.turn"
          @toggleCardTable="toggleCardTable"
          @toggleCardCemetary="toggleCardCemetary"
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
import { Input } from "@/components/ui/input";
import Card from "@/components/game/match/ui/card.vue";
import CardHand from "@/components/game/match/ui/card-hand.vue";
import { updateMatch } from "@/utils/match";
import { Button } from "@/components/ui/button";
import { updateAccount } from "@/utils/account";

export default {
  components: {
    Input,
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
    isSpectator: {
      type: Boolean,
    },
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
    drawAvailable() {
      return (
        this.amountMana + this.amountSpell <= 7 &&
        this.amountMana + this.amountSpell > 0
      );
    },
    spellCards() {
      return this.player.deck.filter((card) => card.manaNeeded);
    },
    spellCardsCount() {
      return this.spellCards.length;
    },
    manaCards() {
      return this.player.deck.filter((card) => card.manaValue);
    },
    manaCardsCount() {
      return this.manaCards.length;
    },
    cards() {
      return this.player.table;
    },
    tableSpellCards() {
      return this.player.table.filter((card) => card.manaNeeded);
    },
  },
  data() {
    return {
      cemetarySheet: false,
      expandedHand: false,
      expanded: true,
      amountMana: null,
      amountSpell: null,
    };
  },
  methods: {
    endTurn() {
      this.player.turn = false;
      this.player.hasDrawn = false;
      this.opponent.mana = 0;
      this.opponent.turn = true;
      this.opponent.table?.map((card) => {
        card.turnCount += 1;
        card.turnActive = false;
        return card;
      });
      this.match.turn += 1;
      this.doUpdateMatch();
    },
    toggleMana(card) {
      card.turnActive = true;
      const mana = this.player.mana ?? 0;
      this.player.mana = mana + parseInt(card.manaValue);
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
        setStore: false,
      });
      let opponentWin = this.opponent.data.win ?? 0;
      opponentWin++;
      updateAccount({
        id: this.opponent.id,
        data: {
          ...this.opponent.data,
          win: opponentWin,
        },
        setStore: false,
      });
      updateMatch({ id: this.$route.params.id, data: match });
      this.$router.push({ name: "lobby" });
    },
    doUpdateMatch() {
      const match = this.match.data();
      match.players = [this.player, this.opponent];
      updateMatch({ id: this.$route.params.id, data: match });
    },
    drawMana() {
      const mana = this.manaCards.splice(0, 1);
      this.player.hand.push(...mana);
      this.player.hasDrawn = true;
      this.doUpdateMatch();
    },
    drawSpell() {
      const spell = this.spellCards.splice(0, 1);
      this.player.hand.push(...spell);
      this.player.hasDrawn = true;
      this.doUpdateMatch();
    },
    firstDraw() {
      const mana = this.manaCards.splice(0, this.amountMana);
      const spell = this.spellCards.splice(0, this.amountSpell);
      this.player.hand = [...mana, ...spell];
      this.player.hasDrawn = true;
      this.doUpdateMatch();
    },
    toggleCardTable(card) {
      const table = this.player.table ?? [];
      const hand = this.player.hand ?? [];
      const index = hand.indexOf(card);
      hand.splice(index, 1);
      table.push(card);
      this.player.table = table;
      this.player.hand = hand;
      if (card.manaNeeded) {
        this.player.mana = this.player.mana - card.manaNeeded;
      }
      this.doUpdateMatch();
    },
  },
};
</script>
