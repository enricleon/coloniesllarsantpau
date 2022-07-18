<template>
  <section class="content-wrapper collaborators">
    <app-bar>Col·laboradors</app-bar>
    <sp-text class="collaborators__subtitle font-medium" :importance="6" size="xs"
      >La casa ofereix activitats a través d’empreses externes. Algunes d’elles són:</sp-text
    >
    <div class="content main" :class="`content--${$mq}`">
      <section class="collaborators__list">
        <sp-collaborator v-for="item in collaborators" :key="item.title" :item="item"></sp-collaborator>
      </section>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue';
import Component, { Action } from 'nuxt-class-component';
import { State, namespace } from 'vuex-class';

const Store = namespace('main');

@Component({})
export default class Collaborators extends Vue {
  @Store.Action
  public dummyAction!: () => Promise<void>;

  get collaborators() {
    return [
      {
        title: 'EDR Events',
        description:
          'EDR Events és una empresa dedicada al servei de l’oci cultural i l’entreteniment. Aporten un ampli ventall de solucions per cobrir tota classe d’esdeveniments.',
        phone: '972 73 04 21',
        mobile: '649 274 736',
        email: 'info@edrevents.cat',
        website: 'www.edrevents.cat',
      },
      {
        title: 'Alt ter',
        description:
          'El CEA Alt Ter és una associació dedicada a l’educació a través de la descoberta de l’entorn natural i del patrimoni històric i social, així com la seva recuperació, conservació i difusió',
        phone: '972 72 13 17',
        mobile: '686 113 344',
        email: 'info@alt-ter.org',
        website: 'www.alt-ter.org',
      },
      {
        title: 'GR Experience',
        description: 'Empresa creativa i dinàmica dedicada a la pràctica d’activitat física i esports d’aventura',
        mobile: '695820788',
        email: 'info@alt-ter.org',
        website: 'www.grexperience.org',
      },
    ];
  }

  async fetch() {
    await this.loadData();
  }

  async loadData() {
    await Promise.all([this.dummyAction()]);
  }
}
</script>

<style lang="scss" scoped>
.collaborators {
  &__subtitle {
    color: white;
    text-align: center;
  }

  &__list {
    display: flex;
    flex-direction: column;
    gap: 3rem;
  }
}
</style>
