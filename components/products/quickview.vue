<template>
  <v-dialog
    persistent
    max-width="850px"
    :value="product"
    :content-class="contentClass"
  >
    <v-card
      class="pb-6 mt-1 px-3"
      :class="{ 'px-5': $vuetify.breakpoint.xs }"
      v-if="product"
    >
      <v-sheet class="d-flex justify-end">
        <v-btn icon><v-icon>mdi-window-minimize</v-icon></v-btn>
        <v-btn icon><v-icon>mdi-window-maximize</v-icon></v-btn>
        <v-btn @click="quickview()" icon
          ><v-icon>mdi-window-close</v-icon></v-btn
        >
      </v-sheet>
      <v-row>
        <v-col v-if="!$vuetify.breakpoint.xs" cols="12" sm="6">
          <v-row no-gutters>
            <v-col cols="10">
              <v-img
                height="420px"
                class="mx-2"
                :src="$getUrl(product.images[selectedImage].full)"
                contain
              ></v-img>
            </v-col>
            <v-col cols="2">
              <v-img
                v-for="($img, k) in product.images"
                :key="'quickImage' + k"
                :src="$getUrl($img.full)"
                class="mb-3 imageBorder mx-1"
                height="70px"
                :class="{ selected: k == selectedImage }"
                @click="selectedImage = k"
                contain
              ></v-img>
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="12" sm="6">
          <v-card-title class="pa-0 display-1">{{
            product.title
          }}</v-card-title>
          <div class="mt-4 headline primary--text">{{ sale_price }} EGP</div>
          <p class="grey--text">{{ product.description }}</p>
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
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: 'quickview',
  data: () => {
    return {
      attributes: {},
      selectedImage: 0,
      quantity: 1,
      sale_price: 0,
    }
  },
  computed: {
    product() {
      return this.$store.getters['product/quickview']
    },
    contentClass() {
      return this.$vuetify.breakpoint.smAndDown ? 'mx-2' : ''
    },
  },
  methods: {
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
