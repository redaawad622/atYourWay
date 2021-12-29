<template>
  <v-row justify="center" class="my-4 mx-3">
    <v-card max-width="500px" style="flex: 1" class="pa-6">
      <v-form>
        <v-text-field
          outlined
          dense
          v-model="form.name"
          label="Name"
          :error-messages="serverErr['name']"
        ></v-text-field>
        <v-text-field
          outlined
          dense
          v-model="form.email"
          label="Email"
          :error-messages="serverErr['email']"
        ></v-text-field>
        <v-text-field
          outlined
          dense
          v-model="form.phone"
          label="Phone"
          :error-messages="serverErr['phone']"
        ></v-text-field>
        <v-textarea
          outlined
          dense
          v-model="form.message"
          label="message"
          :error-messages="serverErr['message']"
        ></v-textarea>
        <v-btn
          color="primary"
          :loading="loading"
          @click="sendMessage()"
          class="text-capitalize"
          >Send</v-btn
        >
      </v-form>
    </v-card>
  </v-row>
</template>

<script>
export default {
  auth: false,
  data() {
    return {
      serverErr: [],
      form: {
        name: '',
        email: '',
        phone: '',
        message: '',
      },
      loading: false,
    }
  },
  methods: {
    sendMessage() {
      this.serverErr = []
      this.loading = true
      this.$store
        .dispatch('setting/saveContact', this.form)
        .then(() => {
          this.form = {
            name: '',
            email: '',
            phone: '',
            message: '',
          }
        })
        .catch((rej) => {
          if (rej.response.status === 422)
            this.serverErr = rej.response.data.errors
        })
        .finally(() => {
          this.loading = false
        })
    },
  },
}
</script>
