export const state = () => ({
  countries: [],
  states: [],
  settingData: {},
})
export const getters = {
  countries(state) {
    return state.countries
  },
  states(state) {
    return state.states
  },
  settingData(state) {
    return state.settingData
  },
}

export const mutations = {
  setCountries(state, payload) {
    state.countries = payload
  },
  setStates(state, payload) {
    state.states = payload
  },
  setData(state, payload) {
    state.settingData = payload
  },
}
export const actions = {
  getCountries({ commit }) {
    return this.$axios(`/api/address`).then((res) => {
      commit('setCountries', res.data)
    })
  },
  setAddress(_, payload) {
    return this.$axios.post(`/api/address`, payload)
  },
  getState({ commit }, payload) {
    return this.$axios(`/api/address/${payload}`).then((res) => {
      commit('setStates', res.data)
    })
  },
  getCheckoutData({ commit }) {
    return this.$axios(`/api/checkout/getData`).then((res) => {
      commit('setData', res.data)
    })
  },
}
