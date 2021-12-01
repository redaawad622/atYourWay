<template>
  <v-container>
    <v-row justify="center">
      <v-card class="my-16" width="500px">
        <v-card-text class="pa-6">
          <sign-form :serverErr="serverErr" v-if="sign"></sign-form>
          <login-form :serverErr="serverErr" v-else></login-form>
          <v-row justify="center" class="mt-0">
            <v-btn
              v-if="sign"
              class="btnHoverSecondary"
              elevation="0"
              color="primary"
              tile
              :loading="signLoading"
              @click="signUp()"
              >Create
            </v-btn>
            <v-btn
              v-else
              class="btnHoverSecondary"
              elevation="0"
              color="primary"
              tile
              :loading="loginLoading"
              @click="login()"
              >Sign in
            </v-btn>
          </v-row>
        </v-card-text>
        <v-divider></v-divider>
        <v-row justify="center" class="pa-6">
          <span
            v-if="!sign"
            @click="sign = true"
            class="text-decoration-none textAsLink"
            >No account? <strong>Create one here</strong></span
          >
          <span
            v-else
            @click="sign = false"
            class="text-decoration-none textAsLink"
            >Already have an account? <strong>Log in instead!</strong>
          </span>
        </v-row>
      </v-card>
    </v-row>
  </v-container>
</template>

<script>
import loginForm from '~/components/auth/loginForm.vue'
import SignForm from '~/components/auth/signForm.vue'
export default {
  auth: 'guest',
  components: { loginForm, SignForm },
  data() {
    return {
      sign: false,
      loginLoading: false,
      signLoading: false,
      serverErr: [],
    }
  },
  methods: {
    login() {
      this.serverErr = []
      this.loginLoading = true

      this.$store
        .dispatch('authUser/login')
        .then(() => {
          this.loginLoading = false
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

      this.$store
        .dispatch('authUser/sign')
        .then(() => {
          this.signLoading = false
        })
        .catch((rej) => {
          this.signLoading = false
          if (rej.response.status === 422)
            this.serverErr = rej.response.data.errors
        })
    },
  },

  watch: {
    $route() {
      if (this.$route.query.sign) {
        this.sign = true
      } else {
        this.sign = false
      }
    },
  },
}
</script>
