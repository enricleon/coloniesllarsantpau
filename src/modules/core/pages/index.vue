<template>
  <section class="content-wrapper">
    <!-- <app-bar></app-bar>
    <div class="content">
      <div class="homepage">En el core</div>
    </div> -->
    <hooper class="slider" :auto-play="true" :play-speed="5000" :wheel-control="false">
      <slide>
        <div class="slide">
          <h1 class="slide__title font-titles" :class="$mq">Llar Sant Pau</h1>
          <nuxt-img src="/photos/Llar_Sant_Pau_Exterior_Masia.jpg" />
        </div>
      </slide>
    </hooper>
    <div class="content">
      <section class="homepage">
        <div class="homepage__lacasa">
          <div class="homepage__lacasa-top">
            <p>
              La casa de colònies LLar Sant Pau és una antiga rectoria que es troba situada a les afores del poble de
              Sant Pau de Segúries.
            </p>
            <nuxt-img src="/photos/Llar_Sant_Pau_Menjador.jpg" />
          </div>
          <div class="homepage__lacasa-bottom">
            <nuxt-img src="/photos/Llar_Sant_Pau_Piscina.jpg" />
          </div>
          <div class="homepage__lacasa-top">
            <p>
              La Casa de Colònies Llar Sant Pau té una reputació contrastada en aquest sector. Durant molts anys ha
              acollit a escoles, casals i grups d’esplai, famílies… Oferim un tracte familiar i proper, així com una
              <span>cuina casolana amb productes de proximitat</span> i tenint en compte totes les opcions alimentàries.
            </p>
            <p>
              Tot això envoltats d’un marc natural incomparable, on podreu gaudir de la natura i de la gran quantitat
              d’activitats que ofereix la comarca del Ripollès.
            </p>
            <nuxt-img src="/photos/Llar_Sant_Pau_Sala_Segon_Pis.jpg" />
          </div>
        </div>
        <div class="homepage__onsom">
          <h2 class="font-section">On som?</h2>
          <nuxt-img src="/photos/map.png" />
        </div>
      </section>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue';
import Component, { Getter } from 'nuxt-class-component';

import { Hooper, Slide } from 'hooper'; // import slider components

@Component({
  components: {
    Hooper,
    Slide,
  },
})
export default class HomePage extends Vue {}
</script>

<style lang="scss" scoped>
.homepage {
  display: flex;
  flex-direction: column;

  &__lacasa {
    &-top {
    }
  }
}

.slider {
  height: auto;

  .slide {
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-height: 1150px;

    &__title {
      color: white;
      font-size: 4rem;
      position: absolute;
      width: 100%;
      display: flex;
      justify-content: center;

      &.sm {
        font-size: 6rem;
      }

      &.md {
        font-size: 8rem;
      }

      &.lg {
        font-size: 10rem;
      }

      &.xl {
        font-size: 12rem;
      }

      &.md,
      &.lg,
      &.xl {
        margin-top: 160px;
      }
    }
  }
}
</style>
