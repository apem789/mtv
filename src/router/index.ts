import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Home2 from '@/views/home/index.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home2,
  },
  {
    path: '/found',
    name: 'found',
    component: () => import('@/views/found/index.vue'),
  },
  {
    path: '/search',
    name: 'search',
    component: () => import('@/views/search/index.vue'),
  },
  {
    path: '/user',
    name: 'user',
    component: () => import('@/views/user/index.vue'),
  },
  {
    path: '/category/:type',
    name: 'category',
    component: () => import('@/views/category/index.vue'),
  },
  {
    path: '/detail/:id',
    name: 'detail',
    component: () => import('@/views/detail/index.vue'),
  },
  {
    path: '/:pathMath(.*)*',
    name: '404',
    component: () => import('@/views/404/index.vue'),
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
