export const state = () => ({
  quickview: null,
  cart: [],
})
export const getters = {
  quickview(state) {
    return state.quickview
  },
  cart(state) {
    return state.cart
  },
}

export const mutations = {
  setQuickview(state, payload) {
    state.quickview = payload
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
}
