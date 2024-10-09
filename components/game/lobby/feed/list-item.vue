<template>
  <div class="border rounded shadow-sm flex flex-col">
    <div class="p-2 md:p-4 md:pb-2">
      <div class="flex gap-2">
        <img
          v-if="item.data().created_by.avatar"
          :src="item.data().created_by.avatar"
          class="size-12 rounded-full"
        />
        <div class="flex flex-col justify-center">
          <p class="text-xl">{{ item.data().created_by.name }}</p>
          <span class="text-xs">{{ createdAt }}</span>
        </div>
      </div>
      <div class="py-2">
        {{ item.data().content }}
      </div>
      <div class="flex gap-4 justify-between">
        <div class="flex gap-4">
          <button
            v-for="reaction in reactions"
            :key="reaction"
            @click="toggleReaction(reaction)"
            class="opacity-50 text-xl hover:opacity-80"
            :class="postReactions.includes(reaction) ? 'opacity-100' : ''"
          >
            {{ reaction }}
          </button>
        </div>
        <button
          v-if="item.data().created_by_id === account.id"
          @click="archivePost"
        >
          <Trash size="14" />
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { Trash } from "lucide-vue-next";
import { DateTime } from "luxon";
import { updateFeed } from "@/utils/feed";

export default {
  components: { Trash },
  props: {
    item: {
      type: Object,
    },
  },
  data() {
    return {
      reactions: ["😍", "😂", "😱"],
    };
  },
  computed: {
    account() {
      return this.$store.state.account;
    },
    createdAt() {
      return DateTime.fromJSDate(
        this.item.data().created_at.toDate()
      ).toRelative();
    },
    postReactions() {
      if (
        !this.item.data().reactions ||
        !this.item.data().reactions[this.account.id]
      )
        return [];

      return this.item.data().reactions[this.account.id] ?? [];
    },
  },
  emits: ["updateFeed"],
  methods: {
    archivePost() {
      this.$store.commit("setDialog", {
        title: "Deseja arquivar esse post?",
        action: this.doArchivePost,
      });
    },
    async doArchivePost() {
      await updateFeed({ id: this.item.data().id, data: { archived: true } });
      this.$emit("updateFeed");
    },
    async toggleReaction(reaction) {
      const reactions = this.item.data().reactions ?? {};
      if (reactions[this.account.id]) {
        const index = reactions[this.account.id]?.indexOf(reaction);
        if (index >= 0) reactions[this.account.id].splice(index, 1);
        else reactions[this.account.id].push(reaction);
      } else {
        reactions[this.account.id] = [];
        reactions[this.account.id].push(reaction);
      }
      this.item.data().reactions = reactions;
      await updateFeed({ id: this.item.id, data: { reactions } });
    },
  },
};
</script>
