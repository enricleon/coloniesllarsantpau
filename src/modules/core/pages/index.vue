<template>
  <section class="content-wrapper homepage">
    <hooper class="slider" :auto-play="true" :play-speed="5000" :wheel-control="false" :mouse-drag="false">
      <slide>
        <div class="slide">
          <sp-text class="slide__title font-titles fade-in-text" :importance="1" size="xxl">Llar Sant Pau</sp-text>
          <img class="fade-in-image" src="/photos/Llar_Sant_Pau_Exterior_Masia.webp" />
        </div>
      </slide>
    </hooper>
    <div class="content" :class="`content--${$mq}`">
      <section class="homepage__lacasa">
        <sp-text-article class="homepage__lacasa-first" highlight="right">
          <template #left>
            <p class="homepage__lacasa-first__text">
              La casa de colònies LLar Sant Pau és una antiga rectoria que es troba situada a les afores del poble de
              <strong>Sant Pau de Segúries.</strong>
            </p>
          </template>
          <template #right>
            <img src="/photos/Llar_Sant_Pau_Menjador.webp" />
          </template>
        </sp-text-article>
        <sp-text-article :gap="false" highlight="left">
          <template #left>
            <img src="/photos/Llar_Sant_Pau_Piscina.webp" />
          </template>
          <template #right>
            <div class="small-houses__wrapper">
              <div class="small-hosues">
                <img v-for="index in 10" :key="index" src="/logo/logo-without-circle.svg" />
              </div>
            </div>
          </template>
        </sp-text-article>
        <sp-text-article class="homepage__lacasa-last" highlight="right">
          <template #left>
            <div class="homepage__lacasa-last__text">
              <p>
                <span>La Casa de Colònies Llar Sant Pau té una reputació contrastada en aquest sector. </span>
                <span>Durant molts anys ha acollit a escoles, casals i grups d’esplai, famílies…</span>
                <span
                  >Oferim un tracte familiar i proper, així com una
                  <strong class="color-secondary">cuina casolana amb productes de proximitat</strong> i tenint en compte
                  totes les opcions alimentàries.</span
                >
              </p>
              <p>
                <span
                  >Tot això envoltats d’un marc natural incomparable, on podreu gaudir de la natura i de la gran
                  quantitat d’activitats que ofereix la comarca del Ripollès.</span
                >
              </p>
            </div>
          </template>
          <template #right>
            <img src="/photos/Llar_Sant_Pau_Entorns.webp" />
          </template>
        </sp-text-article>
        <h2>On som?</h2>
      </section>
    </div>
    <img src="/photos/map.png" />
  </section>
</template>

<script lang="ts">
import Vue, { VueConstructor } from 'vue';
import Component, { Getter, mixins } from 'nuxt-class-component';

import { Hooper, Slide } from 'hooper'; // import slider components
import ScreenSizes from '@/modules/core/mixins/screen-sizes';

@Component({
  components: {
    Hooper,
    Slide,
  },
})
export default class HomePage extends mixins(ScreenSizes) {}
</script>

<style lang="scss" scoped>
@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

.fade-in-image {
  animation: fadeIn 0.3s;
}
.fade-in-text {
  animation: fadeIn 0.6s;
}

.homepage {
  display: flex;
  flex-direction: column;
  background: var(--color-primary);
  color: white;
  margin-top: calc(($main-navigation-height-desktop + 1px) * -1);

  .mobile & {
    margin-top: initial;
  }

  &__lacasa {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-bottom: 2rem;

    &-last {
      &__text {
        display: flex;
        flex-direction: column;
        gap: 2rem;

        font-size: 1.5rem;
      }
    }

    .small-houses__wrapper {
      position: relative;
      flex: 1;
    }

    .small-hosues {
      display: none;
      flex-direction: row;
      align-items: flex-end;
      gap: 1rem;

      img {
        max-width: 60px;
        align-self: flex-end;
      }
    }

    .desktop & {
      &-first {
        margin-bottom: -5rem;
        z-index: 1;

        &__text {
          padding-bottom: 6rem;
        }
      }

      &-last {
        margin-top: 3rem;
      }

      .small-hosues {
        display: flex;
        position: absolute;
        bottom: 0;
        left: 1rem;
      }
    }
  }
}

.slider {
  height: 1500px;
  max-height: 66vw;

  .slide {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 1500px;
    max-height: 66vw;

    &__title {
      color: white;
      position: absolute;
      width: 100%;
      display: flex;
      justify-content: center;
      z-index: 1;

      .desktop & {
        margin-top: 160px;
      }
    }
  }
}
</style>
