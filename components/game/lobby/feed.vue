<template>
  <div class="p-4 flex flex-col gap-4">
    <Form @updateFeed="getFeed" />
    <ListItem v-for="item in feeds" :key="item.id" :item="item" />
  </div>
</template>

<script>
import Form from "@/components/game/lobby/feed/form.vue";
import ListItem from "@/components/game/lobby/feed/list-item.vue";
import { getFeeds } from "@/utils/feed";

export default {
  components: {
    Form,
    ListItem,
  },
  data() {
    return {
      feeds: null,
    };
  },
  mounted() {
    this.getFeed();
  },
  methods: {
    async getFeed() {
      this.feeds = await getFeeds();
    },
  },
};
</script>
