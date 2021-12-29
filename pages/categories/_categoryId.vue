<template>
  <v-card class="pb-6 mt-3 px-3" v-if="category" flat>
    <v-container>
      <v-row>
        <v-col cols="12" md="3">
          <component
            :is="$vuetify.breakpoint.mdAndUp ? 'v-sheet' : 'v-bottom-sheet'"
            v-model="filterSheet"
          >
            <filter-list
              @close="filterSheet = false"
              @setFilter="setFilter"
            ></filter-list>
          </component>
        </v-col>
        <v-col cols="12" md="9">
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
            <v-btn icon v-if="!$vuetify.breakpoint.mdAndUp" @click="filterSheet = true"
              ><v-icon>mdi-filter-outline</v-icon></v-btn
            >
          </v-sheet>
          <v-row>
            <v-col
              v-for="(product, index) in products"
              :key="product.title + product.id + index + 'cat'"
              cols="12"
              :sm="isList ? 12 : 6"
              :md="isList ? 12 : 6"
              :lg="isList ? 6 : 4"
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
import FilterList from '~/components/category/filterList.vue'
import ProductItem from '~/components/common/ProductItem.vue'
export default {
  auth: false,

  components: { ProductItem, FilterList },

  data() {
    return {
      isList: 0,
      options: {
        sort: 'relevance',
        page: 1,
      },
      filterSheet: false,
      filter: {
        min: '',
        max: '',
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
  methods: {
    setFilter(filter) {
      this.filter = filter
      this.makeFilter()
    },
    makeFilter() {
      this.$store.dispatch('category/getCategory', {
        id: this.$route.params.categoryId,
        ...this.options,
        ...this.filter,
      })
    },
  },
  watch: {
    options: {
      handler() {
        this.makeFilter()
      },
      deep: true,
    },
  },
  destroyed() {
    this.$store.commit('category/setCategory', { category: null, products: [] })
  },
}
</script>
<style scoped>
input[type='number'] {
  -moz-appearance: textfield;
}
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
}
</style>
<style>
.v-text-field--outlined.v-input--dense > .v-input__control > .v-input__slot {
  min-height: auto !important;
}
</style>
