<template>
  <section class="app-bar">
    <div class="left">
      <slot name="left"></slot>
    </div>
    <div class="right">
      <slot name="right"></slot>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'nuxt-class-component';

@Component({})
export default class AppBar extends Vue {}
</script>

<style lang="scss" scoped>
.app-bar {
  height: 80px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 3rem;

  position: sticky;
  top: 0;
  z-index: 401;
  filter: drop-shadow(0px 0px 1px $gray-lighter);
  background-color: $gray-lightest;
}
</style>
