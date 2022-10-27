<template>
  <section class="content-wrapper thehouse">
    <app-bar>La casa</app-bar>
    <div class="thehouse__content">
      <sp-photo-text title="Planta Baixa" image-url="photos/Llar_Sant_Pau_Entrada.webp"></sp-photo-text>
      <sp-photo-text title="Primer pis" image-url="photos/Llar_Sant_Pau_Habitacio_28.webp"></sp-photo-text>
      <sp-photo-text title="Segon pis" image-url="photos/Llar_Sant_Pau_Habitacio_26.webp"></sp-photo-text>
    </div>
    <div class="content" :class="`content--${$mq}`">
      <sp-text-article class="thehouse__description">
        <template #left>
          <div class="thehouse__description-text">
            <p>
              <span>La casa disposa d’edificis annexos; un on hi ha lavabos, dutxes i wc separats per sexe; </span>
              <span>un altre on s’hi troba cal Campaner, una sala de 70m2 per a tota classe d’activitats; </span>
              <span
                >i finalment, en un altre edifici annex, hi ha l’edifici on hi podem trobar la cuina/menjador, amb
                capacitat per a 85 persones.</span
              >
            </p>
            <p>
              <span
                >La casa també disposa d’una gran varietat d’instal·lacions com varies sales per fer activitats
                lúdiques, manualitats, jocs de taula, etc.
              </span>
              <span
                >Disposa de calefacció a totes les habitacions de la casa, on tots els llits són lliteres amb armari
                individual.
              </span>
              <span
                >Es destaca un gran camp de gespa al costat de la casa, al qual s’hi pot realitzar diferents esports i
                activitats.
              </span>
              <span
                >I també, s’hi pot trobar una pista poliesportiva municipal, la qual es pot utilitzar amb reserva prèvia
                a l’Ajuntament.
              </span>
              <span>Hi ha connexió wifi a tot el recinte.</span>
            </p>
          </div>
        </template>
        <template #right>
          <img class="thehouse__description-background" src="thehouse-background.svg" />
        </template>
      </sp-text-article>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue';
import Component, { Action } from 'nuxt-class-component';
import { State, namespace } from 'vuex-class';

const Store = namespace('main');

@Component({})
export default class TheHouse extends Vue {
  @Store.Action
  public dummyAction!: () => Promise<void>;

  async fetch() {
    await this.loadData();
  }

  async loadData() {
    await Promise.all([this.dummyAction()]);
  }
}
</script>

<style lang="scss" scoped>
.thehouse {
  background: var(--color-primary);
  color: white;

  &__description {
    &-text {
      display: flex;
      flex-direction: column;
      gap: 2rem;
    }

    &-background {
      position: absolute;
      bottom: 0;

      .mobile & {
        display: none;
      }
    }
  }
}
</style>
