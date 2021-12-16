<template>
  <v-dialog
    :value="product"
    @input="clear"
    v-if="!$vuetify.breakpoint.xs"
    content-class="popImage"
  >
    <v-card v-if="product" color="transparent" flat max-height="100%">
      <v-row>
        <v-col cols="12" class="px-1">
          <v-img
            class="mx-2"
            max-height="68vh"
            contain
            :src="$getUrl(product.images[selectedImage].full)"
          >
            <template v-slot:placeholder>
              <img-slot></img-slot>
            </template>
          </v-img>
        </v-col>
        <v-col cols="12" class="px-2 d-flex justify-center">
          <v-slide-group
            :show-arrows="product.images.length > 2"
            class="prodslide"
          >
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
              >
                <template v-slot:placeholder>
                  <img-slot></img-slot>
                </template>
              </v-img>
            </v-slide-item>
          </v-slide-group>
        </v-col>
      </v-row>
    </v-card>
  </v-dialog>
</template>

<script>
import imgSlot from './imgSlot.vue'
export default {
  components: { imgSlot },
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
.popImage.v-dialog {
  box-shadow: none;
}
</style>
