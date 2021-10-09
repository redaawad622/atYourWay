<template>
  <v-sheet :class="{ 'px-3': $vuetify.breakpoint.xs }">
    <homeCarousel></homeCarousel>
    <homeFeaturedCategoriesSlide></homeFeaturedCategoriesSlide>
    <v-container fluid>
      <homeFeaturedProducts></homeFeaturedProducts>
    </v-container>
    <homeSliderProducts></homeSliderProducts>
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
