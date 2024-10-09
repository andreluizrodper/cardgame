<template>
  <Dialog :open="isOpen">
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Initial Draw</DialogTitle>
        <DialogDescription>Select up to 7 cards to draw:</DialogDescription>
      </DialogHeader>
      <div class="flex flex-col gap-6">
        <div class="grid grid-cols-2 gap-4">
          <div>
            <Label>Spell Cards:</Label>
            <Input
              class="w-full"
              v-model="localAmountSpell"
              :max="7 - localAmountMana"
              :min="0"
              type="number"
            />
          </div>
          <div>
            <Label>Mana Cards:</Label>
            <Input
              class="w-full"
              v-model="localAmountMana"
              :max="7 - localAmountSpell"
              :min="0"
              type="number"
            />
          </div>
        </div>
        <Button :disabled="!drawAvailable" @click="onDraw">Draw</Button>
      </div>
    </DialogContent>
  </Dialog>
</template>

<script>
import { ref, computed } from "vue";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default {
  components: {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
    Button,
    Input,
    Label,
  },
  props: {
    isOpen: Boolean,
    amountSpell: Number,
    amountMana: Number,
  },
  emits: ["draw"],
  setup(props, { emit }) {
    const localAmountSpell = ref(props.amountSpell);
    const localAmountMana = ref(props.amountMana);

    const drawAvailable = computed(() => {
      return (
        localAmountMana.value + localAmountSpell.value <= 7 &&
        localAmountMana.value + localAmountSpell.value > 0
      );
    });

    const onDraw = () => {
      emit("draw", {
        amountSpell: localAmountSpell.value,
        amountMana: localAmountMana.value,
      });
    };

    return {
      localAmountSpell,
      localAmountMana,
      drawAvailable,
      onDraw,
    };
  },
};
</script>
