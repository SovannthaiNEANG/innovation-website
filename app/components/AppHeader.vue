<template>
  <v-app-bar
    color="transparent"
    flat
    class="app-header"
  >
    <v-container class="d-flex align-center">
      <!-- Logo -->
      <div class="logo d-flex align-center">
        <v-icon size="28">mdi-cube-outline</v-icon>
        <span class="ml-2 font-weight-bold">Innovation</span>
      </div>

      <v-spacer />

      <!-- Desktop -->
      <div class="d-none d-md-flex">
        <v-btn v-for="item in menus" class="text-none" :key="item" variant="text" color="white">
          {{ item }}
        </v-btn>
        <v-btn class="ml-4" rounded color="white" variant="flat">
          Sign In
        </v-btn>
      </div>

      <!-- Mobile -->
      <v-btn icon class="d-md-none" @click="drawer = true">
        <v-icon>mdi-menu</v-icon>
      </v-btn>
    </v-container>
  </v-app-bar>
</template>


<script setup>
import { ref } from 'vue'

const drawer = ref(false)
const menus = ['Projects', 'Milestones', 'Blogs', 'About Us']
</script>

<style scoped lang="scss">
.app-header {
  background-color: transparent !important;
  color: white;
  position: fixed;
}

// .app-header :deep(.v-toolbar__content) {
//   background-color: transparent !important;
//   background: transparent !important;
// }

// .app-header :deep(.v-app-bar) {
//   background-color: transparent !important;
//   background: transparent !important;
// }

.logo {
  color: white;
}
</style>
