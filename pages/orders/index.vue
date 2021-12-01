<template>
  <v-simple-table>
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">order number</th>
          <th class="text-left">creation date</th>
        </tr>
      </thead>
      <tbody v-if="orders">
        <tr v-for="item in orders" :key="item.uuid">
          <td>
            <nuxt-link :to="`/orders/${item.uuid}`">{{ item.uuid }}</nuxt-link>
          </td>
          <td>{{ item.created_at }}</td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
</template>

<script>
export default {
  ssr: true,
  async fetch() {
    await this.$store.dispatch('order/getOrders')
  },

  computed: {
    orders() {
      return this.$store.getters['order/orders']
    },
  },
}
</script>
