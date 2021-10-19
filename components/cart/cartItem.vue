<template>
  <v-list-item>
    <v-list-item-avatar
      @click="$router.push(`/${item.product.slug}`)"
      tile
      max-width="150px"
      width="auto"
      height="auto"
    >
      <v-img :src="$getUrl(item.product.images[0].full)"></v-img>
    </v-list-item-avatar>
    <v-sheet class="d-flex justify-space-between max-flex flex-wrap">
      <v-sheet min-width="220px" class="pa-2 max-flex">
        <v-list-item-title
          class="cartItemTitle"
          @click="$router.push(`/${item.product.slug}`)"
          >{{ item.product.title }}</v-list-item-title
        >

        <v-list-item-subtitle
          v-if="discount"
          class="
            primary--text
            mb-2
            font-weight-bold
            subtitle-1
            d-flex
            align-center
          "
        >
          <span class="subtitle-2 grey--text me-3 text-decoration-line-through"
            >{{ price }} EGP
          </span>
          {{ $round(price - price * (discount / 100)) }} EGP
          <v-chip x-small color="primary ms-2">{{ discount }}%</v-chip>
        </v-list-item-subtitle>

        <v-list-item-subtitle v-else class="primary--text subtitle-1 mb-2"
          >{{ price }} EGP
        </v-list-item-subtitle>
        <div
          v-for="(attr, k) in item.attributes"
          :key="'attrView' + k + item.product.title"
        >
          <span class="subtitle-2">{{
            item.product.attributes[k][0].attribute.name
          }}</span
          >:
          <span class="textGrey--text subtitle-2">
            {{ searchAttr(attr, item.product.attributes[k]) }}</span
          >
        </div>
      </v-sheet>

      <v-sheet class="d-flex max-flex justify-space-between pa-2">
        <div>
          <v-text-field
            append-icon="mdi-plus"
            prepend-inner-icon="mdi-minus"
            v-model.number="quantity"
            hide-details
            height="40px"
            type="number"
            outlined
            style="flex: unset !important; border-radius: 0; width: 120px"
            dense
            class="inputPrice"
            @click:append="quantity++"
            @click:prepend-inner="quantity--"
          ></v-text-field>
          <span class="text-center font-weight-bold"
            >{{
              $round(price - price * (discount / 100)) * item.quantity
            }}
            EGP</span
          >
        </div>

        <v-btn @click="removeFromCart(k)" icon
          ><v-icon>mdi-close</v-icon></v-btn
        ></v-sheet
      >
    </v-sheet>
  </v-list-item>
</template>

<script>
export default {
  props: ['item', 'k'],
  computed: {
    quantity: {
      get() {
        return this.item.quantity
      },
      set($val) {
        this.$store.commit('product/updateQ', { index: this.k, val: $val })
      },
    },

    discount() {
      if (this.item.product.discount && this.item.product.startDate) {
        if (
          new Date().getTime() <
          this.getDeadLine(
            this.item.product.startDate,
            this.item.product.duration
          ).getTime()
        ) {
          return this.item.product.discount
        }
      }
      return this.item.product.permanentDiscount
    },
    price() {
      const ids = Object.keys(this.item.attributes).map((e) =>
        this.item.product.attributes[e].find(
          (n) => n.id === this.item.attributes[e]
        )
      )
      return Math.round(
        Object.values(ids).reduce(
          (a, i) => +i.price + a,
          +this.item.product.sale_price
        )
      )
    },
  },
  methods: {
    getDeadLine(startDate, duration) {
      return new Date(new Date(startDate + ' UTC').getTime() + duration * 60000)
    },
    searchAttr(id, arr) {
      return arr.find((sub) => sub.id === id).value
    },
    removeFromCart() {
      this.$store.commit('product/removeFromCart', this.k)
    },
  },
  watch: {
    quantity(val) {
      if (val < 1) {
        this.quantity = 1
      }
    },
  },
}
</script>
