<template>
  <div v-if="isOpponent && isHand">
    <img
      :src="cardImage"
      class="w-[200px] object-cover object-top rounded-t-lg transform rotate-180 h-16 -ml-[180px]"
    />
  </div>
  <button
    v-else
    @click="doAction"
    class="border-2 border-gray-300 rounded-lg bg-white w-[250px] h-[350px] flex flex-col shadow-md hover:shadow-lg transition-shadow duration-300"
    :class="[
      !cardList
        ? (!isGame && card.isAvailable ? 'opacity-100' : 'opacity-50',
          isGame && card.turnActive ? 'rotate-90 mx-10' : '',
          isGame && card.manaNeeded && card.turnCount === 0 ? 'opacity-40' : '')
        : '',
      isOpponent ? 'cursor-none' : '',
      isHand && !isOpponent
        ? '-mr-[140px] group-hover:ml-2 group-hover:mr-0 duration-300 hover:-translate-y-5'
        : '',
    ]"
  >
    <div class="relative w-full">
      <img :src="cardImage" class="bg-cover bg-center rounded-t-md" />
    </div>
    <div class="px-3 py-2 flex flex-col overflow-hidden text-xs gap-2 flex-1">
      <h3 class="text-sm font-bold">{{ card.name }}</h3>
      <div class="flex-1 overflow-auto">
        {{ card.ability }}
      </div>
      <div v-if="card.manaNeeded" class="flex justify-between w-full">
        <div class="flex gap-2">
          <div class="flex gap-1 items-center">
            <Sword size="16" /> {{ card.power }}
          </div>
          <div class="flex gap-1 items-center">
            <Heart size="16" /> {{ card.toughness }}
          </div>
        </div>
        <div class="flex gap-1 items-center">
          <Gem size="16" /> {{ card.manaNeeded }}
        </div>
      </div>
      <div v-if="card.manaValue" class="flex justify-between w-full mb-2">
        <div class="flex gap-1 items-center">
          <Gem size="16" /> {{ card.manaValue }}
        </div>
      </div>
    </div>
  </button>
</template>

<script>
import { Heart, Sword, Gem } from "lucide-vue-next";

export default {
  components: {
    Heart,
    Sword,
    Gem,
  },
  props: {
    card: {
      type: Object,
    },
    cardList: {
      type: Boolean,
      default: false,
    },
    isGame: {
      type: Boolean,
      default: false,
    },
    isHand: {
      type: Boolean,
      default: false,
    },
    isTurn: {
      type: Boolean,
      default: false,
    },
    isOpponent: {
      type: Boolean,
      default: false,
    },
  },
  emits: ["toggleCard"],
  data() {
    return {
      isAbilityTruncated: false,
    };
  },
  computed: {
    cardImage() {
      return this.isOpponent && this.isHand
        ? "/assets/deck/back-1.png"
        : this.card.artwork;
    },
  },
  mounted() {
    this.$nextTick(() => {
      const abilityElement = this.$el.querySelector(".text-sm");
      this.isAbilityTruncated =
        abilityElement.scrollHeight > abilityElement.clientHeight;
    });
  },
  methods: {
    doAction() {
      if (this.isHand) this.toggleCardTable();
      else if (this.isGame) {
        this.activateCard();
      } else {
        this.toggleCard();
      }
    },
    toggleCard() {
      this.$emit("toggleCard", this.card);
    },
    activateCard() {
      if (!this.isTurn) return;
      if (this.card.turnActive) return;
      if (this.card.manaValue) {
        this.$emit("toggleMana", this.card);
      }
    },
    toggleCardTable() {
      this.card.turnCount = 0;
      this.$emit("toggleCardTable", this.card);
    },
    goToCemetary() {
      if (!this.isOpponent) {
        this.$emit("toggleCardCemetary", this.card);
      }
    },
  },
};
</script>

<style scoped>
.text-sm {
  display: -webkit-box;
  -webkit-line-clamp: 9;
  -webkit-box-orient: vertical;
}
</style>
