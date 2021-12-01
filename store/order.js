export const state = () => ({
  order: null,
  orders: [],
})
export const getters = {
  order(state) {
    return state.order
  },
  orders(state) {
    return state.orders
  },
}

export const mutations = {
  setOrder(state, payload) {
    state.order = payload
  },
  setOrders(state, payload) {
    state.orders = payload
  },
}
export const actions = {
  getOrder({ commit }, payload) {
    this.$axios(`/api/order/${payload}`).then((res) => {
      commit('setOrder', res.data)
    })
  },
  getOrders({ commit }) {
    this.$axios(`/api/order?all=1`).then((res) => {
      commit('setOrders', res.data.data)
    })
  },
}
