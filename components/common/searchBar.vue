<template>
  <v-menu
    offset-y
    bottom
    origin="center center"
    transition="scale-transition"
    :close-on-content-click="false"
    :nudge-bottom="8"
    tile
    contentClass="noShadow"
  >
    <template v-slot:activator="{ on, attrs }">
      <v-btn icon v-bind="attrs" v-on="on">
        <v-icon color="#333">mdi-magnify</v-icon>
      </v-btn>
    </template>
    <v-sheet class="pa-8" width="400px">
      <v-autocomplete
        v-model="model"
        :items="suggestions"
        :search-input.sync="search"
        hide-no-data
        hide-selected
        label="Search..."
        placeholder="Start typing to Search"
      ></v-autocomplete>
    </v-sheet>
  </v-menu>
</template>

<script>
export default {
  data: () => ({
    limit: 14,
    isLoading: false,
    model: null,
    search: null,
  }),
  computed: {
    suggestions() {
      return this.$store.getters['search/suggestions']
    },
  },
  watch: {
    search(val) {
      this.$store.dispatch('search/suggestion', { key: val, limit: this.limit })
    },
  },
}
</script>
