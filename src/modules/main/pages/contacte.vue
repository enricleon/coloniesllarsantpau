<template>
  <section class="content-wrapper contact">
    <div class="content main">Contacte</div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue';
import Component, { Action } from 'nuxt-class-component';
import { State, namespace } from 'vuex-class';

const Store = namespace('main');

@Component({})
export default class Contact extends Vue {
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
.contact {
}
</style>
