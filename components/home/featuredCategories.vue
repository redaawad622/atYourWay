<template>
  <v-sheet class="mt-8" v-if="categories && categories.length > 0">
    <v-card-title
      class="justify-center secondary--text display-1 font-weight-bold"
      >Shop By Category
    </v-card-title>
    <v-sheet class="mx-4">
      <v-row>
        <v-col cols="12" sm="12" md="6">
          <v-row>
            <v-col cols="12" sm="6">
              <v-row>
                <v-col cols="12">
                  <v-sheet >
                    <cat-item :cat="categories[0]"></cat-item>
                  </v-sheet>
                </v-col>
                <v-col cols="12">
                  <v-sheet >
                    <cat-item :cat="categories[1]"></cat-item>
                  </v-sheet>
                </v-col>
              </v-row>
            </v-col>
            <v-col cols="12" sm="6">
              <v-sheet >
                <cat-item :cat="categories[2]"></cat-item>
              </v-sheet>
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="12" sm="12" md="6">
          <v-col cols="12">
            <v-row>
              <v-col cols="12" sm="6" class="pt-sm-0">
                <v-sheet >
                  <cat-item :cat="categories[3]"></cat-item>
                </v-sheet>
              </v-col>
              <v-col cols="12" sm="6" class="pt-sm-0">
                <v-sheet >
                  <cat-item :cat="categories[4]"></cat-item>
                </v-sheet>
              </v-col>
            </v-row>
          </v-col>
          <v-col cols="12">
            <v-sheet >
              <cat-item :cat="categories[5]"></cat-item>
            </v-sheet>
          </v-col>
        </v-col>
      </v-row>
    </v-sheet>
  </v-sheet>
</template>

<script>
import catItem from '../category/catItem.vue'
export default {
  components: { catItem },
  name: 'featuredCategories',
  computed: {
    categories() {
      return this.$store.getters['home/featuredCategories']
    },
  },
}
</script>
