<template>
  <div class="flex min-h-[100vh] flex flex-col">
    <div
      class="sticky top-0 left-0 right-0 bg-white py-4 flex gap-2 flex-col border-b"
    >
      <div class="px-4">
        <router-link :to="{ name: 'decks' }" class="flex gap-1 items-center">
          <ChevronLeft size="16" />
          Back
        </router-link>
      </div>
      <div class="flex justify-between px-4 items-center">
        <div>
          <Input v-model="name" placeholder="Deck name" />
        </div>
        <div class="text-xl text-gray-800">
          {{ selectedCardsCount }} selected
        </div>
        <Button size="sm" :disabled="!isValid" @click="save">{{
          buttonText
        }}</Button>
      </div>
    </div>
    <div class="flex-1">
      <div class="grid grid-cols-2 gap-4 px-4 py-4">
        <Card
          v-for="(card, index) in selectedCards"
          :key="index"
          :card="card"
          @toggleCard="toggleCard"
        />
      </div>
    </div>
    <div class="sticky bottom-0 left-0 right-0 bg-gray-100">
      <div
        @click="expanded = !expanded"
        class="absolute -top-6 flex justify-center left-0 right-0"
      >
        <span class="bg-gray-100 rounded-t px-4 py-2">
          <ChevronDown v-if="expanded" size="18" />
          <ChevronUp v-if="!expanded" size="18" />
        </span>
      </div>
      <div
        v-show="expanded"
        class="flex justify-between px-4 py-2 items-center"
      >
        <span class="text-gray-400 text-sm">
          Available cards {{ availableCards.length }}
        </span>
        <div>
          <Input v-model="search" />
        </div>
      </div>
      <div v-show="expanded" class="overflow-x-auto py-2 px-4 flex gap-1">
        <Card
          v-for="(card, index) in availableCards"
          :key="index"
          :card="card"
          @toggleCard="toggleCard"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { ChevronDown, ChevronUp, ChevronLeft } from "lucide-vue-next";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Cards from "@/assets/cards/deck.json";
import Card from "@/components/game/decks/card.vue";
import { updateDeck, createDeck, getDeck } from "@/utils/deck";

export default {
  components: {
    ChevronLeft,
    Input,
    Card,
    ChevronDown,
    ChevronUp,
    Button,
  },
  computed: {
    buttonText() {
      if (this.$route.params.id) return "Edit";
      return "Create";
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
      return this.name.length > 4 && this.selectedCardsCount >= 40;
    },
  },
  data() {
    return {
      search: "",
      selectedCards: [],
      cards: Cards,
      name: "",
      expanded: true,
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
