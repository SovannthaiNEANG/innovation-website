<template>
  <AppHeader />
  <div>
    <slot />
  </div>
  <AppFooter />
</template>

<script setup>
import AppHeader from '@/components/AppHeader.vue'
import AppFooter from '@/components/AppFooter.vue'
</script>
