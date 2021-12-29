<template>
  <v-card flat>
    <v-toolbar  flat color="secondary" dark>
      <v-btn  icon @click="$emit('close')">
        <v-icon v-if="!$vuetify.breakpoint.mdAndUp">mdi-close</v-icon>
      </v-btn>
      <v-toolbar-title >Filter results</v-toolbar-title>
    </v-toolbar>

    <v-card-text>
      <h2 class="text-h6 mb-2">Price</h2>

      <v-chip-group v-model="selectedPrice" column>
        <v-chip filter outlined v-for="item in priceList" :key="item.txt">
          {{ item.txt }}
        </v-chip>
      </v-chip-group>
      <v-sheet class="d-flex">
        <v-text-field
          type="number"
          suffix="egp"
          :height="30"
          class="me-2"
          v-model.number="filter.min"
          outlined
          dense
          placeholder="min"
        ></v-text-field>
        <v-text-field
          type="number"
          suffix="egp"
          :height="30"
          class="me-2"
          v-model.number="filter.max"
          outlined
          dense
          placeholder="max"
        ></v-text-field>
        <v-btn
          class="btn"
          elevation="0"
          max-height="30px"
          max-width="34px"
          min-width="34px"
          @click="updateFilter()"
          >go</v-btn
        >
      </v-sheet>
    </v-card-text>

    <v-card-text>
      <h2 class="text-h6 mb-2">test</h2>

      <v-chip-group v-model="neighborhoods" column multiple>
        <v-chip filter outlined> Snowy Rock Place </v-chip>
        <v-chip filter outlined> Honeylane Circle </v-chip>
        <v-chip filter outlined> Donna Drive </v-chip>
        <v-chip filter outlined> Elaine Street </v-chip>
        <v-chip filter outlined> Court Street </v-chip>
        <v-chip filter outlined> Kennedy Park </v-chip>
      </v-chip-group>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    selectedPrice: 0,
    priceList: [
      { txt: 'any price', min: '', max: '' },
      { txt: 'up to 10EGP', min: 0, max: 10 },
      { txt: '10EGP to 25EGP', min: 10, max: 25 },
      { txt: '25EGP to 50EGP', min: 25, max: 50 },
      { txt: '50EGP to 100EGP', min: 50, max: 100 },
      { txt: '100EGP & above', min: 100, max: '' },
    ],
    filter: {
      min: '',
      max: '',
    },
    neighborhoods: [1],
  }),
  methods: {
    updateFilter() {
      this.$emit('setFilter', this.filter)
    },
  },
  watch: {
    selectedPrice(val) {
      const item = this.priceList[val]
      this.filter.min = item.min
      this.filter.max = item.max
      this.updateFilter()
    },
  },
}
</script>
