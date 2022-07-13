<template>
  <section class="content-wrapper services">
    <app-bar>Serveis</app-bar>
    <sp-text class="services__subtitle font-medium" :importance="6" size="xs"
      >Durant la vostra estancia podreu gaudir de tot tipus de serveis:</sp-text
    >
    <div class="content main">Serveis</div>
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
  &__subtitle {
    color: white;
    text-align: center;
  }
}
</style>
