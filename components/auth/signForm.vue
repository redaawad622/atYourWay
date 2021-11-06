<template>
  <v-form>
    <v-text-field
      outlined
      dense
      v-model="name"
      :error-messages="serverErr['name']"
      label="Your name"
    ></v-text-field>
    <v-text-field
      outlined
      dense
      v-model="email"
      :error-messages="serverErr['email']"
      type="email"
      label="Email"
    ></v-text-field>

    <v-text-field
      :error-messages="serverErr['phone_number']"
      outlined
      dense
      v-model="phone"
      label="Phone"
    ></v-text-field>
    <v-text-field
      outlined
      :type="show ? 'text' : 'password'"
      append-icon="mdi-eye"
      @click:append="show = !show"
      dense
      :error-messages="serverErr['password']"
      v-model="password"
      label="Password"
    ></v-text-field>
  </v-form>
</template>

<script>
export default {
  props: {
    serverErr: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      show: false,
    }
  },
  computed: {
    signUpForm() {
      return this.$store.getters['authUser/signUpForm']
    },
    email: {
      get() {
        return this.signUpForm.email
      },
      set($val) {
        this.$store.commit('authUser/setSignUpForm', {
          name: 'email',
          value: $val,
        })
      },
    },
    phone: {
      get() {
        return this.signUpForm.phone_nmber
      },
      set($val) {
        this.$store.commit('authUser/setSignUpForm', {
          name: 'phone_number',
          value: $val,
        })
      },
    },
    password: {
      get() {
        return this.signUpForm.password
      },
      set($val) {
        this.$store.commit('authUser/setSignUpForm', {
          name: 'password',
          value: $val,
        })
      },
    },
    name: {
      get() {
        return this.signUpForm.name
      },
      set($val) {
        this.$store.commit('authUser/setSignUpForm', {
          name: 'name',
          value: $val,
        })
      },
    },
  },
}
</script>
