import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_url),
  routes: [
    {
      path: "/home",
      name: "homePage",
      component: () => import('@/views/HomePage.vue'),
      children: [
        {
          path: ":id",
          component: () => import("@/pages/mainPage/index.vue"),
          // props: route => ({query: route.query.q})
          props: {q: false},
          meta: {requireAuth: true}
        }
      ]
    },
    {
      path: '/tDra',
      name: 'tDra',
      component: () => import('@/demoTest/draggable.vue')
    },
    { path: '/:pathMatch(.*)', component: () => import('@/demoTest/draggable.vue') }
  ]
})

router.beforeEach((to ,from) => {
  console.log(`output->to, from`,to, from, to.meta)
})
export default router