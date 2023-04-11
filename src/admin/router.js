/* eslint-disable prettier/prettier */
export default [
  {
    path: "/admin/dashboard", // route
    name: "Dashboard", // name of the views page
    component: () => import("./views/Dashboard.vue"), // directory of vue file path
    meta: {
      type: "protected",
      transitionName: "slide",
      requiresAuth: true,
    },
  },

  {
    path: "/admin/homepage", // route
    name: "Admin Home", // name of the views page
    component: () => import("../admin/views/Home.vue"), // directory of vue file path
    meta: {
      type: "protected",
      transitionName: "slide",
      requiresAuth: true,
    },
  },

  {
    path: "/admin/account", // route
    name: "Account", // name of the views page
    component: () => import("./views/Account.vue"), // directory of vue file path
    meta: {
      type: "protected",
      requiresAuth: true,
    },
  },

  {
    path: "/admin/saving", // route
    name: "Saving", // name of the views page
    component: () => import("./views/Saving.vue"), // directory of vue file path
    meta: {
      type: "protected",
      requiresAuth: true,
    },
  },

  {
    path: "/admin/transaction", // route
    name: "Transaction", // name of the views page
    component: () => import("./views/Transaction.vue"), // directory of vue file path
    meta: {
      type: "protected",
      requiresAuth: true,
    },
  },

  {
    path: "/admin/home", // route
    name: "Homepage", // name of the views page
    component: () => import("../customer/views/Homepage.vue"), // directory of vue file path
    meta: {
      type: "protected",
      requiresAuth: true,
    },
  },
]
