import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/new1",
      name: "new1",
      component: () => import("../views/NewView.vue")
    },
    {
      path: "/new2",
      name: "new2",
      component: () => import("../views/NewView2.vue")
    },
    {
      path: "/new3",
      name: "new3",
      component: () => import("../views/NewView3.vue")
    }
  ],
});

export default router;
