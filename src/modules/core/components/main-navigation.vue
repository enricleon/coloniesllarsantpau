<template>
  <div :class="{ collapsed: collapsed }" class="main-navigation">
    <section class="navigation-brand">
      <div class="brand-icon">
        <nuxt-img preload src="/logo/llar_sant_pau.svg" />
      </div>
      <div class="brand-logo">
        <nuxt-img preload src="/logo/llar_sant_pau_horizontal.svg" />
      </div>
    </section>
    <section class="navigation-links">
      <slot></slot>
    </section>
    <i
      :class="{ 'ph-caret-double-right': collapsed, 'ph-caret-double-left': !collapsed }"
      class="collapse-button ph-sm"
      @click="$emit('toggle')"
    >
    </i>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'nuxt-class-component';
import { State } from 'vuex-class';
import { Prop } from 'vue-property-decorator';

@Component({})
export default class MainNavigation extends Vue {
  @State('count') count: any;

  @Prop({ required: false, default: false })
  collapsed!: boolean;
}
</script>

<style lang="scss" scoped>
.main-navigation {
  display: flex;
  flex-direction: column;
  gap: 2rem;

  width: 100%;
  max-width: 19rem;
  padding-top: 1.5rem;
  padding-right: 1rem;

  filter: drop-shadow(-3px 0px 6px $gray-base);
  background-color: white;
  z-index: 402;

  position: relative;

  &.collapsed {
    padding-right: 0;
    max-width: 4rem;

    .navigation-brand {
      justify-content: center;
      gap: 0;
      margin-right: 0;
      margin-left: 0;

      .brand-logo {
        display: none;
      }
    }
  }

  .navigation-brand {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-left: 2rem;
    margin-right: 1rem;

    .brand-icon {
      width: 2rem;
    }

    .brand-logo {
      width: 10rem;
    }
  }

  .navigation-links {
    display: flex;
    flex-direction: column;
  }

  .collapse-button {
    position: absolute;
    bottom: 3rem;
    right: 0;
    margin-right: -15px;
    padding: 8px;
    border-radius: 50%;
    background: white;
    filter: drop-shadow(0px 2px 1px $gray-dark);
    cursor: pointer;
    transition: 0.15s bottom;

    &:before {
      color: $gray-darker;
    }

    &:hover {
      filter: drop-shadow(0px 1px 1px $gray-darker);
      bottom: calc(3rem - 2px);

      &:before {
        color: black;
      }
    }
  }
}
</style>
