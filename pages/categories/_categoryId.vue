<template>
  <v-card class="pb-6 mt-3 px-3" v-if="category" flat>
    <v-container>
      <v-row>
        <v-col cols="12" sm="12">
          <v-card-title class="px-0 secondary--text">{{
            category.name
          }}</v-card-title>
          <v-card-subtitle class="px-0">{{
            category.description
          }}</v-card-subtitle>
          <v-card-subtitle class="pa-0" v-if="category.children.length > 0"
            >sub categories</v-card-subtitle
          >
          <v-chip-group active-class="primary--text">
            <v-chip
              v-for="cat in category.children"
              :key="cat.id + 'subCats'"
              :to="`/categories/${cat.slug}`"
            >
              {{ cat.name }}
            </v-chip>
          </v-chip-group>
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
                module="category"
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
    await this.$store.dispatch('category/getCategory', {
      id: this.$route.params.categoryId,
      ...this.options,
    })
  },
  computed: {
    category() {
      return this.$store.getters['category/category']
    },
    products() {
      return this.$store.getters['category/products']
    },
    meta() {
      return this.$store.getters['category/meta']
    },
  },

  head() {
    return {
      title: this.category ? this.category.name : 'category',
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: 'description',
          name: 'description',
          content: this.category
            ? this.category.description
            : 'category description',
        },
      ],
    }
  },
  watch: {
    options: {
      handler(val) {
        this.$store.dispatch('category/getCategory', {
          id: this.$route.params.categoryId,
          ...val,
        })
      },
      deep: true,
    },
  },
  destroyed() {
    this.$store.commit('category/setCategory', { category: null, products: [] })
  },
}
</script>
