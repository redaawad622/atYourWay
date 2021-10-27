<template>
  <v-form>
    <v-text-field
      outlined
      dense
      v-model="email"
      label="Email Or Phone"
      :error="serverErr['email']"
    ></v-text-field>
    <v-text-field
      outlined
      :type="show ? 'text' : 'password'"
      append-icon="mdi-eye"
      @click:append="show = !show"
      dense
      :error-messages="serverErr['email']"
      v-model="password"
      label="Password"
    ></v-text-field>
  </v-form>
</template>

<script>
export default {
  props: ['serverErr'],
  computed: {
    loginForm() {
      return this.$store.getters['authUser/loginForm']
    },
    email: {
      get() {
        return this.loginForm.email
      },
      set($val) {
        this.$store.commit('authUser/setLoginForm', {
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
        this.$store.commit('authUser/setLoginForm', {
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
