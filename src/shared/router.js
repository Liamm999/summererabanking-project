import { createRouter, createWebHistory } from "vue-router"
import customerRouter from "@/customer/router"
import adminRouter from "@/admin/router"

import HomeView from "./views/HomeView.vue"

let routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "./views/AboutView.vue"),
  },

  ...customerRouter,
  ...adminRouter,
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
