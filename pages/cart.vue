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
        <cart-total-section></cart-total-section>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import cartItem from '~/components/cart/cartItem.vue'
import CartTotalSection from '~/components/cart/cartTotalSection.vue'
export default {
  name: 'cart',
  auth: false,

  components: { cartItem, CartTotalSection },
  data() {
    return {
      loading: true,
    }
  },
  computed: {
    cart() {
      return this.$store.getters['product/cart']
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
