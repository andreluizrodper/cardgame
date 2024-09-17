import { createWebHistory, createRouter } from "vue-router";

import Home from "@/views/home.vue";
import auth from "@/views/auth";
import game from "@/views/game";

const routes = [{ path: "", name: "Home", component: Home }, ...auth, ...game];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
