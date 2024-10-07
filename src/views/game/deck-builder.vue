<template>
  <div class="bg-stone-500">
    <div
      class="flex min-h-[100vh] flex-col md:mx-auto max-w-7xl shadow bg-white"
    >
      <div class="sticky top-0 left-0 right-0 flex flex-col z-30">
        <NavBar />
        <div class="flex flex-col py-3 border-b bg-gray-100 gap-2">
          <Breadcrumbs />
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
      <div class="flex-1 relative overflow-hidden flex flex-col md:flex-row">
        <div class="w-full md:w-2/6 p-4 order-1 md:order-2">
          <div class="flex justify-between items-center mb-4">
            <div class="flex flex-col">
              <h2 class="text-xl font-bold">Your Deck</h2>
              <span class="text-xs"
                >{{ spellCardsCount + manaCardsCount }} cards</span
              >
            </div>
            <Button
              size="sm"
              @click="removeAllCards"
              :disabled="selectedCards.length === 0"
            >
              Remove All Cards
            </Button>
          </div>
          <div
            class="flex flex-col gap-4 max-h-[200px] md:max-h-full overflow-y-auto md:overflow-y-visible"
          >
            <div
              v-if="selectedCards.length === 0"
              class="text-gray-500 text-center"
            >
              No cards in your deck. <br />
              Add cards from the collection.
            </div>
            <div v-else>
              <div class="flex mb-4 gap-2">
                <Button
                  size="sm"
                  @click="activeTab = 'spell'"
                  :variant="activeTab === 'spell' ? 'default' : 'outline'"
                >
                  Spell Cards ({{ spellCardsCount }})
                </Button>
                <Button
                  size="sm"
                  @click="activeTab = 'mana'"
                  :variant="activeTab === 'mana' ? 'default' : 'outline'"
                >
                  Mana Cards ({{ manaCardsCount }})
                </Button>
              </div>

              <div>
                <div class="flex flex-col gap-2">
                  <SelectedCardItem
                    v-for="(card, index) in filterCardsByTab"
                    :key="index"
                    :card="card"
                    @toggleCard="toggleCard"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          class="w-full md:w-4/6 p-4 border-b md:border-b-0 md:border-r order-2 md:order-1"
        >
          <h2 class="text-xl font-bold mb-4">Collection</h2>
          <div
            v-if="!collectionSelected"
            class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2"
          >
            <CollectionItem
              v-for="(collection, index) in collections"
              :key="index"
              :collection="collection"
              @selectCollection="selectCollection"
              :selectedCardsNames="selectedCardsNames"
            />
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
                Available cards: {{ cardListAvailableCount }}
              </span>
              <div>
                <Input v-model="search" placeholder="Search..." />
              </div>
            </div>
            <div class="flex gap-2"></div>
            <div class="flex flex-wrap gap-2 items-center justify-center">
              <CardDetail
                v-for="(card, index) in cardList"
                :key="index"
                :card="card"
                @toggleCard="toggleCard"
                :width="250"
                :height="350"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Modal for card details on mobile -->
  <div
    v-if="showModal"
    class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
  >
    <div class="bg-white p-4 rounded-lg max-w-sm w-full">
      <Card :card="selectedCardForModal" @toggleCard="toggleCard" />
      <Button class="mt-4 w-full" @click="closeModal">Close</Button>
    </div>
  </div>
</template>

<script>
import { ChevronDown, ChevronUp, ChevronLeft, Eye } from "lucide-vue-next";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Wisps from "@/assets/cards/wisps.json";
import Mana from "@/assets/cards/mana.json";
import CardDetail from "@/components/game/match/table-top/CardDetail.vue";
import { updateDeck, createDeck, getDeck } from "@/utils/deck";
import NavBar from "@/components/game/ui/nav-bar.vue";
import CardCount from "@/components/game/deck-builder/card-count.vue";
import Breadcrumbs from "@/components/game/deck-builder/breadcrumbs.vue";
import CollectionItem from "@/components/game/deck-builder/collection-item.vue";
import SelectedCardItem from "@/components/game/deck-builder/selected-card-item.vue";

export default {
  components: {
    NavBar,
    Breadcrumbs,
    CollectionItem,
    SelectedCardItem,
    CardCount,
    ChevronLeft,
    Input,
    CardDetail,
    ChevronDown,
    ChevronUp,
    Button,
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
    cardList() {
      const search = this.search.toLowerCase();
      return this.cards
        .map((card) => ({
          ...card,
          isAvailable: !this.selectedCardsNames.includes(card.name),
        }))
        .filter((card) => card.name.toLowerCase().includes(search))
        .sort((a, b) =>
          a.isAvailable === b.isAvailable ? 0 : a.isAvailable ? -1 : 1
        );
    },
    cardListAvailableCount() {
      return this.cardList.filter((card) => card.isAvailable).length;
    },
    isValid() {
      return this.name.length > 4;
    },
    spellCards() {
      return this.selectedCards.filter((card) => card.manaNeeded);
    },
    manaCards() {
      return this.selectedCards.filter((card) => card.manaValue);
    },
    filterCardsByTab() {
      if (this.activeTab === "mana") return this.manaCards;
      return this.spellCards;
    },
  },
  data() {
    return {
      collectionSelected: false,
      search: "",
      selectedCards: [],
      cards: [],
      name: "",
      collectionName: null,
      collections: [Wisps, Mana], // Add Mana to the collections
      hoveredCard: null,
      showModal: false,
      selectedCardForModal: null,
      activeTab: "spell",
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
        this.$store.commit("addToast", {
          description: "Failed to load deck",
          type: "error",
        });
      }
    }
  },
  methods: {
    selectCollection(collection) {
      this.collectionSelected = true;
      this.collectionName = collection.name;
      this.cards = collection.cards; // Set the cards when a collection is selected
    },
    toggleCard(card) {
      if (this.selectedCards.some((c) => c.name === card.name)) {
        this.selectedCards = this.selectedCards.filter(
          (c) => c.name !== card.name
        );
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
          this.$store.commit("addToast", {
            description: `Deck updated!`,
            type: "success",
          });
        } else {
          await createDeck({
            data: deckData,
          });
          this.$store.commit("addToast", {
            description: `Deck created!`,
            type: "success",
          });
        }
        this.$router.push({ name: "decks" });
      } catch (error) {
        console.error("Error saving deck:", error);
        this.$store.commit("addToast", {
          description: `Failed to save deck: ${error.message}`,
          type: "error",
        });
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
