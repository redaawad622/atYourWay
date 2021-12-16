<template>
  <v-card
    :max-width="isList ? '100%' : $vuetify.breakpoint.smAndDown ? 320 : 260"
    flat
    @click.self="$router.push(`/${product.slug}`)"
    tile
    @mouseleave="hover = false"
    @mouseover="hover = true"
    :class="{ 'mx-auto': true }"
  >
    <v-row class="ma-0" :class="{ 'justify-center': $vuetify.breakpoint.xs }">
      <v-img
        eager
        :src="
          $getUrl(
            product.images[0]
              ? product.images[hover ? (product.images.length > 1 ? 1 : 0) : 0]
                  .full
              : ''
          )
        "
        :aspect-ratio="0.8"
        min-height="340px"
        min-width="272px"
      >
        <template v-slot:placeholder>
          <img-slot></img-slot>
        </template>
        <div @click="$router.push(`/${product.slug}`)" class="over"></div>
        <v-speed-dial
          :value="$vuetify.breakpoint.xs ? true : hover"
          :direction="'bottom'"
          right
          v-if="!isList"
          top
          absolute
          style="right: 36px"
          transition="scale-transition"
        >
          <v-tooltip left>
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                class="speedBtn"
                elevation="0"
                v-bind="attrs"
                v-on="on"
                fab
                small
                color="white"
                v-if="product.isFav"
                @click="toggleFav()"
              >
                <v-icon color="red">mdi-heart</v-icon>
              </v-btn>
              <v-btn
                class="speedBtn"
                elevation="0"
                v-bind="attrs"
                v-on="on"
                fab
                small
                color="white"
                @click="toggleFav()"
                v-else
              >
                <v-icon color="#666">mdi-heart-outline</v-icon>
              </v-btn>
            </template>
            <span>{{
              product.isFav ? 'remove from with list' : 'add to wish list'
            }}</span>
          </v-tooltip>
          <v-tooltip left>
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                class="speedBtn"
                elevation="0"
                v-bind="attrs"
                v-on="on"
                fab
                @click="addToCart()"
                small
                color="white"
              >
                <v-icon color="#666">mdi-cart-plus</v-icon>
              </v-btn>
            </template>
            <span>add to cart</span>
          </v-tooltip>
          <v-tooltip left>
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                class="speedBtn"
                elevation="0"
                v-bind="attrs"
                v-on="on"
                fab
                small
                color="white"
              >
                <v-icon color="#666">mdi-compare-horizontal</v-icon>
              </v-btn>
            </template>
            <span>add to compare</span>
          </v-tooltip>
          <v-tooltip left>
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                class="speedBtn"
                elevation="0"
                v-bind="attrs"
                v-on="on"
                @click="quickview()"
                fab
                small
                color="white"
              >
                <v-icon color="#666">mdi-magnify-plus-outline</v-icon>
              </v-btn>
            </template>
            <span>quickview</span>
          </v-tooltip>
        </v-speed-dial>
      </v-img>
      <div style="flex: 1">
        <v-card-title
          @click="$router.push(`/${product.slug}`)"
          class="prodTitle secondary--text"
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
          <div
            v-show="hover && Object.keys(product.attributes).length > 0"
            class="my-4 text-subtitle-1 grey--text prodAttr"
          >
            <span
              v-for="(item, k) in Object.values(product.attributes)[0]"
              :key="k + 'attri'"
            >
              {{ item.value }}
              <template
                v-if="k + 1 != Object.values(product.attributes)[0].length"
                >/</template
              >
            </span>
          </div>
          <div v-show="!hover" class="my-4 text-subtitle-1 primary--text">
            {{ price }} EGP
          </div>
          <p v-if="isList">{{ product.description }}</p>
          <div v-if="isList">
            <v-tooltip top>
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  class="speedBtn pa-0 mt-2"
                  v-bind="attrs"
                  v-on="on"
                  small
                  height="40"
                  width="40"
                  min-width="40"
                  tile
                  outlined
                  v-if="product.isFav"
                  @click="toggleFav()"
                >
                  <v-icon color="red" small>mdi-heart</v-icon>
                </v-btn>
                <v-btn
                  class="speedBtn pa-0 mt-2"
                  v-bind="attrs"
                  v-on="on"
                  small
                  height="40"
                  width="40"
                  min-width="40"
                  tile
                  outlined
                  @click="toggleFav()"
                  v-else
                >
                  <v-icon color="#666" small>mdi-heart-outline</v-icon>
                </v-btn>
              </template>
              <span>{{
                product.isFav ? 'remove from with list' : 'add to wish list'
              }}</span>
            </v-tooltip>

            <v-tooltip top>
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  class="speedBtn pa-0 mt-2"
                  v-bind="attrs"
                  v-on="on"
                  small
                  height="40"
                  width="40"
                  min-width="40"
                  tile
                  outlined
                >
                  <v-icon color="#666">mdi-compare-horizontal</v-icon>
                </v-btn>
              </template>
              <span>add to compare</span>
            </v-tooltip>
            <v-tooltip top>
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  class="speedBtn pa-0 mt-2"
                  v-bind="attrs"
                  v-on="on"
                  small
                  height="40"
                  width="40"
                  min-width="40"
                  tile
                  outlined
                  @click="quickview()"
                >
                  <v-icon color="#666">mdi-magnify-plus-outline</v-icon>
                </v-btn>
              </template>
              <span>quickview</span>
            </v-tooltip>
            <v-btn
              class="speedBtn white--text mt-2"
              tile
              elevation="0"
              @click="addToCart()"
              color="black"
              height="40"
            >
              add to cart
            </v-btn>
          </div>
        </v-card-text>
      </div>
    </v-row>
  </v-card>
</template>

<script>
import imgSlot from './imgSlot.vue'
export default {
  components: { imgSlot },
  name: 'productItem',
  props: {
    product: {
      type: Object,
      required: true,
    },
    module: {
      type: String,
    },
    isList: {
      type: [Boolean, Number],
      default: false,
    },
  },
  data() {
    return {
      hover: false,
      attributes: {},
    }
  },
  computed: {
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
  border-color: #aaa !important;
  &:hover {
    background: var(--v-primary-base) !important;
    border-color: var(--v-primary-base) !important;

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
</style>
