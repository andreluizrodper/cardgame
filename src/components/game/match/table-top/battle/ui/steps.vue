<template>
  <div class="flex justify-center border-y text-xs">
    <div
      v-for="step in steps"
      :key="step"
      class="border-x px-4 py-2"
      :class="step === currentStep ? 'bg-green-600 text-white' : ''"
    >
      {{ step }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    currentStep: {
      type: String,
    },
  },
  data() {
    return {
      steps: [
        "Upkeep",
        "Draw",
        "Main Phase",
        "Attack",
        "Blockers",
        "Damage Resolution",
        "Second Main Phase",
        "End",
      ],
    };
  },
};
</script>
