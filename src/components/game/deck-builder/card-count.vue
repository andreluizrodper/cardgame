<template>
  <div class="px-4 py-2 flex items-center gap-4 my-4">
    <div class="border rounded px-4 bg-gray-50 py-1 text-sm">
      {{ spellCardsCount }} spell cards
    </div>
    <div class="border rounded px-4 bg-gray-50 py-1 text-sm">
      {{ manaCardsCount }} mana cards
    </div>
  </div>
</template>

<script>
export default {
  props: {
    spellCardsCount: {
      type: Number,
    },
    manaCardsCount: {
      type: Number,
    },
  },
};
</script>
