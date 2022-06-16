<template>
  <nuxt-link v-if="item.url" :to="{ path: item.url }" :class="{ home: item.url === '/' }" class="main-navigation-item">
    <div v-if="item.imageUrl" class="main-navigation-item__content">
      <nuxt-img preload :src="item.imageUrl" />
    </div>
    <div v-else class="main-navigation-item__content">
      <i :class="item.iconClass"></i>
      <span>{{ item.name }}</span>
    </div>
  </nuxt-link>
  <div v-else class="main-navigation-item" @click="item.click">
    <div class="main-navigation-item__content">
      <i :class="item.iconClass"></i>
      <span>{{ item.name }}</span>
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

  @Prop({ required: true })
  item!: { iconClass: string; imageUrl: string; name: string; click: () => void; url: string };
}
</script>

<style lang="scss" scoped>
$border-left-width: 3px;
$transition-duration: 0.15s;
$color: $color-primary;
$color-hover: $color-secondary;

.main-navigation-item {
  display: flex;
  color: white;

  .mobile & {
    display: flex;
    color: white;
    /* height: 100px; */
    justify-content: center;
    font-size: 30px;

    span {
      padding: 30px;
    }
  }

  &__content {
    display: flex;
    align-items: center;
    text-transform: uppercase;

    img {
      height: 100%;
    }
  }

  &.nuxt-link-exact-active:not(.home),
  &.nuxt-link-active:not(.home) {
    // background-color: $color;

    .main-navigation-item__content {
      color: $color-hover;
    }
  }

  &:not(.nuxt-link-exact-active):not(.nuxt-link-active):hover {
    // background-color: $color;

    .main-navigation-item__content {
      color: $color-hover;
    }
  }
}
</style>
