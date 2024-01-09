import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "",
      component: () => import("@/views/index.vue"),
      children: ([
        {
          path: "",
          component: () => import("@/views/home/home.vue")
        },
        {
          path: "/home",
          component: () => import("@/views/home/home.vue")
        },
        {
          path: "/pool",
          component: () => import("@/views/pool/pool.vue")
        },
        {
          path: "/wallet",
          component: () => import("@/views/wallet/wallet.vue")
        },
        {
          path: "/mine",
          component: () => import("@/views/mine/mine.vue")
        }
      ])
    },

  ]
})

export default router
