<template>
  <v-sheet class="py-8" :color="products && products.length > 0 ? '' : 'back'">
    <v-container>
      <v-row>
        <v-col cols="12" md="6">
          <v-expansion-panels
            flat
            :value="$vuetify.breakpoint.mdAndUp ? 0 : ''"
            :disabled="$vuetify.breakpoint.mdAndUp"
          >
            <v-expansion-panel class="transparent">
              <v-expansion-panel-header
                :class="{
                  'pa-0 text-center exBorder': $vuetify.breakpoint.mdAndUp,
                }"
              >
                <p class="display-1 secondary--text font-weight-bold">
                  Join us
                </p>
              </v-expansion-panel-header>
              <v-expansion-panel-content
                :class="{ 'pa-0 text-center': $vuetify.breakpoint.mdAndUp }"
              >
                <p class="textGrey--text mt-4 text-center">
                  Sign up and get your next order.
                </p>
                <v-sheet class="d-flex" color="transparent">
                  <v-text-field
                    outlined
                    flat
                    color="primary"
                    class="rounded-0"
                    height="44px"
                    dense
                    label="your email or phone"
                  ></v-text-field
                  ><v-btn
                    tile
                    width="120px"
                    color="primary"
                    height="44px"
                    elevation="0"
                    >Sign Up</v-btn
                  >
                </v-sheet>
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-col>
        <v-col cols="12" md="6">
          <v-expansion-panels
            flat
            :value="$vuetify.breakpoint.mdAndUp ? 0 : ''"
            :disabled="$vuetify.breakpoint.mdAndUp"
          >
            <v-expansion-panel class="transparent">
              <v-expansion-panel-header
                :class="{
                  'pa-0 text-center exBorder': $vuetify.breakpoint.mdAndUp,
                }"
              >
                <p class="display-1 secondary--text font-weight-bold">
                  Follow us
                </p>
              </v-expansion-panel-header>
              <v-expansion-panel-content
                :class="{ 'pa-0 text-center': $vuetify.breakpoint.mdAndUp }"
              >
                <p class="textGrey--text mt-4 text-center">
                  Follow Us On Social Network.
                </p>
                <v-sheet
                  color="transparent"
                  class="d-flex flex-wrap justify-center"
                >
                  <v-btn
                    icon
                    v-for="(network, i) in networks"
                    :key="i + 'network'"
                    :href="network.link"
                    class="btnNetwork ms-3"
                    color="textGrey"
                    outlined
                    _blanck
                    ><v-icon>{{ network.icon }}</v-icon></v-btn
                  >
                </v-sheet>
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-col>
      </v-row>
    </v-container>
  </v-sheet>
</template>

<script>
export default {
  computed: {
    products() {
      return this.$store.getters['home/sliderProducts']
    },
  },
  data() {
    return {
      networks: [
        {
          icon: 'mdi-facebook',
          link: 'facebook.com',
        },
        {
          icon: 'mdi-twitter',
          link: 'twitter.com',
        },
        {
          icon: 'mdi-instagram',
          link: 'instagram.com',
        },
        {
          icon: 'mdi-youtube',
          link: 'youtube.com',
        },
      ],
    }
  },
}
</script>
<style scoped lang="scss">
.btnNetwork:hover {
  border-color: var(--v-primary-base) !important;
  .v-icon {
    color: var(--v-primary-base) !important;
  }
}
</style>
<style>
.v-expansion-panel-header {
  border-bottom: 1px solid var(--v-borderColor-base);
  padding: 0;
}
.v-expansion-panel-content__wrap {
  padding: 0;
}
</style>
