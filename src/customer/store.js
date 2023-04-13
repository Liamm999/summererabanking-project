import { createStore } from "vuex"

export default createStore({
  state: {
    breadCumRoutes: [],
  },
  getters: {},
  mutations: {
    setBreadcumRoutes(state, route) {
      state.breadCumRoutes.push(route)
    },
  },
  actions: {
    setBreadcumRoutes(state, route) {
      state.commit("setBreadcumRoutes", route)
    },
  },
  modules: {},
})
