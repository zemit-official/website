// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      { path: '', name: 'home', component: () => import(/* webpackChunkName: "home" */ '@/views/Home.vue'), },
      { path: 'about', name: 'about', component: () => import(/* webpackChunkName: "about" */ '@/views/About.vue'), },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
