export const state = () => ({
  loginForm: {
    email: '',
    password: '',
    device_name: 'web-front',
  },
  signUpForm: {
    email: '',
    name: '',
    password: '',
    phone_number: '',
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
  setSignUpForm(state, payload) {
    state.signUpForm[payload.name] = payload.value
  },
  setUser(state, payload) {
    const clone = Object.assign({}, payload, { token: undefined })
    console.log(clone)
    state.loginForm = {
      email: '',
      password: '',
      device_name: 'web-front',
    }
    this.$auth.setUser(clone)
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
  async login({ commit, state }) {
    const agent = this.$info()
    commit('setLoginForm', {
      name: 'device_name',
      value:
        agent.browser.os +
        '-' +
        agent.browser.name +
        '-' +
        agent.browser.version,
    })
    return await this.$auth
      .loginWith('local', {
        data: state.loginForm,
      })
      .then((res) => {
        commit('setUser', res.data)
      })
  },
  async sign({ commit, state }) {
    const agent = this.$info()
    commit('setSignUpForm', {
      name: 'device_name',
      value:
        agent.browser.os +
        '-' +
        agent.browser.name +
        '-' +
        agent.browser.version,
    })
    return await this.$axios
      .post(`/api/register`, state.signUpForm)
      .then((res) => {
        commit('setUser', res.data)
        this.$auth.setUserToken(res.data.token.token)
      })
  },
}
