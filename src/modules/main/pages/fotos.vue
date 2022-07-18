<template>
  <section class="content-wrapper photos">
    <app-bar>Fotos</app-bar>
    <div class="content main" :class="`content--${$mq}`">
      <div class="photos__grid">
        <div v-for="item in photos" :key="item.name" class="photos__grid-item" :class="item.name">
          <img class="photos__grid-item__image" :src="item.src" />
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue';
import Component, { Action } from 'nuxt-class-component';
import { State, namespace } from 'vuex-class';

const Store = namespace('main');

@Component
export default class Photos extends Vue {
  @Store.Action
  public dummyAction!: () => Promise<void>;

  async fetch() {
    await this.loadData();
  }

  async loadData() {
    await Promise.all([this.dummyAction()]);
  }

  get photos() {
    return [
      {
        name: 'piscina',
        src: '/photos/Llar_Sant_Pau_Piscina.webp',
      },
      {
        name: 'polivalent2',
        src: '/photos/Llar_Sant_Pau_Sala_Segon_Pis.webp',
      },
      {
        name: 'casa',
        src: '/photos/Llar_Sant_Pau_Complex.webp',
      },
      {
        name: 'polivalent1',
        src: '/photos/Llar_Sant_Pau_Sala_Primer_Pis.webp',
      },
      {
        name: 'polivalentAnnexa',
        src: '/photos/Llar_Sant_Pau_Sala_Polivalent.webp',
      },
      {
        name: 'llits14',
        src: '/photos/Llar_Sant_Pau_Habitacio_14.webp',
      },
      {
        name: 'banysNois',
        src: '/photos/Llar_Sant_Pau_Banys_Nois.webp',
      },
      {
        name: 'banysNois2',
        src: '/photos/Llar_Sant_Pau_Banys_Nois_2.webp',
      },
      {
        name: 'banysNoies',
        src: '/photos/Llar_Sant_Pau_Banys_Noies.webp',
      },
      {
        name: 'multiesports',
        src: '/photos/Llar_Sant_Pau_Camp_Exterior.webp',
      },
      {
        name: 'banyInfermeria',
        src: '/photos/Llar_Sant_Pau_Bany_Infermeria.webp',
      },
      {
        name: 'piscina2',
        src: '/photos/Llar_Sant_Pau_Camp_piscina.webp',
      },
      {
        name: 'bany1',
        src: '/photos/Llar_Sant_Pau_Bany_Habitacio_26.webp',
      },
      {
        name: 'bany2',
        src: '/photos/Llar_Sant_Pau_Bany_Habitacio.webp',
      },
      {
        name: 'multiesports2',
        src: '/photos/Llar_Sant_Pau_Camp.webp',
      },
      {
        name: 'cuinaMasia',
        src: '/photos/Llar_Sant_Pau_Cuina_Masia_2.webp',
      },
      {
        name: 'cuina',
        src: '/photos/Llar_Sant_Pau_Cuina_Menjador_2.webp',
      },
      {
        name: 'exteriorEdificisAnnexs',
        src: '/photos/Llar_Sant_Pau_Edificis_Exteriors.webp',
      },
      {
        name: 'dutxes',
        src: '/photos/Llar_Sant_Pau_Dutxes.webp',
      },
      {
        name: 'cuina2',
        src: '/photos/Llar_Sant_Pau_Cuina_Menjador.webp',
      },
      {
        name: 'lavabos',
        src: '/photos/Llar_Sant_Pau_Lavabos.webp',
      },
      {
        name: 'entorns',
        src: '/photos/Llar_Sant_Pau_Entorns.webp',
      },
      {
        name: 'plantaBaixa',
        src: '/photos/Llar_Sant_Pau_Entrada.webp',
      },
      {
        name: 'tobogan',
        src: '/photos/Llar_Sant_Pau_Tobogan.webp',
      },
      {
        name: 'lliteres',
        src: '/photos/Llar_Sant_Pau_Lliteres.webp',
      },
      {
        name: 'infermeria',
        src: '/photos/Llar_Sant_Pau_Bany_Infermeria.webp',
      },
      {
        name: 'minusvalids',
        src: '/photos/Llar_Sant_Pau_Bany_Habitacio_Minusvalids.webp',
      },
      {
        name: 'llits28',
        src: '/photos/Llar_Sant_Pau_Habitacio_28.webp',
      },
      {
        name: 'llits26',
        src: '/photos/Llar_Sant_Pau_Habitacio_26.webp',
      },
      {
        name: 'menjadorAnnex',
        src: '/photos/Llar_Sant_Pau_Menjador_3.webp',
      },
      {
        name: 'exteriorMenjadorAnnex',
        src: '/photos/Llar_Sant_Pau_Menjador_Exterior.webp',
      },
      {
        name: 'cuinaMasia2',
        src: '/photos/Llar_Sant_Pau_Menjador_Masia.webp',
      },
      {
        name: 'placaEdificisAnnex',
        src: '/photos/Llar_Sant_Pau_Placa.webp',
      },
      {
        name: 'menjadorAnnex2',
        src: '/photos/Llar_Sant_Pau_Menjador.webp',
      },
      {
        name: 'polivalentAnnexa2',
        src: '/photos/Llar_Sant_Pau_Sala_gran.webp',
      },
      {
        name: 'polivalentBaixa',
        src: '/photos/Llar_Sant_Pau_Sala_Pl_Baixa.webp',
      },
    ];
  }
}
</script>

<style lang="scss" scoped>
.photos {
  &__grid {
    flex: 1;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    grid-template-areas:
      'piscina casa casa'
      'polivalent2 casa casa'
      'llits14 polivalent1 polivalentAnnexa'
      'llits14 banysNois banysNois2'
      'multiesports multiesports banysNoies'
      'multiesports multiesports banyInfermeria'
      'piscina2 bany1 bany2'
      'multiesports2 cuinaMasia cuinaMasia'
      'cuina cuina cuina'
      'cuina cuina cuina'
      'cuina cuina cuina'
      'exteriorEdificisAnnexs dutxes cuina2'
      'lavabos entorns entorns'
      'lavabos entorns entorns'
      'plantaBaixa tobogan minusvalids'
      'lliteres infermeria minusvalids'
      'llits28 llits28 llits28'
      'llits26 menjadorAnnex exteriorMenjadorAnnex'
      'placaEdificisAnnex placaEdificisAnnex cuinaMasia2'
      'placaEdificisAnnex placaEdificisAnnex menjadorAnnex2'
      'polivalentAnnexa2 polivalentAnnexa2 polivalentBaixa';

    .mobile & {
      display: flex;
      flex-direction: column;
    }

    &-item {
      &__image {
        object-fit: cover;
        height: 100%;
      }

      &.piscina {
        grid-area: piscina;
      }

      &.polivalent2 {
        grid-area: polivalent2;
      }

      &.casa {
        grid-area: casa;
      }

      &.polivalent1 {
        grid-area: polivalent1;
      }

      &.polivalentAnnexa {
        grid-area: polivalentAnnexa;
      }

      &.llits14 {
        grid-area: llits14;
      }

      &.banysNois {
        grid-area: banysNois;
      }

      &.banysNois2 {
        grid-area: banysNois2;
      }

      &.banysNoies {
        grid-area: banysNoies;
      }

      &.multiesports {
        grid-area: multiesports;
      }

      &.banyInfermeria {
        grid-area: banyInfermeria;
      }

      &.piscina2 {
        grid-area: piscina2;
      }

      &.bany1 {
        grid-area: bany1;
      }

      &.bany2 {
        grid-area: bany2;
      }

      &.multiesports2 {
        grid-area: multiesports2;
      }

      &.cuinaMasia {
        grid-area: cuinaMasia;
      }

      &.cuina {
        grid-area: cuina;
      }

      &.exteriorEdificisAnnexs {
        grid-area: exteriorEdificisAnnexs;
      }

      &.dutxes {
        grid-area: dutxes;
      }

      &.cuina2 {
        grid-area: cuina2;
      }

      &.lavabos {
        grid-area: lavabos;
      }

      &.entorns {
        grid-area: entorns;
      }

      &.plantaBaixa {
        grid-area: plantaBaixa;
      }

      &.tobogan {
        grid-area: tobogan;
      }

      &.lliteres {
        grid-area: lliteres;
      }

      &.infermeria {
        grid-area: infermeria;
      }

      &.minusvalids {
        grid-area: minusvalids;
      }

      &.llits28 {
        grid-area: llits28;
      }

      &.llits26 {
        grid-area: llits26;
      }

      &.menjadorAnnex {
        grid-area: menjadorAnnex;
      }

      &.exteriorMenjadorAnnex {
        grid-area: exteriorMenjadorAnnex;
      }

      &.cuinaMasia2 {
        grid-area: cuinaMasia2;
      }

      &.placaEdificisAnnex {
        grid-area: placaEdificisAnnex;
      }

      &.menjadorAnnex2 {
        grid-area: menjadorAnnex2;
      }

      &.polivalentAnnexa2 {
        grid-area: polivalentAnnexa2;
      }

      &.polivalentBaixa {
        grid-area: polivalentBaixa;
      }
    }
  }
}
</style>
