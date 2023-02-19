/* eslint-disable prettier/prettier */
export default [
  {
    path: "/dashboard",
    name: "Dashboard",
    component: () => import("./views/Dashboard.vue"),
    meta: {
      type: "protected"
    }
  }
];
