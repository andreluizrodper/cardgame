<template>
  <div class="bg-stone-500">
    <div
      class="flex min-h-[100vh] flex-col md:mx-auto max-w-7xl shadow bg-white"
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
              <Button size="sm" :disabled="!isValid" @click="saveDeck">{{
                buttonText
              }}</Button>
            </div>
          </div>
        </div>
      </div>
      <div class="px-4 py-2 flex items-center gap-4 my-4">
        <div class="border rounded px-4 bg-gray-50 py-1 text-sm">
            {{ spellCardsCount }} spell cards
          </div>
          <div class="border rounded px-4 bg-gray-50 py-1 text-sm">
            {{ manaCardsCount }} mana cards
          </div>
      </div>
      <div class="flex-1 relative overflow-hidden flex flex-col md:flex-row">
        <div class="w-full md:w-2/6 p-4 order-1 md:order-2">
          <div class="flex justify-between items-center mb-4">
            <h2 class="text-xl font-bold">Your Deck</h2>
            <Button size="sm" @click="removeAllCards" :disabled="selectedCards.length === 0">
              Remove All Cards
            </Button>
          </div>
          <div class="flex flex-col gap-4 max-h-[200px] md:max-h-full overflow-y-auto md:overflow-y-visible">
            <div v-if="selectedCards.length === 0" class="text-gray-500 text-center">
              No cards in your deck. <br /> Add cards from the collection.
            </div>
            <div v-else>
              <div class="flex mb-4">
                <button 
                  @click="activeTab = 'spell'"
                  :class="['px-4 py-2 text-sm font-medium', activeTab === 'spell' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700']"
                >
                  Spell Cards
                </button>
                <button 
                  @click="activeTab = 'mana'"
                  :class="['px-4 py-2 text-sm font-medium', activeTab === 'mana' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700']"
                >
                  Mana Cards
                </button>
              </div>
              
              <div v-if="activeTab === 'spell'">
                <div class="flex flex-col gap-2">
                  <div
                    v-for="(card, index) in spellCards"
                    :key="index"
                    class="relative"
                  >
                    <div
                      class="border rounded p-2 cursor-pointer hover:shadow-md transition-shadow"
                      @mouseenter="hoveredCard = card"
                      @mouseleave="hoveredCard = null"
                      @click="toggleCard(card)"
                    >   
                      {{ card.name }}
                    </div>
                    <div
                      v-if="hoveredCard === card"
                      class="absolute z-10 right-full top-0 ml-2 hidden md:block"
                      style="pointer-events: none;"
                    > 
                      <Card :card="card" @toggleCard="toggleCard" />
                    </div>
                    <Button
                      class="absolute top-0 right-0 p-1 lg:hidden"
                      size="sm"
                      @click.stop="showCardDetails(card)"
                    >
                      <Eye size="16" />
                    </Button>
                  </div>
                </div>
              </div>
              
              <div v-if="activeTab === 'mana'">
                <div class="flex flex-col gap-2">
                  <div
                    v-for="(card, index) in manaCards"
                    :key="index"
                    class="relative"
                  >
                    <div
                      class="border rounded p-2 cursor-pointer hover:shadow-md transition-shadow"
                      @mouseenter="hoveredCard = card"
                      @mouseleave="hoveredCard = null"
                      @click="toggleCard(card)"
                    >   
                      {{ card.name }}
                    </div>
                    <div
                      v-if="hoveredCard === card"
                      class="absolute z-10 right-full top-0 ml-2 hidden md:block"
                      style="pointer-events: none;"
                    > 
                      <Card :card="card" @toggleCard="toggleCard" />
                    </div>
                    <Button
                      class="absolute top-0 right-0 p-1 lg:hidden"
                      size="sm"
                      @click.stop="showCardDetails(card)"
                    >
                      <Eye size="16" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Collection -->
        <div class="w-full md:w-4/6 p-4 border-b md:border-b-0 md:border-r order-2 md:order-1">
          <h2 class="text-xl font-bold mb-4">Collection</h2>
          <div v-if="!collectionSelected" class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
            <button
              v-for="(collection, index) in collections"
              :key="index"
              class="border hover:shadow-md rounded overflow-hidden"
              @click="selectCollection(collection)"
            >
              <img :src="collection.artwork" class="w-full h-24 object-cover" />
              <div
                class="px-2 py-2 bg-stone-50 text-gray-800 flex flex-col gap-1"
              >
                <span class="text-xs truncate">{{ collection.name }}</span>
                <span class="text-xs"
                  >{{ collection.cards.length }} cards</span
                >
              </div>
            </button>
          </div>
          <div v-else>
            <button
              class="flex gap-2 items-center mb-4"
              @click="collectionSelected = false"
            >
              <ChevronLeft size="16" />
              All collections
            </button>
            <div class="flex justify-between mb-4 items-center">
              <span class="text-gray-400 text-sm">
                Available cards {{ availableCards.length }}
              </span>
              <div>
                <Input v-model="search" placeholder="Search..." />
              </div>
            </div>
            <div class="flex flex-wrap gap-2 items-center justify-center">
              <Card
                v-for="(card, index) in availableCards"
                :key="index"
                :card="card"
                @toggleCard="toggleCard"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Modal for card details on mobile -->
  <div v-if="showModal" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
    <div class="bg-white p-4 rounded-lg max-w-sm w-full">
      <Card :card="selectedCardForModal" @toggleCard="toggleCard" />
      <Button class="mt-4 w-full" @click="closeModal">Close</Button>
    </div>
  </div>
</template>

<script>
import {
  ChevronDown,
  ChevronUp,
  ChevronLeft,
  ChevronRight,
  Home,
  Eye,
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

export default {
  components: {
    NavBar,
    ChevronLeft,
    Input,
    Card,
    ChevronDown,
    ChevronUp,
    Button,
    ChevronRight,
    Home,
    Eye,
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
    spellCards() {
      return this.selectedCards.filter((card) => card.manaNeeded);
    },
    manaCards() {
      return this.selectedCards.filter((card) => card.manaValue);
    },
  },
  data() {
    return {
      collectionSelected: false,
      search: "",
      selectedCards: [],
      artwork: null,
      cards: [],
      name: "",
      collectionName: null,
      collections: [Human, Elf, Goblin, Skeleton, Mana],
      hoveredCard: null,
      showModal: false,
      selectedCardForModal: null,
      activeTab: 'spell',
    };
  },
  async mounted() {
    if (this.$route.params.id) {
      const deck = await getDeck(this.$route.params.id);
      if (deck) {
        this.name = deck.data().name;
        this.selectedCards = deck.data().cards;
      } else {
        console.error("Failed to load deck");
        this.$store.commit("addToast", { description: "Failed to load deck", type: "error" });
      }
    }
  },
  methods: {
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
      if (this.selectedCards.some(c => c.name === card.name)) {
        this.selectedCards = this.selectedCards.filter(c => c.name !== card.name);
      } else {
        this.selectedCards.push(card);
      }
    },
    async saveDeck() {
      try {
        const deckData = {
          name: this.name,
          cards: this.selectedCards,
        };

        if (this.$route.params.id) {
          await updateDeck({
            id: this.$route.params.id,
            data: deckData,
          });
          this.$store.commit("addToast", { description: `Deck updated!`, type: "success" });
        } else {
          await createDeck({
            data: deckData,
          });
          this.$store.commit("addToast", { description: `Deck created!`, type: "success" });
        }
        this.$router.push({ name: "decks" });
      } catch (error) {
        console.error("Error saving deck:", error);
        this.$store.commit("addToast", { description: `Failed to save deck: ${error.message}`, type: "error" });
      }
    },
    removeAllCards() {
      this.selectedCards = [];
    },
    showCardDetails(card) {
      this.selectedCardForModal = card;
      this.showModal = true;
    },
    closeModal() {
      this.showModal = false;
      this.selectedCardForModal = null;
    },
  },
};
</script>

<style scoped>
/* Add any necessary styles here */
</style>