<template>
  <Dialog :open="isOpen">
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Draw a Card</DialogTitle>
        <DialogDescription>Choose which deck to draw from:</DialogDescription>
      </DialogHeader>
      <div class="flex gap-4">
        <Button @click="$emit('drawSpell')">Draw Spell Card</Button>
        <Button @click="$emit('drawMana')">Draw Mana Card</Button>
      </div>
    </DialogContent>
  </Dialog>
</template>

<script>
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

export default {
  components: {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
    Button,
  },
  props: {
    isOpen: {
      type: Boolean,
      required: true,
    },
  },
  emits: ["drawSpell", "drawMana"],
};
</script>
