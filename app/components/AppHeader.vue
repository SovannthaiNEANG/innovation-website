<template>
  <v-app-bar
    color="transparent"
    flat
    class="app-header py-6"
  >
    <ContainerWrapper>
      <div class="d-flex align-center">
        <!-- Logo -->
        <div class="logo d-flex align-center">
          <img src="/img/logo.png" alt="">
          <div class="d-flex flex-column ml-2">
            <span class="ml-2 font-weight-bold text-lg">Innovation</span>
            <span class="ml-2 text-white text-xs text-subtitle">Think outside the box</span>
          </div>
        </div>
        <v-spacer />
        <!-- Desktop -->
        <div class="d-none d-md-flex">
          <v-btn v-for="item in menus" class="text-none text-sm" :key="item" variant="text" color="white">
            {{ item }}
          </v-btn>
          <v-btn class="ml-4 text-none text-sm" rounded color="white" variant="flat">
            Sign In
          </v-btn>
        </div>
  
        <!-- Mobile -->
        <v-btn icon class="d-md-none" @click="drawer = true">
          <v-icon class="text-white">mdi-menu</v-icon>
        </v-btn>
      </div>
    </ContainerWrapper>
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

.logo {
  color: white;
}
</style>
