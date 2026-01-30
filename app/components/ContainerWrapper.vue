<template>
  <v-row class="justify-center pa-2 px-3">
    <v-col cols="12" lg="9" sm="10" :class="[additionalClass]">
      <slot />
    </v-col>
  </v-row>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ContainerWrapper',
  props: {
    bgColor: {
      type: String,
      default: 'transparent'
    },
    additionalClass: {
      required: false,
      type: String,
      default: ''
    }
  }
});
</script>
