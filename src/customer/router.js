// eslint-disable-next-line no-unused-vars
import router from "@/admin/router"

/* eslint-disable prettier/prettier */
export default [
  {
    path: "/customer/dashboard",
    name: "Dashboard",
    component: () => import("./views/Dashboard.vue"),
    meta: {
      layout: "Default",
      type: "protected"
    }
  }
];
