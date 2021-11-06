<template>
  <v-card color="grey lighten-1" class="mb-12" height="400px">
    <iframe
      v-if="token"
      title="payment"
      :src="`https://accept.paymob.com/api/acceptance/iframes/309629?payment_token=${tokenEncode}`"
    ></iframe>
    <iframe  v-if="token" src="https://admin.atyourway.com"></iframe>
  </v-card>
</template>

<script>
export default {
  props: ['step'],
  computed: {
    token() {
      return this.$store.getters['product/token']
    },
    tokenEncode() {
      return encodeURI(this.token)
    },
  },
  methods: {
    getToken() {
      this.$store.dispatch('product/getToken')
    },
  },

  watch: {
    step(val) {
      if (this.$auth.loggedIn && val === 3) {
        this.getToken()
      }
    },
  },
}
</script>
