<template>
  <section class="content-wrapper">
    <app-bar> </app-bar>
    <div class="content">
      <div class="homepage">En el core</div>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue';
import Component, { Getter } from 'nuxt-class-component';

@Component({})
export default class HomePage extends Vue {}
</script>

<style lang="scss" scoped>
.homepage {
  display: flex;
  flex-direction: column;
}
</style>
