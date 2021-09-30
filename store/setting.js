export const state = () => ({
  mainMenu: [],
})
export const getters = {
  mainMenu(state) {
    return state.mainMenu
  },
}

export const mutations = {
  setMainMenu(state, payload) {
    state.mainMenu = payload
  },
}
export const actions = {
  getMainMenu({ commit }) {
    this.$axios('/api/categories').then((res) => {
      commit('setMainMenu', res.data)
    })
  },
}
