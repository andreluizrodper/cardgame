import { createWebHistory, createRouter } from "vue-router";

import Home from "@/views/home.vue";
import MyAccount from "@/views/my-account.vue";
import auth from "@/views/auth";
import game from "@/views/game";

const routes = [
  { path: "", name: "home", component: Home },
  { path: "/my-account", name: "my-account", component: MyAccount },
  ...auth,
  ...game,
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
