export const state = () => ({
  suggestions: [],
})
export const getters = {
  suggestions(state) {
    return state.suggestions
  },
}

export const mutations = {
  setSuggestion(state, payload) {
    state.suggestions = payload
  },
}
export const actions = {
  suggestion({ commit }, payload) {
    return this.$axios(`/api/search/suggestions`, { params: payload }).then(
      (res) => {
        commit('setSuggestion', res.data)
      }
    )
  },
}
