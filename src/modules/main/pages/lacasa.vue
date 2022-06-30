<template>
  <section class="content-wrapper thehouse">
    <app-bar>La casa</app-bar>
    <div class="thehouse__content">
      <photo-text title="Planta Baixa" image-url="/photos/Llar_Sant_Pau_Entrada.jpg"></photo-text>
      <photo-text title="Primer pis" image-url="/photos/Llar_Sant_Pau_Habitacio_28.jpg"></photo-text>
      <photo-text title="Segon pis" image-url="/photos/Llar_Sant_Pau_Habitacio_26.jpg"></photo-text>
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
}
</style>
