<template>
  <h1 class="hero-title text-xxl text-white">
    {{ title }}
  </h1>

  <p class="hero-desc text-md text-white">
    {{ description }}
  </p>

  <v-btn rounded class="text-none text-md" size="large" color="white" variant="flat">
    {{ btnText }}
  </v-btn>
</template>
<script lang="ts">
export default {
  name: 'MainTitle',
  props: {
    title: {
      type: String,
      default: 'Innovation at Every Layer.'
    },
    description: {
      type: String,
      default: 'Innovation should exist in every part of the business to make it grow effectively and efficiently.'
    },
    btnText: {
      type: String,
      default: 'View Our Projects'
    }
  }
};
</script>
<style lang="scss" scoped>
  .hero-title {
    font-size: 42px;
    font-weight: 600;
  }

  .hero-desc {
    max-width: 420px;
    margin: 16px 0 32px;
    opacity: 0.7;
  }

  .stats h2 {
    font-size: 28px;
  }

  .stats span {
    font-size: 14px;
    opacity: 0.8;
  }
</style>