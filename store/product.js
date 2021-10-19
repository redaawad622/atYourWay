export const state = () => ({
  quickview: null,
  cart: [],
  product: null,
  selectedProduct: null,
  selectedImage: 0,
})
export const getters = {
  quickview(state) {
    return state.quickview
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
    state.product = payload.data
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
}
