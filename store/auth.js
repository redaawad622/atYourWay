export const state = () => ({
  loginForm: {
    email: '',
    password: '',
  },
  signUpForm: {
    email: '',
    name: '',
    password: '',
    phone: '',
  },
  meta: { total: 0 },
})
export const getters = {
  loginForm(state) {
    return state.loginForm
  },
  signUpForm(state) {
    return state.signUpForm
  },
}

export const mutations = {
  setLoginForm(state, payload) {
    state.loginForm[payload.name] = payload.value
  },
  setSignUporm(state, payload) {
    state.signUpForm[payload.name] = payload.value
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
