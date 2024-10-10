const routes = [
  {
    path: "/g",
    component: () => import("@/layouts/game.vue"),
    children: [
      {
        path: "lobby",
        name: "lobby",
        component: () => import("@/views/game/lobby.vue"),
      },
      {
        path: "decks",
        name: "decks",
        component: () => import("@/views/game/deck.vue"),
      },
      {
        path: "decks/new",
        name: "deck-builder",
        component: () => import("@/views/game/deck-builder.vue"),
      },
      {
        path: "decks/:id",
        name: "deck-editor",
        component: () => import("@/views/game/deck-builder.vue"),
      },
      {
        path: "match/:id",
        name: "match",
        component: () => import("@/views/game/match.vue"),
      },
    ],
  },
];

export default routes;
