<script setup>
import { DrawerDescription } from "vaul-vue";
import { computed } from "vue";
import { cn } from "@/lib/utils";

const props = defineProps();

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props;

  return delegated;
});
</script>

<template>
  <DrawerDescription
    v-bind="delegatedProps"
    :class="cn('text-sm text-muted-foreground', props.class)"
  >
    <slot />
  </DrawerDescription>
</template>
~/lib/utils
