<template>
  <section class="content-wrapper photos">
    <app-bar>Fotos</app-bar>
    <div class="content main" :class="`content--${$mq}`">
      <div class="photos__grid">
        <div v-for="(item, index) in photos" :key="item.name" class="photos__grid-item" :class="item.name">
          <img class="photos__grid-item__image" :src="item.src" />
          <sp-text class="font-sans" :importance="5" size="xxs">{{ index + 1 }}. {{ item.description }}</sp-text>
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
        description: 'Piscina',
        name: 'piscina',
        src: '/photos/Llar_Sant_Pau_Piscina.webp',
      },
      {
        description: 'Sala polivalent planta 2',
        name: 'polivalent2',
        src: '/photos/Llar_Sant_Pau_Sala_Segon_Pis.webp',
      },
      {
        description: 'La casa',
        name: 'casa',
        src: '/photos/Llar_Sant_Pau_Complex.webp',
      },
      {
        description: 'Sala polivalent planta 1',
        name: 'polivalent1',
        src: '/photos/Llar_Sant_Pau_Sala_Primer_Pis.webp',
      },
      {
        description: 'Sala polivalent annexa',
        name: 'polivalentAnnexa',
        src: '/photos/Llar_Sant_Pau_Sala_Polivalent.webp',
      },
      {
        description: 'Habitació 14 llits',
        name: 'llits14',
        src: '/photos/Llar_Sant_Pau_Habitacio_14.webp',
      },
      {
        description: 'Banys nois',
        name: 'banysNois',
        src: '/photos/Llar_Sant_Pau_Banys_Nois.webp',
      },
      {
        description: 'Banys nois 2',
        name: 'banysNois2',
        src: '/photos/Llar_Sant_Pau_Banys_Nois_2.webp',
      },
      {
        description: 'Banys noies',
        name: 'banysNoies',
        src: '/photos/Llar_Sant_Pau_Banys_Noies.webp',
      },
      {
        description: 'Camp multiesports',
        name: 'multiesports',
        src: '/photos/Llar_Sant_Pau_Camp_Exterior.webp',
      },
      {
        description: 'Bany infermeria',
        name: 'banyInfermeria',
        src: '/photos/Llar_Sant_Pau_Bany_Infermeria.webp',
      },
      {
        description: 'Piscina',
        name: 'piscina2',
        src: '/photos/Llar_Sant_Pau_Camp_piscina.webp',
      },
      {
        description: 'Bany planta 1',
        name: 'bany1',
        src: '/photos/Llar_Sant_Pau_Bany_Habitacio_26.webp',
      },
      {
        description: 'Bany planta 2',
        name: 'bany2',
        src: '/photos/Llar_Sant_Pau_Bany_Habitacio.webp',
      },
      {
        description: 'Camp multiesports',
        name: 'multiesports2',
        src: '/photos/Llar_Sant_Pau_Camp.webp',
      },
      {
        description: 'Cuina Masia',
        name: 'cuinaMasia',
        src: '/photos/Llar_Sant_Pau_Cuina_Masia_2.webp',
      },
      {
        description: 'Cuina',
        name: 'cuina',
        src: '/photos/Llar_Sant_Pau_Cuina_Menjador_2.webp',
      },
      {
        description: 'Exterior edificis annexes',
        name: 'exteriorEdificisAnnexs',
        src: '/photos/Llar_Sant_Pau_Edificis_Exteriors.webp',
      },
      {
        description: 'Dutxes',
        name: 'dutxes',
        src: '/photos/Llar_Sant_Pau_Dutxes.webp',
      },
      {
        description: 'Cuina',
        name: 'cuina2',
        src: '/photos/Llar_Sant_Pau_Cuina_Menjador.webp',
      },
      {
        description: 'Lavabos',
        name: 'lavabos',
        src: '/photos/Llar_Sant_Pau_Lavabos.webp',
      },
      {
        description: 'Entorns',
        name: 'entorns',
        src: '/photos/Llar_Sant_Pau_Entorns.webp',
      },
      {
        description: 'Planta baixa',
        name: 'plantaBaixa',
        src: '/photos/Llar_Sant_Pau_Entrada.webp',
      },
      {
        description: 'Tobogan aquàtic',
        name: 'tobogan',
        src: '/photos/Llar_Sant_Pau_Tobogan.webp',
      },
      {
        description: 'Lliteres',
        name: 'lliteres',
        src: '/photos/Llar_Sant_Pau_Lliteres.webp',
      },
      {
        description: 'Infermeria',
        name: 'infermeria',
        src: '/photos/Llar_Sant_Pau_Bany_Infermeria.webp',
      },
      {
        description: 'Habitació minusvàlids',
        name: 'minusvalids',
        src: '/photos/Llar_Sant_Pau_Bany_Habitacio_Minusvalids.webp',
      },
      {
        description: 'Habitació 28 llits',
        name: 'llits28',
        src: '/photos/Llar_Sant_Pau_Habitacio_28.webp',
      },
      {
        description: 'Habitació 26 llits',
        name: 'llits26',
        src: '/photos/Llar_Sant_Pau_Habitacio_26.webp',
      },
      {
        description: 'Menjador Annex',
        name: 'menjadorAnnex',
        src: '/photos/Llar_Sant_Pau_Menjador_3.webp',
      },
      {
        description: 'Exterior menjador annex',
        name: 'exteriorMenjadorAnnex',
        src: '/photos/Llar_Sant_Pau_Menjador_Exterior.webp',
      },
      {
        description: 'Cuina Masia ',
        name: 'cuinaMasia2',
        src: '/photos/Llar_Sant_Pau_Menjador_Masia.webp',
      },
      {
        description: 'Plaça i edificis annexos',
        name: 'placaEdificisAnnex',
        src: '/photos/Llar_Sant_Pau_Placa.webp',
      },
      {
        description: 'Menjador Annex',
        name: 'menjadorAnnex2',
        src: '/photos/Llar_Sant_Pau_Menjador.webp',
      },
      {
        description: 'Sala polivalent annexa',
        name: 'polivalentAnnexa2',
        src: '/photos/Llar_Sant_Pau_Sala_gran.webp',
      },
      {
        description: 'Sala polivalent planta baixa',
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
      display: flex;
      flex-direction: column;
      color: white;
      gap: 0.5rem;
      text-transform: capitalize;

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
