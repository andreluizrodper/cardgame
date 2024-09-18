<template>
  <div v-if="account" class="mx-auto max-w-md">
    <Card>
      <CardHeader>
        <CardTitle>My profile</CardTitle>
      </CardHeader>
      <CardContent class="flex flex-col gap-8">
        <div class="flex flex-col gap-2">
          <Label>My name</Label>
          <Input v-model="name" />
        </div>
        <div>
          <Button @click="save">Save</Button>
        </div>
      </CardContent>
    </Card>
  </div>
</template>

<script>
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { updateAccount } from "@/utils/account";

export default {
  components: {
    Input,
    Label,
    Button,
    Card,
    CardHeader,
    CardTitle,
    CardContent,
  },
  props: {
    account: {
      type: Object,
    },
  },
  data() {
    return {
      name: this.account.data().name,
    };
  },
  methods: {
    save() {
      updateAccount({
        id: this.account.id,
        data: {
          ...this.account.data(),
          name: this.name,
        },
      });
    },
  },
};
</script>
