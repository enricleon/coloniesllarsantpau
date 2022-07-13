<template>
  <section class="app-bar">
    <div class="app-bar__line"></div>
    <div class="app-bar__content">
      <h6 class="font-titles"><slot></slot></h6>
      <h6 class="font-titles"><slot></slot></h6>
      <h6 class="font-titles"><slot></slot></h6>
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
  justify-content: center;
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
