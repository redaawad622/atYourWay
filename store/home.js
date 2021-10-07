export const state = () => ({
  carouselCollection: [],
  featuredProducts: [],
})
export const getters = {
  carouselCollection(state) {
    return state.carouselCollection
  },
  featuredProducts(state) {
    return state.featuredProducts
  },
}

export const mutations = {
  toggleFav(state, payload) {
    const x = state.featuredProducts.findIndex((x) => x.id === payload.id)
    state.featuredProducts[x].isFav = !state.featuredProducts[x].isFav
  },
  setCarouselCollection(state, payload) {
    state.carouselCollection = payload
  },
  setHomeContetent(state, payload) {
    state.featuredProducts = payload.featuredProducts
  },
}
export const actions = {
  async getCarouselCollection({ commit }) {
    await this.$axios('/api/offers').then((res) => {
      commit('setCarouselCollection', res.data)
    })
  },
  async getHomeContent({ commit }) {
    await this.$axios('/api/homeContent').then((res) => {
      commit('setHomeContetent', res.data)
    })
  },
}
