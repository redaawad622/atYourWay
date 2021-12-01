<template>
  <v-card color="transparent" flat class="mb-12" height="800px">
    <v-list two-line flat>
      <v-list-item-group v-model="method">
        <v-list-item
          v-for="item in settingData.payments"
          :key="item.id + item.code"
        >
          <template v-slot:default="{ active }">
            <v-list-item-action class="listAction">
              <v-checkbox :input-value="active" color="primary"></v-checkbox>
            </v-list-item-action>

            <v-list-item-content>
              <v-list-item-title class="stronge"
                >{{ item.name }}.</v-list-item-title
              >
              <v-list-item-subtitle
                >Delivered for
                <span class="primary--text">
                  {{ shipping }} EGP</span
                ></v-list-item-subtitle
              >
              <p class="mt-4"></p>
              <v-alert
                border="bottom"
                color="secondary"
                class="subtitle-1"
                colored-border
                type="info"
              >
                *Please make sure you have entered your home address, not your
                office one, so that we can deliver your order successfully
              </v-alert>
              <iframe
                v-if="token && item.code == 'paymob'"
                title="payment"
                :src="token"
                style="width: 100%; height: 100%; border: none"
              ></iframe>
            </v-list-item-content>
          </template>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-card>
</template>

<script>
export default {
  props: ['step'],
  computed: {
    token() {
      return this.$store.getters['product/token']
    },
    settingData() {
      return this.$store.getters['checkout/settingData']
    },
  },
  data(){
    return{
      method:0
    }
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
<style>
iframe html {
  background-color: #fff;
}
</style>
