<template>
  <button
    @click="toggleCard"
    class="border-2 border-gray-300 rounded-lg bg-white w-[350px] h-[550px] mx-auto flex flex-col shadow-md hover:shadow-lg transition-shadow duration-300"
    :class="card.isAvailable ? 'opacity-100' : 'opacity-50'"
  >
    <div class="relative w-full aspect-square">
      <img
        :src="card.artwork"
        class="w-full h-full object-cover rounded-t-lg"
      />
      <div
        class="absolute top-2 right-2 border rounded bg-white px-2 py-1 text-sm font-semibold shadow-sm"
      >
        {{ card.manaType ?? card.type }}
      </div>
    </div>
    <div class="p-3 flex flex-col flex-1">
      <h3 class="text-lg font-bold mb-2">{{ card.name }}</h3>
      <div class="relative mb-2 flex-grow">
        <p class="text-sm">
          {{ card.ability }}
        </p>
        <div
          v-if="isAbilityTruncated"
          class="absolute bottom-0 right-0 bg-white px-1"
        >
          ...
        </div>
        <div
          v-if="isAbilityTruncated"
          class="absolute left-0 top-0 w-full bg-white p-2 rounded shadow-md opacity-0 hover:opacity-100 transition-opacity duration-300 z-10"
        >
          {{ card.ability }}
        </div>
      </div>
      <div v-if="card.manaNeeded" class="flex justify-between w-full mb-2">
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
      required: true,
    },
  },
  emits: ["toggleCard"],
  data() {
    return {
      isAbilityTruncated: false,
    };
  },
  mounted() {
    this.$nextTick(() => {
      const abilityElement = this.$el.querySelector(".text-sm");
      this.isAbilityTruncated =
        abilityElement.scrollHeight > abilityElement.clientHeight;
    });
  },
  methods: {
    toggleCard() {
      this.$emit("toggleCard", this.card);
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
