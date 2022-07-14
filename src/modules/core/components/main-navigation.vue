<template>
  <div>
    <div class="main-navigation">
      <i v-show="isSmallScreen" class="toggle-menu ph-xl ph-list" @click="toggleMenuVisibility()"></i>
      <section class="navigation-links font-medium" :class="{ expanded: isVisibleMobileMenu }">
        <i v-show="isVisibleMobileMenu" class="close-menu ph-3x ph-x" @click="toggleMenuVisibility()"></i>
        <slot :close-navigation="toggleMenuVisibility"></slot>
      </section>
    </div>
  </div>
</template>

<script lang="ts">
import Component, { mixins } from 'nuxt-class-component';

import ScreenSizes from '@/modules/core/mixins/screen-sizes';

@Component
export default class MainNavigation extends mixins(ScreenSizes) {
  public isVisibleMobileMenu: boolean = false;

  toggleMenuVisibility() {
    if (this.isSmallScreen) {
      this.isVisibleMobileMenu = !this.isVisibleMobileMenu;
    }
  }
}
</script>

<style lang="scss" scoped>
.main-navigation {
  position: absolute;
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  height: 10rem;
  z-index: 2;

  .mobile & {
    position: relative;
    height: 4rem;
    background: black;
    color: white;
    justify-content: start;

    .navigation-links {
      width: 0;
      flex-direction: column;
      height: auto;
      width: 100%;
      gap: 0;
      overflow: hidden;
      position: fixed;
      top: 0;
      height: 100vh;
      transition: right 0.5s;
      background: black;
      justify-content: center;
      right: 100%;

      &.expanded {
        right: 0;
      }
    }
  }

  .toggle-menu {
    padding: 20px;
    cursor: pointer;
  }

  .close-menu {
    position: absolute;
    z-index: 1;
    top: 20px;
    right: 20px;
    align-self: flex-end;
  }

  .navigation-links {
    display: flex;
    align-content: center;
    gap: 3rem;
    height: 70px;
  }
}
</style>
