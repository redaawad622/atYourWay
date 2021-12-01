<template>
  <v-stepper-content step="2">
    <v-card flat>
      <v-form>
        <v-text-field
          outlined
          dense
          v-model="form.address"
          label="Address"
          :error-messages="serverErr['address']"
        ></v-text-field>
        <v-text-field
          outlined
          dense
          v-model="form.city"
          label="City"
          :error-messages="serverErr['city']"
        ></v-text-field>

        <v-autocomplete
          outlined
          dense
          v-model="form.state"
          label="State"
          :error-messages="serverErr['state']"
          :items="states"
          item-text="name"
          item-value="name"
        ></v-autocomplete>
        <v-autocomplete
          outlined
          dense
          autocomplete="off"
          :items="countries"
          v-model="form.country"
          label="Country"
          auto-select-first
          :error-messages="serverErr['country']"
        ></v-autocomplete>
        <v-text-field
          outlined
          dense
          v-model.number="form.postal"
          label="Zip/Postal Code"
          type="number"
          :error-messages="serverErr['postal']"
        ></v-text-field>
        <v-text-field
          outlined
          dense
          v-model="form.phone"
          label="phone number"
          type="number"
          :error-messages="serverErr['phone']"
        ></v-text-field>
      </v-form>
    </v-card>
    <v-btn color="primary" @click="setAddress()" :loading="loading">
      Continue
    </v-btn>
    <v-btn text @click="$emit('set', 1)" :disabled="loading"> Back </v-btn>
  </v-stepper-content>
</template>

<script>
export default {
  data() {
    return {
      form: {
        address: '',
        city: '',
        state: '',
        country: '',
        postal: '',
        phone: '',
      },
      loading: false,
      serverErr: [],
    }
  },
  computed: {
    countries() {
      return this.$store.getters['checkout/countries']
    },
    states() {
      return this.$store.getters['checkout/states']
    },
  },
  methods: {
    getCheckoutData() {
      return this.$store.dispatch('checkout/getCheckoutData')
    },
    setAddress() {
      this.loading = true
      this.$store
        .dispatch('checkout/setAddress', this.form)
        .then(() => {
          this.getCheckoutData().finally(() => {
            this.loading = false
            this.$emit('set', 3)
          })
        })
        .catch((rej) => {
          this.loading = false
          if (rej.response.status === 422)
            this.serverErr = rej.response.data.errors
        })
    },
    getCountries() {
      this.$store.dispatch('checkout/getCountries').then(() => {
        if (this.countries.length > 0) {
          this.form.country = this.countries[0]
        }
        if (this.$auth.user.address) {
          const address = this.$auth.user.address
          this.form = {
            address: address.address,
            city: address.city,
            state: address.state,
            country: address.country,
            postal: address.postal,
            phone: address.phone,
          }
        }
      })
    },
  },
  created() {
    this.getCountries()
  },
  watch: {
    'form.country'(val) {
      this.$store.dispatch('checkout/getState', val)
    },
    'form.state'(val) {
      this.$emit(
        'ship',
        this.states[this.states.findIndex((e) => e.name === val)]
      )
    },
  },
}
</script>
