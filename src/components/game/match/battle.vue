<template>
  <div class="fixed z-50 bg-black opacity-80 left-0 right-0 bottom-0 top-0" />
  <div
    class="bg-white z-50 fixed top-4 right-4 bottom-4 left-4 rounded flex flex-col"
  >
    <div class="px-2 py-1 flex justify-between">
      <p class="text-base font-bold">Battle</p>
      <div>
        <Button size="xs" @click="forfeitBattle">Quit battle</Button>
      </div>
    </div>
    <div class="flex flex-1 flex-col">
      <div class="flex overflow-x-auto gap-1 p-2 pb-7 bg-stone-200">
        <Card
          v-for="card in creaturestoughness"
          :key="card.id"
          :card="card"
          direction="bottom"
          @toggleCard="toggleCardtoughness"
        />
      </div>
      <div
        class="flex-1 flex items-center justify-center gap-6 bg-stone-800 text-white"
      >
        <div class="flex items-center gap-2 flex-col">
          <div class="flex gap-2 items-center"><Sword /> {{ powerPoints }}</div>
          <Button
            v-if="ispowerer && battle.power.status === 'waiting'"
            size="xs"
            @click="powerReady"
            >Ready</Button
          >
        </div>
        <X size="30" />
        <div class="flex items-center gap-2 flex-col">
          <div class="flex gap-2 items-center">
            <Heart /> {{ toughnessPoints }}
          </div>
          <Button
            v-if="!ispowerer && battle.toughness.status === 'waiting'"
            size="xs"
            @click="toughnessReady"
            >Ready</Button
          >
        </div>
      </div>
      <div class="flex gap-1 p-2 overflow-x-auto pt-7 bg-stone-200">
        <Card
          v-for="card in creaturespower"
          :key="card.id"
          :card="card"
          direction="top"
          @toggleCard="toggleCardpower"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Card from "@/components/game/match/battle/card.vue";
import { Button } from "@/components/ui/button";
import { updateMatch } from "@/utils/match";
import { Sword, Heart, X } from "lucide-vue-next";
import { updateAccount } from "@/utils/account";

export default {
  components: {
    Button,
    Card,
    Sword,
    X,
    Heart,
  },
  props: {
    match: { type: Object },
    battle: { type: Object },
  },
  computed: {
    creaturesToughness() {
      return this.battle.toughness.player.table?.filter(
        (card) => card.manaNeeded
      );
    },
    creaturespower() {
      return this.battle.power.player.table?.filter((card) => card.manaNeeded);
    },
    ispowerer() {
      return this.battle.power.player.id === this.account.id;
    },
    account() {
      return this.$store.state.account;
    },
    powerPoints() {
      return this.battle.power.player.table
        ?.filter((card) => card.active)
        .reduce((sum, item) => {
          return (sum += parseInt(item.power));
        }, 0);
    },
    toughnessPoints() {
      return (
        this.battle.toughness.player.table
          ?.filter((card) => card.active)
          .reduce((sum, item) => {
            return (sum += item.toughness);
          }, 0) ?? 0
      );
    },
  },
  methods: {
    forfeitBattle() {
      const match = this.match.data();
      match.battle = null;
      updateMatch({ id: this.$route.params.id, data: match });
    },
    powerReady() {
      this.battle.power.status = "ready";
      const match = this.match.data();
      match.battle = this.battle;
      updateMatch({ id: this.$route.params.id, data: match });
      this.doBattle();
    },
    toughnessReady() {
      this.battle.toughness.status = "ready";
      const match = this.match.data();
      match.battle = this.battle;
      updateMatch({ id: this.$route.params.id, data: match });
      this.doBattle();
    },
    doBattle() {
      if (
        this.battle.power.status !== "ready" ||
        this.battle.toughness.status !== "ready"
      )
        return;
      let powerPoints = this.powerPoints;
      this.battle.toughness.player.table
        .filter((card) => card.active)
        .map((card) => {
          let health = card.toughness;
          if (card.health) health = card.health;
          if (powerPoints > health) {
            card.health = 0;
            powerPoints -= parseInt(card.toughness);
            const indexCard = this.battle.toughness.player.table.indexOf(card);
            this.battle.toughness.player.table.splice(indexCard, 1);
            const cemetary = this.battle.toughness.player.cemetary ?? [];
            cemetary.push(card);
            this.battle.toughness.player.cemetary = cemetary;
          } else {
            card.health -= powerPoints;
            powerPoints -= card.toughness;
          }
        });
      if (powerPoints > 0) {
        this.battle.toughness.player.health -= powerPoints;
      }

      if (this.battle.toughness.player.health <= 0) {
        const match = this.match.data();
        match.status = "done";
        this.battle.power.player.status = "win";
        this.battle.toughness.player.status = "lose";
        match.players = [
          this.battle.power.player,
          this.battle.toughness.player,
        ];
        let playerLose = this.battle.toughness.player.lose ?? 0;
        playerLose++;
        updateAccount({
          id: this.battle.toughness.player.id,
          data: {
            ...this.battle.toughness.player.data,
            lose: playerLose,
          },
          setStore: false,
        });
        let opponentWin = this.battle.power.player.win ?? 0;
        opponentWin++;
        updateAccount({
          id: this.battle.power.player.id,
          data: {
            ...this.battle.power.player.data,
            win: opponentWin,
          },
          setStore: false,
        });
        console.log(match);
        updateMatch({ id: this.$route.params.id, data: match });
      } else {
        const match = this.match.data();
        this.battle.toughness.player.table.map((card) => (card.active = false));
        this.battle.power.player.table.map((card) => (card.active = false));
        match.players = [
          this.battle.toughness.player,
          this.battle.power.player,
        ];
        match.battle = null;
        updateMatch({ id: this.$route.params.id, data: match });
      }
    },
    toggleCardtoughness(card) {
      if (this.ispowerer) return;
      this.toggleCard(card);
    },
    toggleCardpower(card) {
      if (!this.ispowerer) return;
      this.toggleCard(card);
    },
    toggleCard(card) {
      card.active = !card.active;
      const match = this.match.data();
      match.battle = this.battle;
      updateMatch({ id: this.$route.params.id, data: match });
    },
  },
};
</script>
