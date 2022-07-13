<template>
  <section class="app-bar">
    <div class="app-bar__line"></div>
    <div v-if="!isSmallScreen" class="app-bar__content">
      <sp-text class="font-titles" :importance="4" size="md"><slot></slot></sp-text>
      <sp-text class="font-titles" :importance="4" size="md"><slot></slot></sp-text>
      <sp-text class="font-titles" :importance="4" size="md"><slot></slot></sp-text>
    </div>
    <div v-else class="app-bar__content">
      <sp-text class="font-titles" :importance="4" size="md"><slot></slot></sp-text>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue';
import Component, { mixins } from 'nuxt-class-component';
import ScreenSizes from '@/modules/core/mixins/screen-sizes';

@Component
export default class AppBar extends mixins(ScreenSizes) {}
</script>

<style lang="scss" scoped>
.app-bar {
  height: 80px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 1rem;
  margin-bottom: 1rem;
  gap: 1rem;

  &__line {
    position: absolute;
    width: 100%;
    border-bottom: 1px solid white;
  }

  &__content {
    background: var(--color-primary);
    padding: 0 2rem;
    display: flex;
    gap: 1rem;
    z-index: 1;
  }

  .font-titles {
    font-weight: 400;
    font-size: 3rem;
    font-style: italic;

    color: var(--color-secondary);

    &:not(:first-child):not(:last-child) {
      font-style: initial;
      color: white;
    }
  }
}
</style>
