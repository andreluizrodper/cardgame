import Card from '@/components/ui/card/Card.vue';
<template>
  <div class="min-h-[100vh] flex bg-stone-100 items-center justify-center">
    <Card>
      <CardHeader>
        <CardTitle>Elemental Cards</CardTitle>
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
