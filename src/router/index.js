// Router define
import { createRouter, createWebHistory } from "vue-router"

const routes = [
  {
    name: 'init',
    path: '/kirsti-brandux',
    component: () => import('@/components/Wellcome.vue')
  },
  {
    name: 'home',
    path: '/kirsti-brandux/home',
    component: () => import('@/views/Home.vue')
  }
]

const router = createRouter({
  routes,
  history: createWebHistory(process.env.BASE_URL)
})

export default router
