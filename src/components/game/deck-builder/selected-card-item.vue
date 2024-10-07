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
          <CardDetail :card="card" :width="300" :height="500" />
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
import CardDetail from "@/components/game/match/table-top/CardDetail.vue";
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
    CardDetail,
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
