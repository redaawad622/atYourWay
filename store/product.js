export const state = () => ({
  quickview: null,
  cart: [],
  product: null,
  selectedProduct: null,
  selectedImage: 0,
  suggProducts: [],
  token: '',
  products: [],
  meta: { total: 0 },
  addNew: false,
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
  addNew(state) {
    return state.addNew
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
  products(state) {
    return state.products
  },
  meta(state) {
    return state.meta
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
  setList(state, payload) {
    state.products = payload.data
    state.meta = payload.meta
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
    state.addNew = true
    this.$setLocal('localCart', state.cart)
  },
  setCart(state, payload) {
    state.cart = payload
  },
  setAddNew(state, payload) {
    state.addNew = payload
  },
  setToken(state, payload) {
    state.token = payload.url
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
  getList({ commit }, payload) {
    this.$axios(`/api/products/getList/${payload.type}`, {
      params: payload,
    }).then((res) => {
      commit('setList', res.data)
    })
  },
  getToken({ commit, state }) {
    this.$axios
      .post(`/api/checkout/getToken`, { cart: state.cart })
      .then((res) => {
        commit('setToken', res.data)
      })
  },
  saveOrder({ state }) {
    const formData = new FormData()
    formData.append('cart', JSON.stringify(state.cart))
    return this.$axios.post(`/api/checkout/saveOrder`, formData)
  },
}
