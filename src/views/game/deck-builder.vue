<template>
  <div class="bg-stone-500">
    <div
      class="flex min-h-[100vh] flex flex-col md:mx-auto max-w-7xl shadow bg-white"
    >
      <div class="sticky top-0 left-0 right-0 flex flex-col z-30">
        <NavBar />
        <div class="flex flex-col py-3 border-b bg-gray-100 gap-2">
          <div class="px-4 text-sm flex gap-2 items-center">
            <router-link
              :to="{ name: 'lobby' }"
              class="flex items-center gap-2 text-sm"
            >
              <Home size="16" />
              Lobby
            </router-link>
            <ChevronRight size="14" />
            <router-link
              :to="{ name: 'decks' }"
              class="flex gap-1 items-center text-sm"
            >
              My decks
            </router-link>
            <ChevronRight size="14" />
            <span v-if="$route.params.id"> Editing deck </span>
            <span v-else> Creating deck </span>
          </div>
          <div class="flex justify-between px-4 items-center">
            <div class="max-w-96 w-full">
              <Input v-model="name" placeholder="Deck name" />
            </div>
            <div class="flex gap-4 items-center">
              <div />
              <Button size="sm" :disabled="!isValid" @click="save">{{
                buttonText
              }}</Button>
            </div>
          </div>
        </div>
      </div>
      <div class="px-4 py-2 flex items-center justify-between">
        <div class="flex items-center gap-2">
          <div class="border rounded px-4 bg-gray-50 py-1 text-sm">
            {{ spellCardsCount }} cards
          </div>
          <div class="border rounded px-4 bg-gray-50 py-1 text-sm">
            {{ manaCardsCount }} mana cards
          </div>
        </div>
        <Button size="sm" @click="collectionSeet = true">Your cards</Button>
        <Sheet
          class="max-w-md"
          :open="collectionSeet"
          @update:open="toggleSheetCollection"
        >
          <SheetContent>
            <SheetHeader>
              <SheetTitle>
                {{
                  collectionSelected
                    ? `${collectionName} Cards`
                    : "Select a colection"
                }}
              </SheetTitle>
              <SheetDescription> </SheetDescription>
            </SheetHeader>
            <div v-if="!collectionSelected" class="grid grid-cols-2 gap-2">
              <button
                v-for="(collection, index) in collections"
                :key="index"
                class="border hover:shadow-md rounded overflow-hidden min-w-32"
                @click="selectCollection(collection)"
              >
                <img :src="collection.artwork" />
                <div
                  class="px-2 py-2 bg-stone-50 text-gray-800 flex flex-col gap-1"
                >
                  <span>{{ collection.name }}</span>
                  <span class="text-xs"
                    >{{ collection.cards.length }} cards</span
                  >
                </div>
              </button>
            </div>
            <div v-else>
              <button
                class="flex gap-2 items-center"
                @click="collectionSelected = false"
              >
                <ChevronLeft size="16" />
                All collections
              </button>
              <div class="flex justify-between px-4 py-2 items-center">
                <span class="text-gray-400 text-sm">
                  Available cards {{ availableCards.length }}
                </span>
                <div>
                  <Input v-model="search" placeholder="Search..." />
                </div>
              </div>
              <div
                v-show="expanded"
                class="grid gap-2 grid-cols-2 overflow-y-auto"
              >
                <Card
                  v-for="(card, index) in availableCards"
                  :key="index"
                  :card="card"
                  @toggleCard="toggleCard"
                />
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
      <div class="flex-1 relative overflow-hidden">
        <div
          class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-2 p-2"
        >
          <div
            v-for="(card, index) in selectedCards"
            :key="index"
            class="flex justify-center"
          >
            <Card @toggleCard="toggleCard" :card="card" />
          </div>
        </div>
      </div>
    </div>
  </div>
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
  ChevronLeft,
  ChevronRight,
  Home,
} from "lucide-vue-next";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Human from "@/assets/cards/human.json";
import Elf from "@/assets/cards/elf.json";
import Goblin from "@/assets/cards/goblin.json";
import Skeleton from "@/assets/cards/skeleton.json";
import Mana from "@/assets/cards/mana.json";
import Card from "@/components/game/decks/card.vue";
import { updateDeck, createDeck, getDeck } from "@/utils/deck";
import NavBar from "@/components/game/ui/nav-bar.vue";

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

export default {
  components: {
    NavBar,
    ChevronLeft,
    Input,
    Card,
    ChevronDown,
    ChevronUp,
    Button,
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
    ChevronRight,
    Home,
  },
  computed: {
    buttonText() {
      if (this.$route.params.id) return "Save";
      return "Create";
    },
    spellCardsCount() {
      return this.selectedCards.filter((card) => card.manaNeeded).length;
    },
    manaCardsCount() {
      return this.selectedCards.filter((card) => card.manaValue).length;
    },
    selectedCardsCount() {
      return this.selectedCards.length;
    },
    selectedCardsNames() {
      return this.selectedCards.map((card) => card.name);
    },
    availableCards() {
      const search = this.search.toLowerCase();
      return this.cards
        .filter((card) => !this.selectedCardsNames.includes(card.name))
        .filter((card) => card.name.toLowerCase().includes(search));
    },
    isValid() {
      return this.name.length > 4 && this.spellCardsCount >= 40;
    },
  },
  data() {
    return {
      drawerCard: false,
      collectionSeet: false,
      collectionSelected: false,
      search: "",
      selectedCards: [],
      artwork: null,
      cards: [],
      name: "",
      expanded: true,
      collectionName: null,
      collections: [Human, Elf, Goblin, Skeleton, Mana],
    };
  },
  async mounted() {
    if (this.$route.params.id) {
      const deck = await getDeck(this.$route.params.id);
      this.name = deck.data().name;
      this.selectedCards = deck.data().cards;
    }
  },
  methods: {
    toggleSheetCollection() {
      this.collectionSeet = false;
    },
    selectCollection(collection) {
      this.collectionSelected = true;
      this.collectionName = collection.name;
      const cards = collection.cards.map((card) => {
        return {
          ...card,
          artwork: collection.artwork,
        };
      });
      this.cards = cards;
    },
    toggleCard(card) {
      if (this.selectedCards.includes(card)) {
        const index = this.selectedCards.indexOf(card);
        this.selectedCards.splice(index, 1);
      } else this.selectedCards.push(card);
    },
    save() {
      if (this.$route.params.id) {
        updateDeck({
          id: this.$route.params.id,
          data: {
            name: this.name,
            cards: this.selectedCards,
          },
        });
        this.$store.commit("addToast", { description: `Deck updated!` });
      } else {
        createDeck({
          data: {
            name: this.name,
            cards: this.selectedCards,
          },
        });
        this.$store.commit("addToast", { description: `Deck created!` });
      }
      this.$router.push({ name: "decks" });
    },
  },
};
</script>
