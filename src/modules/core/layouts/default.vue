<template>
  <main class="main theme-llarsantpau" :class="responsiveClass">
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
  get navigationItems() {
    return [
      {
        name: this.$t('menu.thehouse'),
        url: '/lacasa',
      },
      {
        name: this.$t('menu.services'),
        url: '/serveis',
      },
      {
        name: this.$t('menu.trekking'),
        url: '/excursions',
      },
      {
        name: '',
        url: '/',
        imageUrl: '/logo/logo-inverted.svg',
      },
      {
        name: this.$t('menu.photos'),
        url: '/fotos',
      },
      {
        name: this.$t('menu.collaborators'),
        url: '/collaboradors',
      },
      {
        name: this.$t('menu.contact'),
        url: '/contacte',
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

  .copyright {
    display: flex;
    justify-content: flex-end;
    gap: 1rem;

    .separator {
      color: $gray-base;
    }

    a:hover {
      color: $color-secondary;
    }
  }
}
</style>
