<template>
  <v-sheet :class="{ 'px-3': $vuetify.breakpoint.xs }">
    <homeCarousel></homeCarousel>
    <homeFeaturedProducts></homeFeaturedProducts>
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
