<template>
  <v-card flat width="100%" height="100%" :to="`/categories/${cat.slug}`">
    <v-img
      max-height="100%"
      aspect-ratio="2"
      class="align-center"
      :src="$getUrl(cat.image)"
    >
      <v-card-text>
        <v-card-title class="text-uppercase secondary--text font-weight-bold">{{
          cat.name
        }}</v-card-title>
        <v-card-subtitle
          class="text-capitalize secondary--text font-weight-normal"
          v-if="cat.description"
          >{{ cat.description }}
        </v-card-subtitle>
        <v-btn text color="primary" small class="text-capitalize"> Shop now</v-btn>
      </v-card-text>
    </v-img>
  </v-card>
</template>

<script>
export default {
  props: {
    cat: {
      type: Object,
      require: true,
    },
  },
}
</script>
