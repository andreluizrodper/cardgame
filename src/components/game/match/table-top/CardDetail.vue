<template>
  <div
    ref="cardContainer"
    class="text-stone-200 rounded-xl shadow-md cursor-pointer transition-all duration-200 bg-cover bg-center"
    :style="containerStyle"
    @click="doAction"
    :class="[
      !cardList
        ? (!isGame && card.isAvailable ? 'opacity-100' : 'opacity-50',
          isGame && card.turnActive ? 'rotate-90' : '',
          isGame && card.manaNeeded && card.turnCount === 0 ? 'opacity-40' : '')
        : '',
      isOpponent ? 'cursor-none' : '',
      isHand && !isOpponent
        ? 'hover:-translate-y-5 transition-transform duration-300'
        : '',
    ]"
  >
    <div v-if="!isOpponent" class="flex flex-col w-full h-full relative">
      <div
        class="h-[52%] w-full bg-cover bg-center rounded-t-xl absolute top-0 left-0"
        :style="{ backgroundImage: `url(${card.artwork})` }"
      />
      <div
        class="w-full h-[12%] bg-cover bg-center absolute top-[50%] left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        :style="{ backgroundImage: 'url(/assets/deck/card-front-values.png)' }"
      />
      <div
        class="text-center absolute top-[50%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex justify-between"
        :style="{
          fontSize: `${dimensions.height * 0.06}px`,
          width: card.power < 10 ? '82%' : '88%',
        }"
      >
        <span class="font-bold font-mono">
          {{ card.power }}
        </span>
        <span class="font-bold font-mono">
          {{ card.toughness }}
        </span>
      </div>
      <div
        class="absolute top-[57%] flex flex-col gap-[2%] w-full items-start px-[2%]"
      >
        <div class="flex gap-[4%] ml-[2%]">
          <div class="flex flex-col gap-[5%] w-[20%]">
            <div
              v-for="index in card.manaNeeded"
              :key="index"
              class="w-full pb-[80%] relative"
            >
              <img
                :src="`/assets/manas/symbols/${card.manaType.toLowerCase()}-mana.png`"
                alt="Mana"
                class="absolute inset-0 w-[95%] h-[95%] object-contain"
              />
            </div>
          </div>
          <div class="flex flex-col w-[70%]">
            <h1
              class="uppercase font-bold text-white"
              :style="{ fontSize: `${dimensions.height * 0.04}px` }"
            >
              {{ card.name }}
            </h1>
            <h2
              class="uppercase text-white"
              :style="{ fontSize: `${dimensions.height * 0.02}px` }"
            >
              {{ card.type }}
            </h2>
            <p
              class="text-white mt-[5%]"
              :style="{ fontSize: `${dimensions.height * 0.025}px` }"
            >
              {{ card.ability }}
            </p>
          </div>
        </div>
      </div>
    </div>
    <div v-else class="w-full h-full bg-cover bg-center rounded-xl">
      <!-- Card back for opponent's cards -->
    </div>
  </div>
</template>

<script>
export default {
  props: {
    card: {
      type: Object,
      required: true,
    },
    width: {
      type: Number,
      default: 300,
    },
    height: {
      type: Number,
      default: 500,
    },
    isOpponent: {
      type: Boolean,
      default: false,
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
  },
  emits: ["toggleCard", "toggleMana", "toggleCardTable", "toggleCardCemetary"],
  computed: {
    dimensions() {
      const aspectRatio = 3 / 5;
      let computedWidth = this.width;
      let computedHeight = this.height;

      if (computedWidth / computedHeight > aspectRatio) {
        computedWidth = computedHeight * aspectRatio;
      } else {
        computedHeight = computedWidth / aspectRatio;
      }

      return { width: computedWidth, height: computedHeight };
    },
    containerStyle() {
      return {
        width: `${this.dimensions.width}px`,
        height: `${this.dimensions.height}px`,
        backgroundImage: this.isOpponent
          ? "url(/assets/deck/back-1.png)"
          : "url(/assets/deck/card-default-background.png)",
      };
    },
  },
  mounted() {
    window.addEventListener("resize", this.forceUpdate);
  },
  beforeUnmount() {
    window.removeEventListener("resize", this.forceUpdate);
  },
  methods: {
    forceUpdate() {
      this.$forceUpdate();
    },
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
