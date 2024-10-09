<template>
  <Sheet
    class="max-w-md"
    :open="isOpen"
    @update:open="$emit('update:open', $event)"
  >
    <SheetContent>
      <SheetHeader>
        <SheetTitle>Cemetery</SheetTitle>
        <SheetDescription></SheetDescription>
      </SheetHeader>
      <div class="grid gap-2 grid-cols-2 overflow-y-auto">
        <CardDetail
          v-for="(card, index) in cards"
          :key="index"
          :card="card"
          @toggleCard="$emit('toggleCard', card)"
        />
      </div>
    </SheetContent>
  </Sheet>
</template>

<script>
import CardDetail from "@/components/game/match/table-top/CardDetail.vue";

export default {
  components: {
    CardDetail,
  },
  props: {
    isOpen: {
      type: Boolean,
      required: true,
    },
    cards: {
      type: Array,
      required: true,
    },
  },
  emits: ["update:open", "toggleCard"],
};
</script>
