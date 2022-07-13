<template>
  <nuxt-link
    v-if="item.url"
    :to="{ path: item.url }"
    :class="{ home: item.url === '/' }"
    class="main-navigation-item"
    @click.native="onClick()"
  >
    <div v-if="item.imageUrl" class="main-navigation-item__content">
      <img :src="item.imageUrl" />
    </div>
    <div v-else class="main-navigation-item__content">
      <i :class="item.iconClass"></i>
      <span>{{ item.name }}</span>
    </div>
  </nuxt-link>
  <div v-else class="main-navigation-item" @click="onClick(true)">
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

@Component
export default class MainNavigationItem extends Vue {
  @Prop({ required: false })
  url!: string;

  @Prop({ required: true })
  item!: { iconClass: string; imageUrl: string; name: string; click: () => void; url: string };

  onClick(triggerItemClick = false) {
    this.$emit('click');

    triggerItemClick && this.item.click();
  }
}
</script>

<style lang="scss" scoped>
$border-left-width: 3px;
$transition-duration: 0.15s;
$color: white;

$color-hover: var(--color-secondary);

.main-navigation-item {
  display: flex;
  color: $color;

  .mobile & {
    display: flex;
    color: $color;
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
    .main-navigation-item__content {
      color: $color-hover;
    }
  }

  &:not(.nuxt-link-exact-active):not(.nuxt-link-active):hover {
    .main-navigation-item__content {
      color: $color-hover;
    }
  }
}
</style>
