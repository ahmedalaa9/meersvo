const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/homePage.vue") },
      {
        name: "ProdductivitySuite",
        path: "/ProdductivitySuite",
        component: () => import("pages/ProdductivitySuite.vue"),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
  // {
  //    path: "/ProdductivitySuite",
  //   name: "ProdductivitySuite",
  //   component: () => import("pages/ProdductivitySuite.vue"),
  // },
];

export default routes;
