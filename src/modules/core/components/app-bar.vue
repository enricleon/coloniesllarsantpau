<template>
  <section class="app-bar">
    <span class="font-titles"><slot></slot></span>
    <span class="font-titles"><slot></slot></span>
    <span class="font-titles"><slot></slot></span>
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
  justify-content: center;
  gap: 1rem;

  position: sticky;
  top: 0;

  .font-titles {
    font-weight: 400;
    font-size: 4rem;
    font-style: italic;

    color: var(--color-secondary);

    &:not(:first-child):not(:last-child) {
      font-style: initial;
      color: white;
    }
  }
}
</style>
