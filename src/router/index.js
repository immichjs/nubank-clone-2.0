import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import PatrimonyView from "../views/PatrimonyView.vue";
import ShoppingView from "../views/ShoppingView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/shopping",
    name: "shopping",
    component: ShoppingView,
  },
  {
    path: "/patrimony",
    name: "patrimony",
    component: PatrimonyView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
