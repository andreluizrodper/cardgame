<template>
  <div
    class="flex flex-col justify-center items-center text-sm text-white relative"
  >
    <div class="opacity-50 whitespace-nowrap">
      {{ steps[prevStepIndex] }}
    </div>
    <div class="text-lg">{{ steps[currentStepIndex] }}</div>
    <div class="opacity-50 whitespace-nowrap" @click="moveNextStep()">
      {{ steps[nextStepIndex] }}
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
  computed: {
    prevStepIndex() {
      if (this.currentStepIndex > 0) return this.currentStepIndex - 1;
    },
    currentStepIndex() {
      return this.steps.indexOf(this.currentStep);
    },
    nextStepIndex() {
      if (this.currentStepIndex < this.steps.length)
        return this.currentStepIndex + 1;
    },
  },
  emits: ["updateStep", "endTurn"],
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
  methods: {
    moveNextStep() {
      if (this.steps[this.currentStepIndex] === "End") this.$emit("endTurn");
      this.$emit("updateStep", this.steps[this.nextStepIndex]);
    },
  },
};
</script>
