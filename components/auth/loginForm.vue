<template>
  <v-form>
    <v-text-field
      outlined
      dense
      v-model="email"
      label="Email Or Phone"
    ></v-text-field>
    <v-text-field
      outlined
      :type="show ? 'text' : 'password'"
      append-icon="mdi-eye"
      @click:append="show = !show"
      dense
      v-model="password"
      label="Password"
    ></v-text-field>
  </v-form>
</template>

<script>
export default {
  computed: {
    loginForm() {
      return this.$store.getters['auth/loginForm']
    },
    email: {
      get() {
        return this.loginForm.email
      },
      set($val) {
        this.$store.commit('auth/setLoginForm', {
          name: 'email',
          value: $val,
        })
      },
    },
    password: {
      get() {
        return this.loginForm.password
      },
      set($val) {
        this.$store.commit('auth/setLoginForm', {
          name: 'password',
          value: $val,
        })
      },
    },
  },
  data() {
    return {
      show: false,
    }
  },
}
</script>
