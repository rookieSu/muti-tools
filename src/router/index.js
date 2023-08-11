import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_url),
  routes: [
    {
      path: "/",
      name: "homePage",
      component: () => import('@/views/HomePage.vue')
    }
  ]
})

export default router