<template>
  <v-container>
    <v-row>
      <v-col cols="12" sm="12" md="8">
        <v-card>
          <v-stepper v-model="e6" vertical>
            <v-stepper-step :complete="e6 > 1" step="1">
              PERSONAL INFORMATION
              <small>enter your personal information </small>
            </v-stepper-step>

            <v-stepper-content step="1">
              <v-card
                color="grey lighten-1"
                class="mb-12"
                height="200px"
              ></v-card>
              <v-btn color="primary" @click="e6 = 2"> Continue </v-btn>
            </v-stepper-content>

            <v-stepper-step :complete="e6 > 2" step="2">
              ADDRESSES
              <small
                >The selected address will be used both as your personal address
                (for invoice) and as your delivery address.</small
              >
            </v-stepper-step>

            <v-stepper-content step="2">
              <v-card
                color="grey lighten-1"
                class="mb-12"
                height="200px"
              ></v-card>
              <v-btn color="primary" @click="e6 = 3"> Continue </v-btn>
              <v-btn text @click="e6 = 1"> Back </v-btn>
            </v-stepper-content>

            <v-stepper-step :complete="e6 > 3" step="3">
              SHIPPING METHOD
            </v-stepper-step>

            <v-stepper-content step="3">
              <v-card
                color="grey lighten-1"
                class="mb-12"
                height="200px"
              ></v-card>
              <v-btn color="primary" @click="e6 = 4"> Continue </v-btn>
              <v-btn text @click="e6 = 2"> Back </v-btn>
            </v-stepper-content>

            <v-stepper-step step="4"> PAYMENTS </v-stepper-step>
            <v-stepper-content step="4">
              <v-card
                color="grey lighten-1"
                class="mb-12"
                height="200px"
              ></v-card>
              <v-btn color="primary"> checkout </v-btn>
              <v-btn text @click="e6 = 3"> Back </v-btn>
            </v-stepper-content>
          </v-stepper>
        </v-card>
      </v-col>
      <v-col cols="12" sm="12" md="4">
        <cart-total-section></cart-total-section>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import CartTotalSection from '~/components/cart/cartTotalSection.vue'
export default {
  name: 'checkout',

  components: { CartTotalSection },
  data() {
    return {
      loading: true,
      e6: 1,
    }
  },

}
</script>
