<template>
  <v-card
    class="pb-6 mt-3"
    :class="{
      'px-16': $vuetify.breakpoint.mdAndUp,
      'px-8': $vuetify.breakpoint.sm,
      'px-2': $vuetify.breakpoint.xs,
    }"
    v-if="product"
    flat
  >
    <v-container fluid>
      <v-row>
        <v-col cols="12" sm="6">
          <v-row>
            <v-col cols="12" class="px-1">
              <v-img
                max-height="650px"
                max-width="520px"
                class="mx-2"
                :aspect-ratio="0.8"
                :src="$getUrl(product.images[selectedImage].full)"
                @click="openImage(selectedImage)"
              ></v-img>
            </v-col>
            <v-col cols="12" class="px-2" v-if="product.images.length > 0">
              <v-slide-group mandatory :show-arrows="!$vuetify.breakpoint.xs">
                <v-slide-item
                  v-for="($img, k) in product.images"
                  :key="'quickImage' + k"
                >
                  <v-img
                    :src="$getUrl($img.full)"
                    class="mb-3 imageBorder mx-1"
                    height="100px"
                    max-width="80px"
                    :class="{ selected: k == selectedImage }"
                    @click="selectedImage = k"
                  ></v-img>
                </v-slide-item>
              </v-slide-group>
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="12" sm="6">
          <v-card-title class="pa-0 display-1">{{
            product.title
          }}</v-card-title>
          <div class="mt-4 headline primary--text">{{ sale_price }} EGP</div>
          <div
            v-for="(attribute, index) in product.attributes"
            :key="'attri' + index"
          >
            <v-card-title class="px-0 secondary--text">{{
              attribute[0].attribute.name
            }}</v-card-title>
            <select
              class="nativeSelect"
              @change="setItem($event, index)"
              :value="attributes[index]"
            >
              <option
                v-for="item in attribute"
                :key="'attriItem' + item.id"
                :value="item.id"
              >
                {{ item.value }}
              </option></select
            ><span
              class="mx-2"
              v-if="+attribute.find((x) => x.id == attributes[index]).price"
              >+{{
                +attribute.find((x) => x.id == attributes[index]).price
              }}</span
            >
          </div>
          <div>
            <v-card-title class="px-0 secondary--text">Quantity</v-card-title>
            <v-sheet class="d-flex">
              <v-text-field
                append-icon="mdi-plus"
                prepend-inner-icon="mdi-minus"
                v-model="quantity"
                hide-details
                height="40px"
                type="number"
                outlined
                style="flex: unset !important; border-radius: 0; width: 120px"
                id="quaInputQuickView"
                dense
                class="inputPrice"
                @click:append="quantity++"
                @click:prepend-inner="quantity--"
              ></v-text-field>
              <v-btn
                color="#000"
                dark
                width="155px"
                height="40px"
                class="text-capitalize mx-3"
                elevation="0"
                @click="addToCart"
                tile
                >Add To Cart</v-btn
              >
            </v-sheet>
          </div>
        </v-col>
      </v-row>
    </v-container>
    <v-tabs
      v-model="tab"
      class="mt-12"
      color="secondary"
      background-color="transparent"
    >
      <v-tab class="px-0 me-4 text-capitalize fornt-weight-bold headline">
        Description
      </v-tab>
      <v-tab class="px-0 me-4 text-capitalize fornt-weight-bold headline">
        Product Details
      </v-tab>
    </v-tabs>

    <v-tabs-items v-model="tab">
      <v-tab-item>
        <v-card flat>
          <v-card-text>{{ product.description }}</v-card-text>
        </v-card>
      </v-tab-item>
      <v-tab-item>
        <v-card flat>
          <v-card-text>
            <div
              v-for="op in product.options"
              :key="op.name + 'op'"
              class="mb-2"
            >
              <span class="secondary--text subtitle-1 font-weight-bold">{{
                op.name
              }}</span>
              <span class="textGrey--text">{{ op.value }}</span>
            </div>
          </v-card-text>
        </v-card>
      </v-tab-item>
    </v-tabs-items>
    <v-card-title class="headline secondary--text text-capitalize px-0"
      >review</v-card-title
    >
    <v-btn outlined class="text-capitalize mb-4"
      >write a customer review
    </v-btn>
    <v-row align="center" class="mx-0">
      <v-rating
        :value="5"
        color="amber"
        hover
        readonly
        clearable
        size="30"
      ></v-rating>

      <div class="grey--text ms-4">5 (413)</div>
    </v-row>
    <v-row align="center" class="mx-0">
      <v-rating
        :value="4"
        color="amber"
        hover
        readonly
        clearable
        size="30"
      ></v-rating>

      <div class="grey--text ms-4">4 (413)</div>
    </v-row>
    <v-row align="center" class="mx-0">
      <v-rating
        :value="3"
        color="amber"
        hover
        readonly
        clearable
        size="30"
      ></v-rating>

      <div class="grey--text ms-4">3 (413)</div>
    </v-row>
    <v-row align="center" class="mx-0">
      <v-rating
        :value="2"
        color="amber"
        hover
        readonly
        clearable
        size="30"
      ></v-rating>

      <div class="grey--text ms-4">2 (413)</div>
    </v-row>
    <v-row align="center" class="mx-0">
      <v-rating
        :value="1"
        color="amber"
        hover
        readonly
        clearable
        size="30"
      ></v-rating>

      <div class="grey--text ms-4">1 (413)</div>
    </v-row>
    <sugg-products ></sugg-products>
  </v-card>
</template>

<script>
import suggProducts from '~/components/products/suggProducts.vue'
export default {
  auth: false,
  components: { suggProducts },
  name: 'productPage',
  data: () => {
    return {
      attributes: {},
      selectedImage: 0,
      quantity: 1,
      sale_price: 0,
      tab: null,
      rate: 0,
    }
  },

  async fetch() {
    await this.$store.dispatch(
      'product/getProduct',
      this.$route.params.productId
    )
  },
  computed: {
    product() {
      return this.$store.getters['product/product']
    },
    contentClass() {
      return this.$vuetify.breakpoint.smAndDown ? 'mx-2' : ''
    },
  },
  head() {
    return {
      title: this.product
        ? this.product.metaTitle || this.product.title
        : 'product',
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: 'description',
          name: 'description',
          content: this.product
            ? this.product.metaDescription || this.product.description
            : 'product',
        },
      ],
    }
  },
  methods: {
    openImage(k) {
      this.$store.commit('product/setSelectedImage', k)
      this.$store.commit('product/selectedProduct', this.product)
    },
    price() {
      if (this.product) {
        const ids = Object.keys(this.attributes).map((e) =>
          this.product.attributes[e].find((n) => n.id === this.attributes[e])
        )
        this.sale_price = Object.values(ids).reduce(
          (a, i) => +i.price + a,
          +this.product.sale_price
        )
      }
    },
    setItem(e, index) {
      this.$nextTick(() => {
        this.$set(this.attributes, index, +e.target.value)
        this.price()
        this.$forceUpdate()
      })
    },
    addToCart() {
      this.$store.commit('product/addToCart', {
        product: this.product,
        quantity: this.quantity,
        attributes: this.attributes,
      })
    },
    quickview() {
      this.$store.commit('product/setQuickview', null)
    },
    setVal(vari, k, value) {
      if (k === 0) {
        this.attributes[vari] = value
      }
    },
  },
  destroyed() {
    this.$store.commit('product/setProduct', { data: null })
  },
  watch: {
    product(val) {
      this.attributes = {}
      if (val) {
        for (const index in val.attributes) {
          this.attributes[index] = val.attributes[index][0].id
        }
      }
    },
    attributes: {
      deep: true,
      handler() {
        this.price()
      },
    },
    quantity(val) {
      if (val < 1) {
        this.quantity = 1
      }
    },
  },
}
</script>
<style lang="scss">
.inputPrice input[type='number'] {
  -moz-appearance: textfield;
}
.inputPrice input::-webkit-outer-spin-button,
.inputPrice input::-webkit-inner-spin-button {
  -webkit-appearance: none;
}

.imageBorder {
  border-radius: 3px;
  border: 1px solid #fff;
  opacity: 0.9;
  transition: all 0.4s ease;
}
.selected {
  opacity: 1;
  border: 1px solid var(--v-primary-base);
}
.nativeSelect {
  width: 200px;
  box-shadow: 0 0 0;
  border: 1px solid #ebebeb;
  height: 40px;
  -webkit-appearance: none;
  background: #fff
    url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAQAAAD9CzEMAAAAPklEQVR4Ae3TwREAEBQD0V/6do4SXPZg7EsBhsQ8IEmSMOsiuEfg3gL3oXC7wK0bd1G4o8X9F4yIkyQfSrIByQBjp7QuND8AAAAASUVORK5CYII=)
    no-repeat scroll right 0.5rem center/1.25rem 1.25rem;
  padding: 0 0.5rem;
}
.nativeSelect:focus {
  outline: 1px solid var(--v-primary-base);
}
#quaInputQuickView {
  text-align: center;
}
</style>
