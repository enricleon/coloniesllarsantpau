<template>
  <section class="content-wrapper services">
    <app-bar>Serveis</app-bar>
    <sp-text class="services__subtitle font-medium" :importance="6" size="xs"
      >Durant la vostra estancia podreu gaudir de tot tipus de serveis:</sp-text
    >
    <div class="content main" :class="`content--${$mq}`">
      <div class="services__grid">
        <div class="services__grid-item">
          <div class="services__grid-item__icon">
            <img src="/icons/piscina.svg" />
          </div>
          <sp-text class="font-medium" :importance="6" size="xs">Piscina</sp-text>
        </div>
        <div>
          <div class="services__grid-item">
            <div class="services__grid-item__icon">
              <img src="/icons/multiesports.svg" />
            </div>
            <sp-text class="font-medium" :importance="6" size="xs">Camp multiesports</sp-text>
          </div>
        </div>
        <div>
          <div class="services__grid-item">
            <div class="services__grid-item__icon">
              <img src="/icons/porteria.svg" />
            </div>
            <sp-text class="font-medium" :importance="6" size="xs"> Porteria futbol </sp-text>
          </div>
        </div>
        <div>
          <div class="services__grid-item">
            <div class="services__grid-item__icon">
              <img src="/icons/tobogan.svg" />
            </div>
            <sp-text class="font-medium" :importance="6" size="xs"> Tobogan aquàtic </sp-text>
          </div>
        </div>
        <div>
          <div class="services__grid-item">
            <div class="services__grid-item__icon">
              <img src="/icons/volleyball.svg" />
            </div>
            <sp-text class="font-medium" :importance="6" size="xs"> Xarxa de volleyball </sp-text>
          </div>
        </div>
        <div>
          <div class="services__grid-item">
            <div class="services__grid-item__icon">
              <img src="/icons/barbacoas.svg" />
            </div>
            <sp-text class="font-medium" :importance="6" size="xs"> Barbacoas </sp-text>
          </div>
        </div>
        <div>
          <div class="services__grid-item">
            <div class="services__grid-item__icon">
              <img src="/icons/wifi.svg" />
            </div>
            <sp-text class="font-medium" :importance="6" size="xs"> Wifi i projector </sp-text>
          </div>
        </div>
        <div>
          <div class="services__grid-item">
            <div class="services__grid-item__icon">
              <img src="/icons/basquet.svg" />
            </div>
            <sp-text class="font-medium" :importance="6" size="xs"> Cistella de bàsquet </sp-text>
          </div>
        </div>
        <div>
          <div class="services__grid-item">
            <div class="services__grid-item__icon">
              <img src="/icons/musica.svg" />
            </div>
            <sp-text class="font-medium" :importance="6" size="xs"> Equip de música </sp-text>
          </div>
        </div>
      </div>
      <img class="services-background" src="/services-background.svg" />
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue';
import Component, { Action } from 'nuxt-class-component';
import { State, namespace } from 'vuex-class';

const Store = namespace('main');

@Component({})
export default class Services extends Vue {
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
.services {
  color: white;

  .main {
    display: flex;
    flex-direction: column;
    padding-bottom: 0;
    gap: 7rem;
  }

  &__subtitle {
    text-align: center;
  }

  &__grid {
    display: grid;
    gap: 3rem;
    row-gap: 3rem;
    grid-template-columns: repeat(3, 1fr);
    width: max-content;

    &-item {
      display: flex;
      gap: 1rem;

      &__icon {
        border: 1px solid white;
        border-radius: 50%;
        width: 50px;
        height: 50px;
        display: flex;
        align-items: center;
        justify-content: center;

        img {
          width: 30px;
          height: 30px;
        }
      }
    }
  }
}
</style>
