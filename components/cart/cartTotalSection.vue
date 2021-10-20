<template>
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
    <template v-if="$route.path == '/cart'">
      <v-divider></v-divider>
      <v-sheet class="pa-5">
        <v-row align="center" justify="center">
          <v-btn
            color="primary"
            to="/checkout"
            width="250px"
            class="btnHoverSecondary my-3"
            tile
            elevation="0"
            >checkout</v-btn
          >
        </v-row>
      </v-sheet>
    </template>
  </v-card>
</template>

<script>
export default {
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

          p += (pr - (pr * this.discount(item)) / 100) * item.quantity
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
}
</script>
