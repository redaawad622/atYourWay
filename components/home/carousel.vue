<template>
  <v-carousel
    height="auto"
    style="max-height: 550px"
    hide-delimiter-background
    :hide-delimiters="$vuetify.breakpoint.xs"
    show-arrows-on-hover
  >
    <template v-slot:prev="{ on, attrs }">
      <v-btn
        color="#3333335c"
        v-bind="attrs"
        class="elevation-0 btnHover"
        tile
        width="80px"
        height="35px"
        v-on="on"
      >
        <v-icon>mdi-chevron-left</v-icon>
      </v-btn>
    </template>
    <template v-slot:next="{ on, attrs }">
      <v-btn
        tile
        color="#3333335c"
        v-bind="attrs"
        width="80px"
        height="35px"
        v-on="on"
        class="elevation-0 btnHover"
      >
        <v-icon>mdi-chevron-right</v-icon>
      </v-btn>
    </template>
    <v-carousel-item v-for="(slide, i) in carouselCollection" :key="i">
      <v-sheet height="100%">
        <v-row class="fill-height">
          <v-img
            eager
            :src="$getUrl(slide.url)"
            max-height="550px"
            max-width="100%"
          >
            <div
              class="cover-text d-flex flex-column"
              :class="{ right: slide.isRight }"
            >
              <span
                v-if="slide.title"
                class="
                  font-weight-bold
                  text-capitalize
                  secondary--text
                  text-title
                "
              >
                {{ slide.title }}
              </span>
              <span
                v-if="slide.legend"
                class="
                  font-weight-bold
                  text-capitalize
                  secondary--text
                  text-title
                "
              >
                {{ slide.legend }}
              </span>
              <p
                v-if="slide.description"
                class="textGrey--text"
                :class="{ headline: $vuetify.breakpoint.mdAndUp }"
              >
                {{ slide.description }}
              </p>
              <v-btn
                class="btnHoverSecondary elevation-0 text-capitalize"
                :class="{
                  'px-10': $vuetify.breakpoint.mdAndUp,
                  'px-3 caption py-1': $vuetify.breakpoint.mobile,
                }"
                tile
                max-width="166px"
                color="primary"
                v-if="slide.product"
                :to="`/product/${slide.product.slug}`"
                >Shop now</v-btn
              >
            </div>
          </v-img>
        </v-row>
      </v-sheet>
    </v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  async fetch() {
    await this.$store.dispatch('home/getCarouselCollection')
  },
  fetchOnServer: false,
  computed: {
    carouselCollection() {
      return this.$store.getters['home/carouselCollection']
    },
  },
}
</script>
<style lang="scss">
.v-window__prev,
.v-window__next {
  margin: 0;
  background: transparent;
}
.btnHover:hover {
  background-color: var(--v-primary-base) !important;
}
.btnHoverSecondary:hover {
  background-color: var(--v-secondary-base) !important;
}
.cover-text {
  position: absolute;
  right: 50%;
  top: 20%;
  text-align: right;
  align-items: flex-end;
  span.text-title {
    font-size: 50px;
    line-height: normal;
  }
}
.cover-text.right {
  position: absolute;
  left: 50%;
  top: 20%;
  right: auto;
  text-align: left;
  align-items: flex-start;
}
@media all and (max-width: 800px) {
  .cover-text {
    span.text-title {
      font-size: 20px;
    }
    p {
      font-size: 16px;
      margin-bottom: 1px;
    }
  }
}
@media all and (max-width: 600px) {
  .cover-text {
    top: 10%;
    span.text-title {
      font-size: 16px;
    }
    p {
      font-size: 12px;
      margin-bottom: 1px;
    }
  }
}

.v-carousel__controls__item.v-btn.v-btn--icon.v-btn--round {
  width: 10px;
  height: 10px;
}
.v-carousel__controls__item.v-btn.v-btn--icon.v-btn--round .v-icon {
  font-size: 11px !important;
  color: #bbb;
}
.v-carousel__controls__item.v-item--active.v-btn.v-btn--icon.v-btn--round
  .v-icon {
  color: var(--v-primary-base) !important;
}
</style>
