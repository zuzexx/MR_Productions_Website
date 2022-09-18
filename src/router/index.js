import { createRouter, createWebHashHistory } from "vue-router";
//import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("../views/HomeView.vue"),
  },
  {
    path: "/fotografije",
    name: "fotografije",
    component: () => import("../views/FotografijeView.vue"),
  },
  {
    path: "/onas",
    name: "onas",
    component: () => import("../views/OnasView.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
