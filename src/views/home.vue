import Card from '@/components/ui/card/Card.vue';
<template>
  <img
    class="object-cover object-center fixed h-[100vh] w-[100vw]"
    src="@/assets/bg/bg-1.jpg"
  />
  <div class="min-h-[100vh] flex items-center justify-center relative z-30">
    <Card>
      <CardHeader>
        <CardTitle>Alchemia</CardTitle>
        <CardDescription>This is a card game</CardDescription>
      </CardHeader>
      <CardContent>
        <UserAuthForm />
      </CardContent>
    </Card>
  </div>
</template>

<script setup>
import {
  CardTitle,
  CardDescription,
  Card,
  CardHeader,
  CardContent,
} from "@/components/ui/card";
import UserAuthForm from "@/components/auth/login.vue";
</script>
