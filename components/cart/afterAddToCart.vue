<template>
  <v-dialog v-model="addNew" max-width="100%">
    <v-card>
      <v-card-title class="justify-center white--text secondary darken-4">
        <v-icon color="white">mdi-check</v-icon> SUCCESSFULLY ADDED TO YOUR SHOPPING CART
      </v-card-title>

      <v-card-text class="pa-5" v-if="lastProduct">
        <v-row>
          <v-col cols="12" sm="3" class="text-center">
            <v-img
              aspect-ratio="0.8"
              class="mx-2"
              :contain="$vuetify.breakpoint.smAndDown"
              :height="$vuetify.breakpoint.smAndDown ? '180px' :'auto'"
              v-if="lastProduct.product.images"
              :src="$getUrl(lastProduct.product.images[0].full)"
            ></v-img
          ></v-col>
          <v-col cols="12" sm="4">
            <v-card-title class="pa-0 title secondary--text">{{
              lastProduct.product.title
            }}</v-card-title>
            <div class="mt-4 title primary--text">{{ price }} EGP</div>
            <div
              class="mt-2 textDark--text subtitle-1"
              v-for="(attr, k) in lastProduct.attributes"
              :key="'attrView' + k + lastProduct.product.title"
            >
              <span class="font-weight-bold"
                >{{ lastProduct.product.attributes[k][0].attribute.name }}:
              </span>
              {{ searchAttr(attr, lastProduct.product.attributes[k]) }}
            </div>
            <div class="mt-4 textGrey--text subtitle-1">
              <span class="font-weight-bold">Quantity: </span
              >{{ lastProduct.quantity }}
            </div>
          </v-col>
          <v-col cols="12" sm="5">
            <p class="body-1">There are {{ cartLen }} items in your cart.</p>
            <div class="mt-4 textGrey--text subtitle-1">
              <span class="font-weight-bold">Total products: </span
              >{{ totalPrice }} EGP
            </div>
            <div class="mt-4 textGrey--text subtitle-1">
              <span class="font-weight-bold">Taxes: </span>{{ 0 }} EGP
            </div>
            <div class="mt-4 textGrey--text subtitle-1">
              <span class="font-weight-bold">Total: </span>{{ totalPrice }} EGP
              (without shipping)
            </div>
          </v-col>
        </v-row>
      </v-card-text>

      <v-divider></v-divider>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
          color="#000"
          dark
          height="40px"
          class="text-capitalize px-4  mx-3 btnHover"
          elevation="0"
          @click="addNew = false"
          tile
          >continue shopping</v-btn
        >
        <v-btn
          color="#000"
          dark
          height="40px"
          class="text-capitalize px-4 mx-3 btnHover"
          elevation="0"
          @click="addNew = false"

          to="/cart"
          tile
          >proceed to checkout</v-btn
        >
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
<script>
export default {
  data() {
    return {
      dialog: false,
    }
  },

  computed: {
    cart() {
      return this.$store.getters['product/cart']
    },
    lastProduct() {
      return this.cart[this.cart.length - 1]
    },
    cartLen() {
      return this.cart.reduce((a, c) => a + c.quantity, 0)
    },
    price() {
      if (this.lastProduct) {
        const ids = Object.keys(this.lastProduct.attributes).map((e) =>
          this.lastProduct.product.attributes[e].find(
            (n) => n.id === this.lastProduct.attributes[e]
          )
        )
        return (
          Object.values(ids).reduce(
            (a, i) => +i.price + a,
            +this.lastProduct.product.sale_price
          ) * this.lastProduct.quantity
        )
      }
      return 0
    },
    totalPrice() {
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

          p += (pr - (pr * this.discount(item)) / 100) * item.quantity
        })
      return Math.round(p)
    },
    addNew: {
      get() {
        return this.$store.getters['product/addNew']
      },
      set(val) {
        this.$store.commit('product/setAddNew', val)
      },
    },
  },
  methods: {
    searchAttr(id, arr) {
      return arr.find((sub) => sub.id === id).value
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
