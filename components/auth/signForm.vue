<template>
  <v-form>
    <v-text-field
      outlined
      dense
      v-model="name"
      label="Your name"
    ></v-text-field>
    <v-text-field
      outlined
      dense
      v-model="email"
      type="email"
      label="Email"
    ></v-text-field>
    <v-text-field outlined dense v-model="phone" label="Phone"></v-text-field>
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
  data() {
    return {
      show: false,
      email: '',
      password: '',
      name: '',
      phone: '',
    }
  },
}
</script>
