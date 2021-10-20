<template>
  <v-menu
    origin="center center"
    transition="scale-transition"
    bottom
    offset-y
    :close-on-content-click="false"
    open-on-hover
    tile
    :close-delay="100"
    :nudge-bottom="8"
    max-height="600px"
    contentClass="noShadow"
  >
    <template v-slot:activator="{ on, attrs }">
      <v-btn icon v-bind="attrs" v-on="on">
        <v-badge color="primary" :content="cartLen" offset-x="10" offset-y="10">
          <v-icon color="#333">mdi-cart-outline</v-icon>
        </v-badge>
      </v-btn>
    </template>
    <v-sheet class="pa-9" v-if="cart && cart.length > 0">
      <v-list-item-title class="text-capitalize headline"
        >your cart: {{ cartLen }}</v-list-item-title
      >
      <v-divider class="my-3"></v-divider>
      <v-list>
        <v-list-item
          v-for="(item, k) in cart"
          :key="item.product.id + 'cart' + item.product.title"
          :to="`/${item.product.slug}`"
        >
          <v-list-item-avatar tile width="50px" height="auto">
            <v-img :src="$getUrl(item.product.images[0].full)"></v-img>
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title class="cartItemTitle">{{
              item.product.title
            }}</v-list-item-title>
            <v-list-item-subtitle class="primary--text"
              >{{ price(item) }}
              <v-chip class="mx-1" small>{{ item.quantity }}</v-chip>
            </v-list-item-subtitle>
          </v-list-item-content>
          <v-list-item-action
            ><v-btn @click="removeFromCart(k)" icon
              ><v-icon>mdi-close</v-icon></v-btn
            ></v-list-item-action
          >
        </v-list-item>
      </v-list>
      <v-divider class="my-3"></v-divider>
      <v-row align="center" justify="center">
        <v-btn
          color="primary"
          to="/cart"
          class="btnHoverSecondary mt-6"
          tile
          elevation="0"
          >checkout</v-btn
        >
      </v-row>
    </v-sheet>
    <v-sheet v-else width="250px" class="pa-8">
      No Product In The Cart
    </v-sheet>
  </v-menu>
</template>

<script>
export default {
  name: 'cartMnue',
  computed: {
    cart() {
      return this.$store.getters['product/cart']
    },
    cartLen() {
      return this.cart.reduce((a, c) => a + c.quantity, 0)
    },
  },
  methods: {
    price(item) {
      const ids = Object.keys(item.attributes).map((e) =>
        item.product.attributes[e].find((n) => n.id === item.attributes[e])
      )
      return Object.values(ids).reduce(
        (a, i) => +i.price + a,
        +item.product.sale_price
      )
    },
    removeFromCart(k) {
      this.$store.commit('product/removeFromCart', k)
    },
  },
  mounted() {
    this.$store.commit('product/setCart', this.$getLocal('localCart') || [])
  },
}
</script>
<style lang="scss">
.cartItemTitle {
  white-space: pre-wrap;
  cursor: pointer;
  &:hover {
    color: var(--v-primary-base) !important;
  }
}
</style>
