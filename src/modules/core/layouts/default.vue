<template>
  <main
    class="main theme-llarsantpau"
    :class="`${responsiveClass} ${$mq} ${containerClass
      .map((classItem) => 'theme-llarsantpau--' + classItem)
      .join(' ')}`"
  >
    <main-navigation>
      <main-navigation-item v-for="item in navigationItems" :key="item.name" :item="item" />
    </main-navigation>
    <section class="main-section">
      <nuxt />
      <footer>
        <section class="content copyright">
          <a href="https://www.llarsantpau.cat/">Llar Sant Pau</a>
          <span class="separator">|</span>
          <a href="https://www.llarsantpau.cat/privacy-policy/">Política de privacitat</a>
          <span class="separator">|</span>
          <span>© Copyright 2022</span>
        </section>
      </footer>
    </section>
  </main>
</template>
<script lang="ts">
import Vue from 'vue';
import Component, { mixins } from 'nuxt-class-component';
import ScreenSizes from '@/modules/core/mixins/screen-sizes';

@Component
export default class Default extends mixins(ScreenSizes) {
  get containerClass() {
    const navigationItem = this.navigationItems.find((item) => item.url === this.$route.fullPath);
    return navigationItem?.containerClass.split(' ');
  }

  get navigationItems() {
    return [
      {
        name: this.$t('menu.thehouse'),
        url: '/lacasa',
        containerClass: 'blue',
      },
      {
        name: this.$t('menu.services'),
        url: '/serveis',
        containerClass: 'red',
      },
      {
        name: this.$t('menu.trekking'),
        url: '/excursions',
        containerClass: 'green',
      },
      {
        name: '',
        url: '/',
        imageUrl: '/logo/logo-inverted.svg',
        containerClass: 'homepage blue',
      },
      {
        name: this.$t('menu.photos'),
        url: '/fotos',
        containerClass: 'yellow',
      },
      {
        name: this.$t('menu.collaborators'),
        url: '/collaboradors',
        containerClass: 'red',
      },
      {
        name: this.$t('menu.contact'),
        url: '/contacte',
        containerClass: 'yellow',
      },
    ];
  }
}
</script>
<style lang="scss" scoped>
.main {
  display: flex;
  flex-direction: column;
  height: 100vh;

  .main-section {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    justify-content: space-between;
  }

  &.desktop .main-section {
    padding-top: $main-navigation-height-desktop;
  }

  &.theme-llarsantpau--homepage.desktop {
    .main-section {
      padding-top: 0;
    }
  }

  .copyright {
    display: flex;
    justify-content: flex-end;
    gap: 1rem;

    .separator {
      color: $gray-base;
    }

    a:hover {
      color: var(--color-secondary);
    }
  }
}
</style>
