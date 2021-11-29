import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
      path: '/',
      redirect: '/'
  }
]

const router = createRouter({
    history: createWebHashHistory(process.env.NODE_ENV === 'production' ? '/' : '/'),
    routes
})

export default router