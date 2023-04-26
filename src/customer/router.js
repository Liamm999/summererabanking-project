/* eslint-disable prettier/prettier */
export default [
  {
    path: "/customer/dashboard",
    name: "Dashboard",
    component: () => import("./views/Dashboard.vue"),
  },

  {
    path: "/customer/homepage",
    name: "Homepage",
    component: () => import("./views/Homepage.vue"),
    meta: {
      layout: "Default",
      type: "protected",
      requiresAuth: true,
    },
  },

  {
    path: "/customer/dashboard/profile",
    name: "Profile",
    component: () => import("./views/Profile.vue"),
    meta: {
      layout: "Default",
      type: "protected",
      requiresAuth: true,
    },
  },

  {
    path: "/customer/dashboard/transfer",
    name: "Transfer",
    component: () => import("./views/transfer/TransferMoney.vue"),
    meta: {
      layout: "Default",
      type: "protected",
      requiresAuth: true,
    },
  },

  {
    path: "/customer/dashboard/balance",
    name: "Balance",
    component: () => import("./views/Balance.vue"),
    meta: {
      layout: "Default",
      type: "protected",
      requiresAuth: true,
    },
  },

  {
    path: "/customer/dashboard/transfer/detail",
    name: "Transfer Detail",
    component: () => import("./views/transfer/TransferDetail.vue"),
    meta: {
      layout: "Default",
      type: "protected",
      requiresAuth: true,
    },
  },
]
