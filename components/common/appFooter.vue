<template>
  <v-footer class="pa-0">
    <v-sheet :color="'back'" class="py-8" width="100%">
      <v-container>
        <v-row>
          <v-col cols="12" md="3">
            <v-expansion-panels
              flat
              :value="$vuetify.breakpoint.mdAndUp ? 0 : ''"
              :disabled="$vuetify.breakpoint.mdAndUp"
            >
              <v-expansion-panel class="transparent">
                <v-expansion-panel-header
                  :class="{
                    'pa-0 exBorder': $vuetify.breakpoint.mdAndUp,
                  }"
                >
                  <p class="headline secondary--text mb-1">Store information</p>
                </v-expansion-panel-header>
                <v-expansion-panel-content
                  :class="{ 'pa-0': $vuetify.breakpoint.mdAndUp }"
                >
                  <v-sheet color="transparent my-3">
                    <div class="d-flex mb-2 footerListItem">
                      <v-icon color="primary" class="me-3"
                        >mdi-map-marker-outline</v-icon
                      >
                      <span class="itemValue">
                        45 Grand Central Terminal New York,NY 1017 United State
                        USA</span
                      >
                    </div>
                    <div class="d-flex mb-2 footerListItem">
                      <v-icon color="primary" class="me-3"
                        >mdi-phone-outline</v-icon
                      >
                      <a href="tel:(+123) 456 789" class="itemValue">
                        Call us: (+123) 456 789</a
                      >
                    </div>
                    <div class="d-flex mb-2 footerListItem">
                      <v-icon color="primary" class="me-3"
                        >mdi-email-outline</v-icon
                      >
                      <a href="mailto:demo@demo.com" class="itemValue">
                        Email us: demo@demo.com</a
                      >
                    </div>
                  </v-sheet>
                </v-expansion-panel-content>
              </v-expansion-panel>
            </v-expansion-panels>
          </v-col>
          <v-col cols="12" md="3">
            <v-expansion-panels
              flat
              :value="$vuetify.breakpoint.mdAndUp ? 0 : ''"
              :disabled="$vuetify.breakpoint.mdAndUp"
            >
              <v-expansion-panel class="transparent">
                <v-expansion-panel-header
                  :class="{
                    'pa-0 exBorder': $vuetify.breakpoint.mdAndUp,
                  }"
                >
                  <p class="headline secondary--text mb-1">Products</p>
                </v-expansion-panel-header>
                <v-expansion-panel-content
                  :class="{ 'pa-0': $vuetify.breakpoint.mdAndUp }"
                >
                  <v-sheet color="transparent my-3">
                    <div class="d-flex mb-2 footerListItem">
                      <nuxt-link
                        to="/products/productlist?type=newProducts&description=new products"
                        class="itemValue"
                      >
                        New products</nuxt-link
                      >
                    </div>
                    <div class="d-flex mb-2 footerListItem">
                      <nuxt-link to="/newProducts" class="itemValue">
                        Contact us</nuxt-link
                      >
                    </div>
                  </v-sheet>
                </v-expansion-panel-content>
              </v-expansion-panel>
            </v-expansion-panels>
          </v-col>

          <v-col cols="12" md="3">
            <v-expansion-panels
              flat
              :value="$vuetify.breakpoint.mdAndUp ? 0 : ''"
              :disabled="$vuetify.breakpoint.mdAndUp"
            >
              <v-expansion-panel class="transparent">
                <v-expansion-panel-header
                  :class="{
                    'pa-0 exBorder': $vuetify.breakpoint.mdAndUp,
                  }"
                >
                  <p class="headline secondary--text mb-1">Our company</p>
                </v-expansion-panel-header>
                <v-expansion-panel-content
                  :class="{ 'pa-0': $vuetify.breakpoint.mdAndUp }"
                >
                  <v-sheet color="transparent my-3">
                    <div class="d-flex mb-2 footerListItem">
                      <nuxt-link to="/newProducts" class="itemValue">
                        Terms and conditions of use</nuxt-link
                      >
                    </div>
                    <div class="d-flex mb-2 footerListItem">
                      <nuxt-link to="/newProducts" class="itemValue">
                        About us</nuxt-link
                      >
                    </div>
                  </v-sheet>
                </v-expansion-panel-content>
              </v-expansion-panel>
            </v-expansion-panels>
          </v-col>

          <v-col cols="12" md="3">
            <v-expansion-panels
              flat
              :value="$vuetify.breakpoint.mdAndUp ? 0 : ''"
              :disabled="$vuetify.breakpoint.mdAndUp"
            >
              <v-expansion-panel class="transparent">
                <v-expansion-panel-header
                  :class="{
                    'pa-0 exBorder': $vuetify.breakpoint.mdAndUp,
                  }"
                >
                  <p class="headline secondary--text mb-1">Your account</p>
                </v-expansion-panel-header>
                <v-expansion-panel-content
                  :class="{ 'pa-0': $vuetify.breakpoint.mdAndUp }"
                >
                  <v-sheet color="transparent my-3">
                    <div class="d-flex mb-2 footerListItem">
                      <nuxt-link to="/newProducts" class="itemValue">
                        Personal info</nuxt-link
                      >
                    </div>
                    <div class="d-flex mb-2 footerListItem">
                      <nuxt-link to="/orders" class="itemValue">
                        Orders</nuxt-link
                      >
                    </div>
                    <div class="d-flex mb-2 footerListItem">
                      <nuxt-link
                        to="/products/productlist?type=wishlist&description=your wishlist"
                        class="itemValue"
                      >
                        My wishlists</nuxt-link
                      >
                    </div>
                  </v-sheet>
                </v-expansion-panel-content>
              </v-expansion-panel>
            </v-expansion-panels>
          </v-col>
        </v-row>
      </v-container>
    </v-sheet>
  </v-footer>
</template>

<script>
export default {}
</script>
<style lang="scss" scoped>
.footerListItem {
  .itemValue {
    color: #333;
    text-decoration: none;
    &:hover {
      color: var(--v-primary-base);
    }
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
