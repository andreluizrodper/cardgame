<template>
  <div
    class="border rounded p-2 cursor-pointer hover:shadow-md transition-shadow flex justify-between"
  >
    <div class="flex items-center">
      {{ card.name }}
    </div>
    <div class="flex gap-2">
      <Button @click="toggleCard">
        <Trash size="12" />
      </Button>
      <Popover>
        <PopoverTrigger as-child>
          <Button>
            <Eye size="12" />
          </Button>
        </PopoverTrigger>
        <PopoverContent align="end" class="w-auto p-0">
          <Card :card="card" />
        </PopoverContent>
      </Popover>
    </div>
  </div>
</template>

<script>
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import Card from "@/components/game/decks/card.vue";
import { Button } from "@/components/ui/button";
import { Trash, Eye } from "lucide-vue-next";

export default {
  components: {
    Trash,
    Eye,
    Button,
    Popover,
    PopoverContent,
    PopoverTrigger,
    Card,
  },
  props: {
    card: {
      type: Object,
    },
  },
  emits: ["toggleCard"],
  methods: {
    toggleCard() {
      this.$emit("toggleCard", this.card);
    },
  },
};
</script>
