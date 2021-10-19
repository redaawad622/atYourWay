<template>
  <v-container>
    <v-row>
      <v-col cols="12" sm="12" md="8">
        <v-card :loading="loading">
          <v-card-title>shopping cart</v-card-title>
          <v-divider></v-divider>
          <v-list>
            <cart-item
              v-for="(item, k) in cart"
              :key="'cartMain' + k"
              :item="item"
              :k="k"
            ></cart-item>
          </v-list>
        </v-card>
        <v-btn plain class="text-capitalize px-0 my-2" to="/" link
          ><v-icon class="ps-1">mdi-chevron-left</v-icon> continue
          shopping</v-btn
        >
      </v-col>
      <v-col cols="12" sm="12" md="4">
        <v-card>
          <v-sheet class="pa-5">
            <div class="d-flex justify-space-between">
              <span class="text-capitalize subtitle-1">{{ cartLen }} item</span>
              <span class="text-capitalize subtitle-1">{{ price }} EGP</span>
            </div>
            <div class="d-flex justify-space-between">
              <span class="text-capitalize subtitle-1">shipping</span>
              <span class="text-capitalize subtitle-1">{{ shipping }} EGP</span>
            </div>
          </v-sheet>
          <v-divider></v-divider>
          <v-sheet class="pa-5">
            <div class="d-flex justify-space-between">
              <span class="text-capitalize subtitle-1">total</span>
              <span class="text-capitalize subtitle-1">{{ total }} EGP</span>
            </div>
          </v-sheet>
          <v-divider></v-divider>
          <v-sheet class="pa-5">
            <v-row align="center" justify="center">
              <v-btn
                color="primary"
                to="/cart"
                width="250px"
                class="btnHoverSecondary my-3"
                tile
                elevation="0"
                >checkout</v-btn
              >
            </v-row>
          </v-sheet>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import cartItem from '~/components/cart/cartItem.vue'
export default {
  name: 'cart',

  components: { cartItem },
  data() {
    return {
      loading: true,
    }
  },
  computed: {
    cart() {
      return this.$store.getters['product/cart']
    },
    cartLen() {
      return this.cart.reduce((a, c) => a + c.quantity, 0)
    },
    price() {
      let p = 0
      if (this.cart)
        this.cart.forEach((item) => {
          const ids = Object.keys(item.attributes).map((e) =>
            item.product.attributes[e].find((n) => n.id === item.attributes[e])
          )
          const pr = Object.values(ids).reduce(
            (a, i) => +i.price + a,
            +item.product.sale_price
          )
          console.log(pr)

          p += (pr - pr * this.discount(item)/100) * item.quantity
        })
      return Math.round(p)
    },
    shipping() {
      return 14
    },

    total() {
      return this.price + this.shipping
    },
  },
  methods: {
    removeFromCart(k) {
      this.$store.commit('product/removeFromCart', k)
    },
    getDeadLine(startDate, duration) {
      return new Date(new Date(startDate + ' UTC').getTime() + duration * 60000)
    },
    discount(item) {
      if (item.product.discount && item.product.startDate) {
        if (
          new Date().getTime() <
          this.getDeadLine(
            item.product.startDate,
            item.product.duration
          ).getTime()
        ) {
          return item.product.discount ?? 0
        }
      }
      return item.product.permanentDiscount ?? 0
    },
  },
  mounted() {
    this.$store.commit('product/setCart', this.$getLocal('localCart') || [])
    this.loading = false
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
