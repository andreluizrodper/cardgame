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
      <div class="flex overflow-x-auto gap-1 p-2">
        <Card
          v-for="card in battle.defense.player.table"
          :key="card.id"
          :card="card"
          direction="bottom"
          @toggleCard="toggleCard"
        />
      </div>
      <div class="flex-1 flex items-center justify-center gap-6">
        <div class="flex items-center gap-2 flex-col">
          <div class="flex gap-2 items-center">
            <Sword /> {{ attackPoints }}
          </div>
          <Button
            v-if="
              battle.attack.player.id === account.id &&
              battle.attack.status === 'waiting'
            "
            size="xs"
            @click="attackReady"
            >Ready</Button
          >
        </div>
        <X size="30" />
        <div class="flex items-center gap-2 flex-col">
          <div class="flex gap-2 items-center">
            <Heart /> {{ defensePoints }}
          </div>
          <Button
            v-if="battle.defense.player.id === account.id"
            size="xs"
            @click="defenseReady"
            >Ready</Button
          >
        </div>
      </div>
      <div class="flex gap-1 p-2 overflow-x-auto pt-6">
        <Card
          v-for="card in battle.attack.player.table"
          :key="card.id"
          :card="card"
          direction="top"
          @toggleCard="toggleCard"
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
import { updateAccount } from "@/utils/updateAccount";

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
    isAttacker() {
      return this.battle.attack.player.data.id === this.account.id;
    },
    account() {
      return this.$store.state.account;
    },
    attackPoints() {
      return this.battle.attack.player.table
        .filter((card) => card.active)
        .reduce((sum, item) => {
          return (sum += item.attack);
        }, 0);
    },
    defensePoints() {
      return (
        this.battle.defense.player.table
          ?.filter((card) => card.active)
          .reduce((sum, item) => {
            return (sum += item.defense);
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
    attackReady() {
      this.battle.attack.status = "ready";
      const match = this.match.data();
      match.battle = this.battle;
      updateMatch({ id: this.$route.params.id, data: match });
      this.doBattle();
    },
    defenseReady() {
      this.battle.defense.status = "ready";
      const match = this.match.data();
      match.battle = this.battle;
      updateMatch({ id: this.$route.params.id, data: match });
      this.doBattle();
    },
    doBattle() {
      if (
        this.battle.attack.status !== "ready" ||
        this.battle.defense.status !== "ready"
      )
        return;
      if (this.defensePoints < this.attackPoints) {
        this.battle.defense.player.health +=
          this.defensePoints - this.attackPoints;
      }
      const attackPoints = this.attackPoints;
      this.battle.defense.player.table.map((card) => {
        const health = card.health ?? card.defense;
        if (attackPoints > health) {
          card.health = 0;
          attackPoints -= card.defense;
          const indexCard = this.battle.defense.player.table.indexOf(card);
          this.battle.defense.player.table.splice(indexCard, 1);
          this.battle.defense.player.cemetary.push(card);
        } else {
          card.health -= attackPoints;
          attackPoints -= card.defense;
        }
      });
      if (attackPoints > 0) {
        this.battle.defense.player.health -= attackPoints;

        if (this.battle.defense.player.health <= 0) {
          const match = this.match.data();
          match.status = "done";
          let playerLose = this.battle.defense.player.lose ?? 0;
          playerLose++;
          updateAccount({
            id: this.battle.defense.player.id,
            data: {
              ...this.battle.defense.player,
              lose: playerLose,
            },
          });
          let opponentWin = this.battle.attack.player.win ?? 0;
          opponentWin++;
          updateAccount({
            id: this.battle.attack.player.id,
            data: {
              ...this.battle.attack.player,
              win: opponentWin,
            },
          });
          updateMatch({ id: this.$route.params.id, data: match });
        }
      } else {
        const match = this.match.data();
        match.players = [this.battle.defense.player, this.battle.attack.player];
        match.battle = null;
        updateMatch({ id: this.$route.params.id, data: match });
      }
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
