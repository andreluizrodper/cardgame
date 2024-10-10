const routes = [
  {
    path: "/auth",
    component: () => import("@/layouts/auth.vue"),
    children: [
      {
        path: "login",
        name: "login",
        component: () => import("@/views/auth/login.vue"),
      },
    ],
  },
];

export default routes;
