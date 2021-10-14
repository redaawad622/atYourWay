<template>
  <v-dialog :value="product" @input="clear" v-if="!$vuetify.breakpoint.xs">
    <v-card v-if="product" color="transparent">
      <v-row>
        <v-col cols="12" class="px-1">
          <v-img
            height="auto"
            max-height="800px"
            class="mx-2"
            contain
            :src="$getUrl(product.images[selectedImage].full)"
          ></v-img>
        </v-col>
        <v-col cols="12" class="px-2">
          <v-slide-group :show-arrows="product.images.length > 2">
            <v-slide-item
              v-for="($img, k) in product.images"
              :key="'quickImage' + k"
            >
              <v-img
                :src="$getUrl($img.full)"
                class="mb-3 imageBorder mx-1"
                height="100px"
                max-width="80px"
                :class="{ selected: k == selectedImage }"
                @click="selectedImage = k"
              ></v-img>
            </v-slide-item>
          </v-slide-group>
        </v-col>
      </v-row>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: 'imagePop',
  computed: {
    product() {
      return this.$store.getters['product/selectedProduct']
    },
    selectedImage: {
      get() {
        return this.$store.getters['product/selectedImage']
      },
      set($val) {
        this.$store.commit('product/setSelectedImage', $val)
      },
    },
  },
  methods: {
    clear($v) {
      if ($v === false) {
        this.$store.commit('product/selectedProduct', null)
        this.selectedImage = 0
      }
    },
  },
}
</script>

<style>
.selected {
  opacity: 1;
  border: 1px solid var(--v-primary-base);
}
</style>
