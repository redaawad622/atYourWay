<template>
  <v-sheet class="mt-8" v-if="products.length > 0" color="#f5f7fa">
    <v-container>
      <v-carousel
        height="auto"
        hide-delimiter-background
        :hide-delimiters="$vuetify.breakpoint.xs"
        show-arrows-on-hover
        cycle
      >
        <template v-slot:prev="{ on, attrs }">
          <v-btn
            color="#3333335c"
            v-bind="attrs"
            class="elevation-0 btnHover"
            tile
            width="80px"
            height="35px"
            v-on="on"
          >
            <v-icon>mdi-chevron-left</v-icon>
          </v-btn>
        </template>
        <template v-slot:next="{ on, attrs }">
          <v-btn
            tile
            color="#3333335c"
            v-bind="attrs"
            width="80px"
            height="35px"
            v-on="on"
            class="elevation-0 btnHover"
          >
            <v-icon>mdi-chevron-right</v-icon>
          </v-btn>
        </template>
        <v-carousel-item
          v-for="(product, i) in products"
          :key="i + 'slideItemDis'"
        >
          <product-item-in-details
            :product="product"
            module="home"
          ></product-item-in-details>
        </v-carousel-item>
      </v-carousel>
    </v-container>
  </v-sheet>
</template>

<script>
import ProductItemInDetails from '../common/ProductItemInDetails.vue'
export default {
  components: { ProductItemInDetails },
  name: 'sliderProducts',
  computed: {
    products() {
      return this.$store.getters['home/sliderProducts']
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
