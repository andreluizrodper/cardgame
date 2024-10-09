<template>
  <div
    class="fixed -bottom-[100px] left-1/2 transform -translate-x-1/2"
    :class="
      isOpponent
        ? 'top-0 right-1/3 rotate-180'
        : 'bottom-0 left-1/3 transform -translate-x-1/2'
    "
  >
    <div class="flex justify-center items-end relative h-full">
      <transition-group name="hover-card">
        <div
          v-for="(card, index) in cards"
          :key="index"
          class="w-[150px] h-[200px] rounded-xl shadow-md cursor-pointer transition-all duration-200 absolute hover-card"
          :class="{ 'is-hovered': hoveredCard === index }"
          :style="{
            '--rotation': `${getRotation(index)}deg`,
            '--translateY': `${getTranslateY(index)}px`,
            transform: `rotate(var(--rotation)) translateY(var(--translateY))`,
            left: `${index * 60}px`,
            zIndex: index,
          }"
          @mouseover="hoverCard(index)"
          @mouseleave="unhoverCard()"
        >
          <CardDetail
            :card="card"
            :width="150"
            :height="200"
            :is-opponent="isOpponent"
          />
        </div>
      </transition-group>
      <CardDetail
        v-if="hoveredCard !== null"
        :card="cards[hoveredCard]"
        :width="300"
        :height="400"
        :is-opponent="isOpponent"
        class="absolute"
        :style="{
          '--rotation': `${getRotation(hoveredCard)}deg`,
          transform: `translateY(-250px)`,
          left: `${hoveredCard * 60 - 75}px`,
          zIndex: cards.length + 1,
        }"
      />
    </div>
  </div>
</template>

<script>
import CardDetail from "./CardDetail.vue";

export default {
  components: {
    CardDetail,
  },
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
  transition: all 0.3s ease;
}

.hover-card.is-hovered {
  transform: rotate(var(--rotation)) translateY(calc(var(--translateY) - 30px)) !important;
}

.hover-card-move {
  transition: all 0.3s ease;
}
</style>
