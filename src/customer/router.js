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
  },

  {
    path: "/customer/dashboard/profile",
    name: "Profile",
    component: () => import("./views/Profile.vue"),
    meta: {
      layout: "Default",
      type: "protected"
    }
  },

  {
    path: "/customer/dashboard/transfer",
    name: "Transfer",
    component: () => import("./views/TransferMoney.vue"),
    meta: {
      layout: "Default",
      type: "protected"
    }
  },

  {
    path: "/customer/dashboard/balance",
    name: "Balance",
    component: () => import("./views/Balance.vue"),
    meta: {
      layout: "Default",
      type: "protected"
    }
  }
];
