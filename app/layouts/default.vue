<template>
  <AppHeader />
  <div class="background-color-page">
    <slot />
  </div>
  <AppFooter />
</template>

<script setup>
import AppHeader from '@/components/AppHeader.vue'
import AppFooter from '@/components/AppFooter.vue'
</script>
<style lang="scss">
  // .background-color-page {
  //   background: radial-gradient(circle at bottom right, #502D9B, #000312);
  // }
</style>
