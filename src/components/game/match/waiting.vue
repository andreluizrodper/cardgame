<template>
  <img
    src="@/assets/hero/lobby.jpg"
    class="fixed h-[100vh] w-full object-cover object-center opacity-50"
  />
  <div class="min-h-[100vh] flex flex-col z-30 relative">
    <div class="flex flex-1 items-center">
      <div class="flex flex-col gap-8 w-full justify-center items-center">
        <div class="flex flex-col gap-2 items-center">
          <p>Waiting for an opponent</p>
          <Loading />
        </div>
        <div class="flex flex-col gap-1 items-center">
          <span class="text-xs text-gray-700 font-bold">Match code:</span>
          <div class="bg-gray-50 px-2 py-1 text-sm rounded" @click="copyCode">
            {{ match.id }}
          </div>
        </div>
      </div>
    </div>
    <div class="p-4 flex justify-center">
      <Button @click="quit" variant="outline">Quit</Button>
    </div>
  </div>
</template>

<script>
import Loading from "@/components/ui/loading.vue";
import { Button } from "@/components/ui/button";
import { updateMatch } from "@/utils/match";

export default {
  components: {
    Button,
    Loading,
  },
  props: {
    match: {
      type: Object,
    },
  },
  methods: {
    quit() {
      updateMatch({ data: { status: "forfeit" } });
      this.$router.push({ name: "lobby" });
    },
    copyCode() {
      navigator.clipboard.writeText(
        `http://localhost:5173/g/match/${this.match.id}`
      );
      this.$store.commit("addToast", { description: `Copied!` });
    },
  },
};
</script>
