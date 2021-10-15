<template>
  <v-menu
    origin="center center"
    transition="scale-transition"
    bottom
    offset-y
    :close-on-content-click="false"
    tile
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
    <v-sheet class="pa-8" v-if="cart && cart.length > 0">
      <v-list-item-title class="text-capitalize headline"
        >your cart: {{ cartLen }}</v-list-item-title
      >
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
              >{{ item.product.sale_price }}
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
    </v-sheet>
    <v-sheet v-else width="250px" class="pa-8">
      No Product In The Cart
    </v-sheet>
  </v-menu>
</template>

<script>
export default {
  name: 'cart',
  computed: {
    cart() {
      return this.$store.getters['product/cart']
    },
    cartLen() {
      return this.cart.reduce((a, c) => a + c.quantity, 0)
    },
  },
  methods: {
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
