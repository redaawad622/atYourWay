export const state = () => ({
  category: null,
  products: [],
  meta: { total: 0 },
})
export const getters = {
  category(state) {
    return state.category
  },
  products(state) {
    return state.products
  },
  meta(state) {
    return state.meta
  },
}

export const mutations = {
  setCategory(state, payload) {
    state.category = payload.category
    state.products = payload.products
    state.meta = payload.meta
  },

}
export const actions = {
  getCategory({ commit }, payload) {
    this.$axios(`/api/categories/${payload.id}`, { params: payload }).then(
      (res) => {
        commit('setCategory', res.data)
      }
    )
  },

}
