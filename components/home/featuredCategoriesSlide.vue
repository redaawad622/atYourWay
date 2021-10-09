<template>
  <v-container fluid class="mt-8" v-if="categories && categories.length > 0">
   <v-row>
     <v-col v-for="(cat, k) in categories" :key="cat.id + cat.name + k" cols="12" sm="4">
         <cat-item-slide :cat="cat"></cat-item-slide>
     </v-col>
   </v-row>

  </v-container>
</template>

<script>
import catItemSlide from '../category/catItemSlide.vue'
export default {
  components: { catItemSlide },
  name: 'featuredCategoriesSlide',
  computed: {
    categories() {
      return this.$store.getters['home/featuredCategories']
    },
  },
}
</script>
