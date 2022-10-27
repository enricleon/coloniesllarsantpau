<template>
  <section class="content-wrapper contact">
    <app-bar>Contacte</app-bar>
    <sp-text class="contact__subtitle font-medium" :importance="6" size="xs"
      >Per reserves i més informació contacteu amb:</sp-text
    >
    <div class="content main" :class="`content--${$mq}`">
      <div class="contact__info">
        <sp-text class="font-medium" :importance="6" size="xs">Cèlia Comellas Guix</sp-text>
        <sp-text class="font-medium" :importance="6" size="xs">
          <a href="mailto:info@coloniesllarsantpau.com">info@coloniesllarsantpau.com</a>
        </sp-text>
        <sp-text class="font-medium">
          <a href="tel:654021143">654021143</a> / <a href="tel:972 721 270">972 721 270</a></sp-text
        >
      </div>
    </div>
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
  color: white;

  &__subtitle {
    color: white;
    text-align: center;
  }

  &__info {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    padding: 3rem 20%;
    border: 5px solid white;
    border-radius: 200px;
  }
}
</style>
