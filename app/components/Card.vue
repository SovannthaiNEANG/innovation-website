<template>
  <v-card
    class="mx-auto"
    max-width="344"
  >
    <v-img
      height="200px"
      src="/img/cardImg.jpg"
      cover
    ></v-img>

    <v-card-title class="text-md pb-1">
      Top western road trips
    </v-card-title>
    <v-card-subtitle class="py-0">
      April 20, 2025
    </v-card-subtitle>
    <v-card-text class="pt-1">
      Discover the most scenic and unforgettable road trips across the western regions, from coastal drives to mountain adventures.
    </v-card-text>
  </v-card>
</template>
<script setup>
  import { ref } from 'vue'

  const show = ref(false)
</script>