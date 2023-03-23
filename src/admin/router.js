/* eslint-disable prettier/prettier */
export default [
  {
    path: "/admin/home", // route
    name: "admin", // name of the views page
    component: () => import("./views/demo.vue"), // directory of vue file path
    meta: {
      type: "protected"
    }
  },

  {
    path: "/admin/account", // route
    name: "account", // name of the views page
    component: () => import("./views/Account.vue"), // directory of vue file path
    meta: {
      type: "protected"
    }
  },

  {
    path: "/admin/saving", // route
    name: "Saving", // name of the views page
    component: () => import("./views/Saving.vue"), // directory of vue file path
    meta: {
      type: "protected"
    }
  },

  {
    path: "/admin/transaction", // route
    name: "transaction", // name of the views page
    component: () => import("./views/Transaction.vue"), // directory of vue file path
    meta: {
      type: "protected"
    }
  },
];
