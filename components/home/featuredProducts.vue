<template>
  <v-sheet class="mt-8" v-if="products.length > 0">
    <v-card-title
      class="justify-center secondary--text display-1 font-weight-bold"
      >Featured Products</v-card-title
    >
    <v-slide-group :show-arrows="!$vuetify.breakpoint.xs">
      <v-slide-item
        v-slot="{ toggle }"
        v-for="(product, k) in products"
        :key="product.sku + product.name + k"
      >
        <div class="mx-4">
          <product-item
            @click="toggle"
            :product="product"
            module="home"
          ></product-item>
        </div>
      </v-slide-item>
    </v-slide-group>
  </v-sheet>
</template>

<script>
import ProductItem from '../common/ProductItem.vue'
export default {
  components: { ProductItem },
  name: 'featuredProducts',
  computed: {
    products() {
      return this.$store.getters['home/featuredProducts']
    },
  },
}
</script>
<style lang="scss">
.v-slide-group__prev .v-icon,
.v-slide-group__next .v-icon {
  height: 35px;
  width: 70px;
  background-color: rgb(51, 51, 51, 0.3);
  border-color: rgb(51, 51, 51, 0.3);
  color: #fff;
  &:hover {
    background-color: var(--v-primary-base) !important;
  }
}
</style>
