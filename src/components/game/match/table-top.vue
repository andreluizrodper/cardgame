<template>
  <SelectingDeck v-if="isSelectingDeck" @toggleDeck="toggleDeck" />
  <WaitingPlayer v-if="isWaiting" />
  <Match v-if="isReady" :match="match" :player="player" :opponent="opponent" />
  <Win v-if="hasPlayerWon" />
  <Lose v-if="hasPlayerLose" />
</template>

<script>
import Loading from "@/components/ui/loading.vue";
import { updateMatch } from "@/utils/match";
import { query, collection, where, onSnapshot } from "firebase/firestore";
import { firestore } from "@/utils/firebase";
import SelectingDeck from "@/components/game/match/selecting-deck.vue";
import WaitingPlayer from "@/components/game/match/waiting-player.vue";
import Match from "@/components/game/match/match.vue";
import Win from "@/components/game/match/win.vue";
import Lose from "@/components/game/match/lose.vue";

export default {
  props: {
    match: {
      type: Object,
    },
    player: {
      type: Object,
    },
    opponent: {
      type: Object,
    },
  },
  components: {
    Loading,
    SelectingDeck,
    WaitingPlayer,
    Match,
    Lose,
    Win,
  },
  computed: {
    account() {
      return this.$store.state.account;
    },
    isSelectingDeck() {
      return (
        this.match
          .data()
          .players.find((player) => player.id === this.account.id).status ===
        "selecting-deck"
      );
    },
    isWaiting() {
      return (
        !this.isSelectingDeck &&
        this.match
          .data()
          .players.find((player) => player.id !== this.account.id).status ===
          "selecting-deck"
      );
    },
    isReady() {
      return this.match
        .data()
        .players.every((player) => player.status === "ready");
    },
    hasPlayerWon() {
      return (
        this.match
          .data()
          .players.find((player) => player.id === this.account.id).status ===
        "win"
      );
    },
    hasPlayerLose() {
      return (
        this.match
          .data()
          .players.find((player) => player.id === this.account.id).status ===
        "lose"
      );
    },
  },
  data() {
    return {
      turns: null,
      isLoading: true,
    };
  },
  async mounted() {
    onSnapshot(
      query(
        collection(firestore, "turns"),
        where("match_id", "==", this.$route.params.id)
      ),
      (doc) => {
        this.turns = doc.docs;
      }
    );
  },
  methods: {
    toggleDeck(deck) {
      const match = this.match.data();
      const player = match.players.find(
        (player) => player.id === this.account.id
      );
      player.status = "ready";
      player.deck = deck;
      updateMatch({
        id: this.$route.params.id,
        data: match,
      });
    },
  },
};
</script>
