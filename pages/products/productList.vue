<template>
  <v-card class="pb-6 mt-3 px-3" flat>
    <v-container>
      <v-row>
        <v-col cols="12" sm="12">
          <v-card-title class="px-0 secondary--text">{{
            this.$route.query.description
          }}</v-card-title>

          <v-sheet class="d-flex justify-space-between py-4">
            <v-btn-toggle v-model="isList" color="primary" dense group>
              <v-btn :value="0" icon>
                <v-icon>mdi-dots-grid </v-icon>
              </v-btn>

              <v-btn :value="1" icon>
                <v-icon>mdi-format-list-bulleted-square </v-icon>
              </v-btn>
            </v-btn-toggle>
            <select class="nativeSelect" v-model="options.sort">
              <option value="relevance">Relevance</option>
              <option value="atoz">Name, A to Z</option>
              <option value="ztoa">Name, Z to A</option>
              <option value="low">Price, low to high</option>
              <option value="high">Price, high to low</option>
            </select>
          </v-sheet>
          <v-row>
            <v-col
              v-for="(product, index) in products"
              :key="product.title + product.id + index + 'cat'"
              cols="12"
              :sm="isList ? 12 : 6"
              :md="isList ? 12 : 4"
              :lg="isList ? 6 : 3"
              :xl="isList ? 4 : 2"
            >
              <product-item
                :isList="$vuetify.breakpoint.xs ? false : isList"
                :product="product"
                module="product"
              ></product-item>
            </v-col>
          </v-row>

          <v-pagination
            v-model="options.page"
            :length="meta.last_page"
            v-if="meta.last_page"
            circle
          ></v-pagination>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
import ProductItem from '~/components/common/ProductItem.vue'
export default {
  components: { ProductItem },
  auth: false,
  data() {
    return {
      isList: 0,
      options: {
        sort: 'relevance',
        page: 1,
      },
    }
  },
  async fetch() {
    const type = this.$route.query.type
    await this.$store.dispatch('product/getList', {
      type,
      ...this.options,
    })
  },
  computed: {
    products() {
      return this.$store.getters['product/products']
    },
    meta() {
      return this.$store.getters['product/meta']
    },
  },

  head() {
    return {
      title: this.$route.query.description || 'products',
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: 'description',
          name: 'description',
          content: this.$route.query.description,
        },
      ],
    }
  },
  watch: {
    options: {
      handler(val) {
        this.$store.dispatch('product/getList', {
          type: this.$route.query.type,
          ...val,
        })
      },
      deep: true,
    },
  },
  destroyed() {
    this.$store.commit('product/setList', { data: [], meta: { total: 0 } })
  },
  created() {},
}
</script>
