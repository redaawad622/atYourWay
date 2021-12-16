<template>
  <v-card
    flat
    @click.self="$router.push(`/${product.slug}`)"
    tile
    class="my-16"
    color="transparent"
  >
    <v-row>
      <v-col cols="12" sm="6">
        <v-img
          eager
          :class="{
            'ms-auto': !$vuetify.breakpoint.xs,
            'mx-auto': $vuetify.breakpoint.xs,
          }"
          :src="
            $getUrl(
              product.images[hover ? (product.images.length > 1 ? 1 : 0) : 0]
                .full
            )
          "
          @click="$router.push(`/${product.slug}`)"
          :min-height="$vuetify.breakpoint.xs ? 'auto' : '410px'"
          :max-height="$vuetify.breakpoint.xs ? '410px' : '450px'"
          :max-width="$vuetify.breakpoint.xs ? 'auto' : '350px'"
        >
          <template v-slot:placeholder>
            <img-slot></img-slot>
          </template>
          <div style="top: 30px; position: relative">
            <div class="mb-3">
              <span class="primary white--text lblProd"
                >{{ product.discount }}%</span
              >
            </div>
            <div v-if="isNew">
              <span class="secondary white--text lblProd">New</span>
            </div>
          </div>
        </v-img>
      </v-col>
      <v-col cols="12" sm="6">
        <div
          :class="{
            'ms-auto': !$vuetify.breakpoint.xs,
            'mx-auto': $vuetify.breakpoint.xs,
          }"
        >
          <div class="secondary--text display-3 mb-2 font-weight-black">
            Save up to
          </div>
          <div
            class="secondary--text display-3 font-weight-black text-uppercase"
          >
            <span class="primary--text">{{ product.discount }}%</span> off
          </div>
          <v-card-title
            @click="$router.push(`/${product.slug}`)"
            class="prodTitle headline"
            >{{ product.title }}</v-card-title
          >

          <v-card-text>
            <v-row align="center" class="mx-0">
              <v-rating
                :value="4.5"
                color="amber"
                dense
                half-increments
                readonly
                size="14"
              ></v-rating>

              <div class="grey--text ms-4">4.5 (413)</div>
            </v-row>
            <v-row align="center" class="mx-0">
              <div class="grey--text text-decoration-line-through body-1">
                {{ price }} EGP
              </div>
              <div class="display-1 font-weight-bold ms-3 primary--text">
                {{ price - price * (product.discount / 100) }} EGP
              </div>
            </v-row>
            <v-btn
              color="#000"
              dark
              width="155px"
              height="40px"
              class="text-capitalize my-4"
              elevation="0"
              @click="addToCart"
              v-if="!endTime"
              tile
              >Add To Cart</v-btn
            >
            <div class="text-uppercase mt-3" v-if="!endTime">
              hurry up! offer ends in
            </div>
            <div class="text-uppercase red--text title mt-3" v-else>
              offer is over 😞
            </div>
            <count-down
              @finish="endTime = true"
              :deadline="getDeadLine"
            ></count-down>
          </v-card-text>
        </div>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
import countDown from './countDown.vue'
export default {
  components: { countDown },
  name: 'productItemInDetails',
  props: {
    product: {
      type: Object,
      required: true,
    },
    module: {
      type: String,
    },
  },
  data() {
    return {
      hover: false,
      attributes: {},
      endTime: false,
    }
  },
  computed: {
    isNew() {
      const date = new Date(this.product.created_at)
      date.setDate(date.getDate() + 2)
      return date >= new Date()
    },
    getDeadLine() {
      return new Date(
        new Date(this.product.startDate + ' UTC').getTime() +
          this.product.duration * 60000
      ).toString()
    },
    price() {
      const $keys = Object.keys(this.product.attributes)
      return Object.values(this.product.attributes).reduce((a, i, index) => {
        this.attributes[$keys[index]] = i[0].id
        return +i[0].price + a
      }, +this.product.sale_price)
    },
  },
  methods: {
    toggleFav() {
      this.$store.commit(`${this.module}/toggleFav`, this.product)
    },
    quickview() {
      this.hover = false
      this.$store.commit('product/setQuickview', this.product)
    },
    addToCart() {
      this.$store.commit('product/addToCart', {
        product: this.product,
        quantity: 1,
        attributes: this.attributes,
      })
    },
  },
}
</script>
<style lang="scss">
.speedBtn {
  box-shadow: 0 2px 6px 0 rgb(0 0 0 / 6%);
  &:hover {
    background: var(--v-primary-base) !important;
    .v-icon {
      color: #fff !important;
    }
  }
}
</style>
<style lang="scss" scoped>
.prodTitle:hover {
  color: var(--v-primary-base) !important;
  cursor: pointer;
}
.prodAttr {
  transition: all 600ms ease;
}
.over {
  background: transparent;
  width: 100%;
  height: 100%;
}
.lblProd {
  font-size: 12px;
  padding: 3px 10px;
  width: 50px;
  display: block;
}
</style>
