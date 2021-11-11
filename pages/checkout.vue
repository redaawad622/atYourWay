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
              <v-card flat>
                <v-card-text v-if="$auth.loggedIn">
                  Connected as <strong>{{ $auth.user.name }}</strong>
                  <p>
                    Not you?
                    <v-btn
                      color="secondary"
                      class="font-weight-bold text-capitalize px-1"
                      plain
                      @click="logout()"
                      >Log out</v-btn
                    >
                  </p>
                </v-card-text>
                <v-card-text v-else>
                  <v-tabs v-model="infoTab" hide-slider>
                    <v-tab>Order as a guest</v-tab>
                    <v-tab>Sign in</v-tab>
                  </v-tabs>
                  <v-tabs-items v-model="infoTab">
                    <v-tab-item>
                      <v-card class="px-0" flat>
                        <v-card-text class="px-0">
                          <sign-form :serverErr="serverErr"></sign-form>
                        </v-card-text>
                      </v-card>
                    </v-tab-item>
                    <v-tab-item>
                      <v-card flat class="px-0">
                        <v-card-text class="px-0">
                          <login-form :serverErr="serverErr"></login-form>
                        </v-card-text>
                      </v-card>
                    </v-tab-item>
                  </v-tabs-items>
                </v-card-text>
              </v-card>
              <v-btn v-if="$auth.loggedIn" color="primary" @click="e6 = 2">
                Continue
              </v-btn>
              <template v-else>
                <v-btn
                  v-if="infoTab"
                  :loading="loginLoading"
                  color="primary"
                  @click="login()"
                >
                  Continue
                </v-btn>
                <v-btn
                  v-else
                  :loading="signLoading"
                  color="primary"
                  @click="signUp()"
                >
                  Continue
                </v-btn>
              </template>
            </v-stepper-content>

            <v-stepper-step :complete="e6 > 2" step="2">
              ADDRESSES
              <small
                >The selected address will be used both as your personal address
                (for invoice) and as your delivery address.</small
              >
            </v-stepper-step>
            <user-adress @set="setStep"></user-adress>

            <v-stepper-step :complete="e6 > 3" step="3">
              SHIPPING METHOD
            </v-stepper-step>

            <shipping @set="setStep"></shipping>

            <v-stepper-step step="4"> PAYMENTS </v-stepper-step>
            <v-stepper-content step="4">
              <payments :step="e6"></payments>
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
import LoginForm from '~/components/auth/loginForm.vue'
import SignForm from '~/components/auth/signForm.vue'
import CartTotalSection from '~/components/cart/cartTotalSection.vue'
import Payments from '~/components/checkout/payments.vue'
import Shipping from '~/components/checkout/shipping.vue'
import UserAdress from '~/components/checkout/userAdress.vue'
export default {
  name: 'checkout',
  auth: false,

  components: {
    CartTotalSection,
    LoginForm,
    SignForm,
    Payments,
    UserAdress,
    Shipping,
  },
  data() {
    return {
      loading: true,
      e6: 1,
      infoTab: 0,
      serverErr: [],
      loginLoading: false,
      signLoading: false,
    }
  },

  methods: {
    setStep(step) {
      this.e6 = step
    },
    logout() {
      this.$auth.logout()
    },
    login() {
      this.serverErr = []
      this.loginLoading = true

      return this.$store
        .dispatch('authUser/login')
        .then(() => {
          this.loginLoading = false
          this.e6 = 2
        })
        .catch((rej) => {
          if (rej.response.status === 422)
            this.serverErr = rej.response.data.errors

          this.loginLoading = false
        })
    },
    signUp() {
      this.serverErr = []
      this.signLoading = true

      return this.$store
        .dispatch('authUser/sign')
        .then(() => {
          this.signLoading = false
          this.e6 = 2
        })
        .catch((rej) => {
          this.signLoading = false
          if (rej.response.status === 422)
            this.serverErr = rej.response.data.errors
        })
    },
  },
}
</script>
