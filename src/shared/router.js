import { createRouter, createWebHistory } from "vue-router"
import customerRouter from "@/customer/router"
import adminRouter from "@/admin/router"

let routes = [
  // {
  //   path: "/",
  //   name: "home",
  //   component: HomeView,
  // },

  {
    path: "/login",
    name: "Login",
    component: () => import("./views/Login.vue"),
  },

  {
    path: "/404",
    name: "Error",
    component: () => import("./views/404.vue"),
  },

  ...customerRouter,
  ...adminRouter,
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
