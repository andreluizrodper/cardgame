<template>
  <div>
    <div class="px-4">
      <div class="flex flex-col gap-4">
        <div class="border rounded flex p-4 items-center items-center flex-col">
          <p class="font-bold">Cards</p>
          <p>{{ deck.length }} left</p>
        </div>
        <Button>Draw cards</Button>
      </div>
    </div>
  </div>
</template>

<script>
import { Button } from "@/components/ui/button";
export default {
  components: {
    Button,
  },
  props: {
    match: {
      type: Object,
    },
  },
  computed: {
    account() {
      return this.$store.state.account;
    },
    player() {
      return this.match
        .data()
        .players.find((player) => player.id === this.account.id);
    },
    opponent() {
      return this.match
        .data()
        .players.find((player) => player.id !== this.account.id);
    },
    opponentHand() {
      return this.opponent.hand;
    },
    deck() {
      return this.player.deck;
    },
    hand() {
      return this.player.hand ?? [];
    },
  },
  methods: {
    draw() {
      if (!this.player.hand) {
        for (let a = 1; a < 8; a++) {
          const card = this.doDrawCard();
          this.player.hand.push(card);
        }
      } else {
        const card = this.doDrawCard();
        this.player.hand.push(card);
      }
    },
    doDrawCard() {
      const cardAmount = this.deck.length;
      const index = Math.floor(Math.random() * cardAmount + 1);
      const card = this.deck.splice(index, 1);
      return card;
    },
    discard() {},
    play() {},
  },
};
</script>
