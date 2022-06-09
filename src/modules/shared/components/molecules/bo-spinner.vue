<template>
  <div class="bo-spinner"></div>
</template>

<script lang="ts">
import Vue from 'vue';

import Component from 'nuxt-class-component';

@Component
export default class BoSpinner extends Vue {}
</script>

<style lang="scss" scoped>
.bo-spinner {
  border: 4px solid rgba(0, 0, 0, 0.1);
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border-left-color: $color-secondary;

  animation: spin 1s ease infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}
</style>
