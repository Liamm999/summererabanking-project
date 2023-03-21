import { createRouter, createWebHistory } from "vue-router"
import customerRouter from "@/customer/router"
import adminRouter from "@/admin/router"

let routes = [
  // {
  //   path: "/",
  //   name: "home",
  //   component: HomeView,
  // },
  // {
  //   path: "/about",
  //   name: "about",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "./views/AboutView.vue"),
  // },

  {
    path: "/404",
    name: "404",
    component: () => {
      import("./views/404.vue")
    },
  },

  ...customerRouter,
  ...adminRouter,
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
