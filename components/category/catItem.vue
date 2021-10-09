<template>
  <v-card flat width="100%" height="100%" :to="`/categories/${cat.slug}`">
    <v-img width="100%" height="auto" max-height="100%" :src="$getUrl(cat.image)">
      <v-card-title class="text-uppercase secondary--text">{{
        cat.name
      }}</v-card-title>
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
