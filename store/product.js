export const state = () => ({
  quickview: null,
  cart: [],
  product: null,
  selectedProduct: null,
  selectedImage: 0,
  suggProducts: [],
  token: null,
})
export const getters = {
  quickview(state) {
    return state.quickview
  },
  suggProducts(state) {
    return state.suggProducts
  },
  selectedImage(state) {
    return state.selectedImage
  },
  cart(state) {
    return state.cart
  },
  product(state) {
    return state.product
  },
  selectedProduct(state) {
    return state.selectedProduct
  },
  token(state) {
    return state.token
  },
}

export const mutations = {
  setQuickview(state, payload) {
    state.quickview = payload
  },
  setSelectedImage(state, payload) {
    state.selectedImage = payload
  },
  selectedProduct(state, payload) {
    state.selectedProduct = payload
  },
  setProduct(state, payload) {
    state.product = payload.product
    state.suggProducts = payload.suggProducts
  },
  addToCart(state, payload) {
    const index = state.cart.findIndex((v) => {
      return (
        this.$shallowEqual(v.attributes, payload.attributes) &&
        v.product.id === payload.product.id
      )
    })
    if (index === -1) {
      state.cart.push(payload)
    } else {
      state.cart[index].quantity += payload.quantity
    }
    this.$setLocal('localCart', state.cart)
  },
  setCart(state, payload) {
    state.cart = payload
  },
  setToken(state, payload) {
    state.token = payload.token
  },
  removeFromCart(state, payload) {
    state.cart.splice(payload, 1)
    this.$setLocal('localCart', state.cart)
  },
  updateQ(state, payload) {
    state.cart[payload.index].quantity = payload.val
    this.$setLocal('localCart', state.cart)
  },
}
export const actions = {
  getProduct({ commit }, payload) {
    this.$axios(`/api/products/${payload}`).then((res) => {
      commit('setProduct', res.data)
    })
  },
  getToken({ commit, state }) {
    console.log(state.cart)
    this.$axios
      .post(`/api/products/getToken`, { cart: state.cart })
      .then((res) => {
        commit('setToken', res.data)
      })
  },
}
