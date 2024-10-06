<template>
  <div
    class="absolute"
    :class="
      isOpponent
        ? 'top-0 right-1/3 rotate-180'
        : 'bottom-0 left-1/3 transform -translate-x-1/2'
    "
  >
    <div class="flex justify-center items-end relative">
      <transition-group name="hover-card">
        <div
          v-for="(card, index) in cards"
          :key="index"
          class="w-[150px] h-[200px] rounded-xl shadow-md cursor-pointer transition-all duration-200 absolute hover-card bg-cover bg-center"
          :class="[
            { 'is-hovered': hoveredCard === index },
            isOpponent ? 'bg-stone-600' : 'bg-stone-600 text-stone-200',
          ]"
          :style="{
            '--rotation': `${getRotation(index)}deg`,
            '--translateY': `${getTranslateY(index)}px`,
            transform: `rotate(var(--rotation)) translateY(calc(var(--translateY) + 100px))`,
            left: `${index * 60}px`,
            zIndex: index,
            backgroundImage: isOpponent
              ? 'url(/assets/deck/back-1.png)'
              : 'url(/assets/deck/card-front.png)',
          }"
          @mouseover="hoverCard(index)"
          @mouseleave="unhoverCard()"
        >
          <div
            v-if="!isOpponent"
            class="h-8 flex items-center justify-center overflow-hidden"
          >
            {{ card.name }}
          </div>
        </div>
      </transition-group>
      <div
        class="w-[300px] h-[500px] text-stone-200 rounded-xl shadow-md cursor-pointer transition-all duration-200 absolute bg-cover bg-center"
        :style="{
          '--rotation': `${getRotation(hoveredCard)}deg`,
          transform: `translateY(-140px)`,
          left: `${hoveredCard * 60}px`,
          zIndex: cards.length + 1,
          backgroundImage: 'url(/assets/deck/card-default-background.png)',
        }"
      >
        <div class="flex flex-col w-full h-full">
          <div
            class="h-[250px] w-full bg-cover bg-center rounded-t-xl absolute top-0 left-0"
            :style="{ backgroundImage: `url(${cards[hoveredCard].artwork})` }"
          />
          <div
            :style="{
              backgroundImage: 'url(/assets/deck/card-front-values.png)',
            }"
            class="w-full h-[60px] bg-cover bg-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -mt-[10px]"
          />
          <div
            class="text-center text-3xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -mt-[10px] flex justify-between w-full"
          >
            <span class="ml-[24px] font-bold">{{
              cards[hoveredCard].power
            }}</span>
            <span class="mr-[28px] font-bold">{{
              cards[hoveredCard].toughness
            }}</span>
          </div>

          <div class="mt-[270px] flex flex-col gap-4 w-full items-start px-3">
            <div class="flex gap-4">
              <div class="flex flex-col gap-2">
                <div
                  v-for="(mana, index) in Array(
                    cards[hoveredCard].manaNeeded
                  ).fill(0)"
                  :key="index"
                  class="w-12 h-12 mb-1"
                >
                  <img
                    :src="`/assets/manas/${cards[
                      hoveredCard
                    ].manaType.toLowerCase()}-mana.png`"
                    alt="Mana"
                    class="w-full h-full object-contain"
                  />
                </div>
              </div>
              <div class="flex flex-col">
                <h1 class="text-md uppercase font-bold text-white">
                  {{ cards[hoveredCard].name }}
                </h1>
                <h2 class="text-sm uppercase text-white">
                  {{ cards[hoveredCard].type }}
                </h2>
                <p class="text-white text-sm mt-2">
                  {{ cards[hoveredCard].ability }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    cards: {
      type: Array,
      required: true,
    },
    isOpponent: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      hoveredCard: null,
      hoveredOpponentCard: null,
    };
  },
  methods: {
    hoverCard(index) {
      this.hoveredCard = index;
    },
    unhoverCard() {
      this.hoveredCard = null;
    },
    getRotation(index) {
      return (index - (this.cards.length - 1) / 2) * 5;
    },
    getTranslateY(index) {
      const middleIndex = (this.cards.length - 1) / 2;
      const distance = Math.abs(index - middleIndex);
      let translateY = Math.abs((index - middleIndex) * 5);

      if (index === 0 || index === this.cards.length - 1) {
        translateY += 10;
      }

      return translateY;
    },
    getHoveredCard() {
      return this.hoveredCard !== null ? this.cards[this.hoveredCard] : null;
    },
  },
};
</script>

<style scoped>
.hover-card {
  transition: transform 0.3s ease;
}

.hover-card.is-hovered {
  transform: rotate(var(--rotation))
    translateY(calc(var(--translateY) * 0.7 + 70px)) !important;
}

.hover-card-move {
  transition: transform 0.3s ease;
}
</style>
