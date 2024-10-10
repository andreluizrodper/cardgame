<template>
  <img
    src="@/assets/bg/waiting.jpg"
    class="object-cover object-center fixed h-[100vh] w-[100vw]"
  />
  <div
    class="flex min-h-[100vh] items-center w-full flex-col justify-center relative z-40"
  >
    <div
      class="bg-white rounded shadow-md p-6 flex flex-col gap-2 items-center"
    >
      <Loading />
      <p class="text-base text-center">Waiting for another player</p>
    </div>
  </div>
</template>

<script setup>
import Loading from "@/components/ui/loading.vue";
</script>
