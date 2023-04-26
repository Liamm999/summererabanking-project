import { createStore } from "vuex"

export default createStore({
  state: {
    breadCumRoutes: [],
    transferData: {
      amountMoney: 0,
      message: "",
      isSaved: false,
    },
  },
  mutations: {
    setBreadcumRoutes(state, route) {
      state.breadCumRoutes.push(route)
    },
    setTransferData(state, data) {
      ;(state.transferData.amountMoney = data.amountMoney),
        (state.transferData.message = data.message),
        (state.transferData.isSaved = data.isSaved)
    },
  },
  actions: {
    setBreadcumRoutes(state, route) {
      state.commit("setBreadcumRoutes", route)
    },
    setTransferData({ commit }, data) {
      commit("setTransferData", data)
    },
  },
  getters: {
    // transferData: (state) => {
    //   return state.transferData
    // },
  },
  modules: {},
})
