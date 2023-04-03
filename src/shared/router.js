import { createRouter, createWebHistory } from "vue-router"
import customerRouter from "@/customer/router"
import adminRouter from "@/admin/router"

let routes = [
  {
    path: "/login",
    name: "Login",
    component: () => import("./views/LoginAdmin.vue"),
  },

  {
    path: "/404",
    name: "Error",
    component: () => import("./views/404.vue"),
  },
  {
    path: "/register",
    name: "Register",
    component: () => import("./views/Register.vue"),
  },

  ...customerRouter,
  ...adminRouter,
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
