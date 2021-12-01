<template>
  <v-simple-table>
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">Image</th>
          <th class="text-left">Name</th>
          <th class="text-left">Quantity</th>
          <th class="text-left">Details</th>
        </tr>
      </thead>
      <tbody v-if="order">
        <tr v-for="(item, k) in order.order.product" :key="item.name">
          <td>
            <v-list-item-avatar
              @click="$router.push(`/${item.slug}`)"
              tile
              max-width="150px"
              width="auto"
              height="auto"
            >
              <v-img
                v-if="item.images && item.images[0]"
                :src="$getUrl(item.images[0].full)"
              ></v-img>
            </v-list-item-avatar>
          </td>
          <td>
            <nuxt-link :to="`/${item.slug}`">{{ item.title }}</nuxt-link>
          </td>
          <td>{{ order.details[k].quantity }}</td>
          <td>
            <v-chip
              class="me-2"
              v-for="attr in order.details[k].details"
              :key="item.id + attr.value"
              >{{ attr.value }}</v-chip
            >
          </td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
</template>

<script>
export default {
  name: 'orderPage',
  ssr: true,
  async fetch() {
    await this.$store.dispatch('order/getOrder', this.$route.params.orderId)
  },
  destroyed() {
    this.$store.commit('order/setOrder', null)
  },
  computed: {
    order() {
      return this.$store.getters['order/order']
    },
  },
}
</script>
