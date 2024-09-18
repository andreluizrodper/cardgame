<template>
  <div class="flex bg-stone-600 text-white flex-col gap-4 pt-6">
    <p class="text-sm px-4">My collections</p>
    <div class="flex overflow-auto gap-2 px-4 pb-6">
      <div
        v-for="(collection, index) in collections"
        :key="index"
        class="border rounded overflow-hidden min-w-32"
      >
        <img :src="collection.artwork" />
        <div class="px-2 py-2 bg-stone-50 text-gray-800 flex flex-col gap-1">
          <span>{{ collection.name }}</span>
          <span class="text-xs">{{ collection.cards.length }} cards</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Human from "@/assets/cards/human.json";
import Elf from "@/assets/cards/elf.json";
import Goblin from "@/assets/cards/goblin.json";
import Skeleton from "@/assets/cards/skeleton.json";
import Mana from "@/assets/cards/mana.json";

export default {
  data() {
    return {
      collections: [Human, Elf, Goblin, Skeleton, Mana],
    };
  },
};
</script>
