import { createStore } from "vuex"
import adminStore from "@/admin/store"
import customerStore from "@/customer/store"

export default createStore({
  state: {
    currentUser: Object,
  },
  mutations: {
    setCurrentUser(state, user) {
      state.user = user
    },
  },
  actions: {
    setCurrentUser(state, user) {
      state.commit("setCurrentUser", user)
    },
  },
  getters: {},
  modules: {
    adminStore,
    customerStore,
  },
})
