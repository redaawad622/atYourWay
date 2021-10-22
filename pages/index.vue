<template>
  <v-sheet >
    <homeCarousel></homeCarousel>
    <homeFeaturedCategoriesSlide></homeFeaturedCategoriesSlide>
    <v-container fluid>
      <homeFeaturedProducts></homeFeaturedProducts>
    </v-container>
    <homeSliderProducts></homeSliderProducts>
    <homeJoinUs></homeJoinUs>
  </v-sheet>
</template>
<script>
export default {
  async fetch() {
    await this.$store.dispatch('home/getHomeContent')
  },
  fetchOnServer: false,
}
</script>
