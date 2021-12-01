<template>
  <v-stepper-content step="3">
    <v-card flat>
      <v-list two-line flat>
        <v-list-item-group v-model="method">
          <v-list-item>
            <template v-slot:default="{ active }">
              <v-list-item-action class="listAction">
                <v-checkbox :input-value="active" color="primary"></v-checkbox>
              </v-list-item-action>

              <v-list-item-content>
                <v-list-item-title class="stronge"
                  >Door Delivery.</v-list-item-title
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
              </v-list-item-content>
            </template>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-card>
    <v-btn
      color="primary"
      @click="$emit('set', 4)"
      v-if="method || method == 0"
    >
      Continue
    </v-btn>

    <v-btn text @click="$emit('set', 2)" :disabled="loading"> Back </v-btn>
  </v-stepper-content>
</template>

<script>
export default {
  props: ['shipping'],
  data() {
    return {
      method: 0,
      loading: false,
    }
  },
}
</script>
<style scoped>
.listAction.v-list-item__action {
  align-self: flex-start;
}
</style>
