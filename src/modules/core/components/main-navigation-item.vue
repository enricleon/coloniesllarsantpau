<template>
  <nuxt-link
    v-if="item.url"
    :to="{ path: item.url }"
    :class="{ collapsed: collapsed, home: item.url === '/' }"
    class="main-navigation-item"
  >
    <div class="main-navigation-item__content">
      <i :class="item.iconClass"></i>
      <span v-if="!collapsed">{{ item.name }}</span>
    </div>
  </nuxt-link>
  <div v-else class="main-navigation-item" :class="{ collapsed: collapsed }" @click="item.click">
    <div class="main-navigation-item__content">
      <i :class="item.iconClass"></i>
      <span v-if="!collapsed">{{ item.name }}</span>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'nuxt-class-component';
import { Prop } from 'vue-property-decorator';

@Component({})
export default class MainNavigationItem extends Vue {
  @Prop({ required: false })
  url!: string;

  @Prop({ required: false, default: false })
  collapsed!: boolean;

  @Prop({ required: true })
  item!: { iconClass: string; name: string; click: () => void; url: string };
}
</script>

<style lang="scss" scoped>
$border-left-width: 3px;
$transition-duration: 0.15s;

.main-navigation-item {
  margin-left: 1rem;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: all $transition-duration;

  &.collapsed {
    margin-left: 0;
    border-radius: 0;

    .main-navigation-item__content {
      justify-content: center;
      padding: 0;
      gap: 0;
      border-right: $border-left-width solid transparent;
    }
  }

  &__content {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    height: 1.5rem;
    margin: 1rem 0;
    padding-left: 2rem;
    border-left: $border-left-width solid transparent;

    color: $gray-darkest;
    font-weight: 500;
    transition: all $transition-duration;
  }

  &.nuxt-link-exact-active,
  &.nuxt-link-active:not(.home) {
    background-color: $coral-lightest;

    .main-navigation-item__content {
      color: $coral-base;
      border-left: $border-left-width solid;
    }
  }

  &:not(.nuxt-link-exact-active):not(.nuxt-link-active):hover {
    background-color: $coral-lightest;

    .main-navigation-item__content {
      color: $coral-base;
    }
  }
}
</style>
