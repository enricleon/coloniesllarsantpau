<template>
  <main
    class="main theme-llarsantpau"
    :class="`${responsiveClass} ${containerClass.map((classItem) => 'theme-llarsantpau--' + classItem).join(' ')}`"
  >
    <main-navigation v-slot="slotProps">
      <main-navigation-item
        v-for="item in navigationItems"
        :key="item.name"
        :item="item"
        @click="slotProps.closeNavigation"
      />
    </main-navigation>
    <section class="main-section">
      <nuxt />
      <footer class="footer">
        <section class="content links">
          <div class="links__item">
            <img class="footer-logo" src="/logo/logo-circle-text.png" />
          </div>
          <div class="links__item">
            <sp-text class="font-titles">Info</sp-text>
            <nuxt-link :to="{ path: 'fotos' }">
              <sp-text class="font-sans">Galeria de fotos</sp-text>
            </nuxt-link>
            <nuxt-link :to="{ path: 'lacasa' }">
              <sp-text class="font-sans">Descripció de la casa</sp-text>
            </nuxt-link>
          </div>
          <div class="links__item">
            <sp-text class="font-titles">Legal</sp-text>
            <nuxt-link :to="{ path: '' }">
              <sp-text class="font-sans">Avís Legal</sp-text>
            </nuxt-link>
            <nuxt-link :to="{ path: '' }">
              <sp-text class="font-sans">Política de cookies</sp-text>
            </nuxt-link>
          </div>
          <div class="links__item">
            <sp-text class="font-titles">Contacte</sp-text>
            <sp-text class="font-sans"
              ><a href="tel:654021143">654021143</a> / <a href="tel:972 721 270">972 721 270</a></sp-text
            >
            <sp-text class="font-sans"
              ><a href="mailto: info@coloniesllarsantpau.com">info@coloniesllarsantpau.com</a></sp-text
            >
          </div>
        </section>
        <section class="content copyright">
          <nuxt-link :to="{ path: '/' }">© 2021 LLAR SANT PAU</nuxt-link>
          <div class="social">
            <a href="/"><i class="ph-3x ph-instagram-logo"></i></a>
            <a href="/"><i class="ph-3x ph-linkedin-logo"></i></a>
          </div>
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
    console.log('Check this.$route.fullPath:');
    console.log(this.$route.fullPath);

    const navigationItem = this.navigationItems.find((item) => item.url === this.$route.fullPath);

    console.log('Check navigationItem?.containerClass');
    console.log(navigationItem?.containerClass);
    return navigationItem?.containerClass.split(' ') || [];
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
        imageUrl: 'logo/logo-inverted.svg',
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
  min-height: 100vh;

  .main-section {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    justify-content: space-between;
    min-height: 145vh;
  }

  &.desktop .main-section {
    padding-top: $main-navigation-height-desktop;
  }

  &.mobile .links {
    align-items: baseline;
    flex-direction: column;
  }

  .footer {
    display: flex;
    flex-direction: column;
    background-color: $brown-base;
    color: white;

    &-logo {
      max-width: 150px;
    }
  }

  .links {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;

    &__item {
      display: flex;
      flex-direction: column;
      justify-content: center;
      flex: 1;
      padding: 4rem;
      gap: 1rem;
    }
  }

  .copyright {
    display: flex;
    justify-content: space-between;
    gap: 1rem;
    border-top: 2px solid white;

    .separator {
      color: $gray-base;
    }

    .social {
    }

    a:hover {
      color: var(--color-secondary);
    }
  }
}
</style>
