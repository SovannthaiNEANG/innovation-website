<script setup lang="ts">
</script>
<template>
  <v-footer class="footer">
    <ContainerWrapper class="text-center">
      <div class="footer-content">
        <img src="/img/footter.svg" alt="" width="100" />
        <span class="text-subtitle text-xs">| © 2026 Innovation. All rights reserved.</span>
      </div>
    </ContainerWrapper>
  </v-footer>
</template>

<style scoped>
.footer {
  background: transparent;
  color: rgba(255, 255, 255, 0.6);
  position: fixed;
  bottom: 0;
  width: 100%;
  z-index: 2;
}

.footer-content {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
}

.footer-content img {
  display: block;
}
</style>
