export const state = () => ({
  carouselCollection: [],
})
export const getters = {
  carouselCollection(state) {
    return state.carouselCollection
  },
}

export const mutations = {
  setCarouselCollection(state, payload) {
    state.carouselCollection = payload
  },
}
export const actions = {
  async getCarouselCollection({ commit }) {
    await this.$axios('/api/offers').then((res) => {
      commit('setCarouselCollection', res.data)
    })
  },
}
