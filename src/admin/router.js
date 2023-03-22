/* eslint-disable prettier/prettier */
export default [
  {
    path: "/demo", // route
    name: "admin", // name of the views page
    component: () => import("./views/demo.vue"), // directory of vue file path
    meta: {
      type: "protected"
    }
  }, 
  {
    path: "/login", // route
    name: "Login", // name of the views page
    component: () => import("./views/Login.vue"), // directory of vue file path
    meta: {
      type: "protected"
    }
  },
  {
    path: "/accounts", // route
    name: "AccountsList", // name of the views page
    component: () => import("./views/AccountList.vue"), // directory of vue file path
    meta: {
      type: "protected"
    }
  },
  {
    path: "/transaction", // route
    name: "TransactionLog", // name of the views page
    component: () => import("./views/TransactionLog.vue"), // directory of vue file path
    meta: {
      type: "protected"
    }
  },
  {
    path: "/saving", // route
    name: "SavingLoans", // name of the views page
    component: () => import("./views/SavingLoans.vue"), // directory of vue file path
    meta: {
      type: "protected"
    }
  }
];
