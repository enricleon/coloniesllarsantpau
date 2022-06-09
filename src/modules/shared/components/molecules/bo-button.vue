<template>
  <button
    class="bo-button"
    :class="{
      [`bo-button--${size}`]: size,
      [`bo-button--${outline}`]: outline,
      [`bo-button--${type}`]: type,
    }"
    @click="$emit('click')"
  >
    <i v-if="type === 'icon'" :class="iconClassComputed"></i>
    <slot></slot>
  </button>
</template>

<script lang="ts">
import Vue from 'vue';

import Component from 'nuxt-class-component';
import { Prop } from 'vue-property-decorator';

@Component
export default class BoButton extends Vue {
  @Prop({ required: false })
  iconClass!: string;

  @Prop({ required: false, default: 'regular' })
  type!: 'icon' | 'regular';

  @Prop({ required: false })
  outline!: 'box' | 'border' | 'solid';

  @Prop({ required: false })
  size!: 'xxs' | 'xs' | 'sm' | 'lg' | 'xl';

  get iconClassComputed() {
    const baseClass = this.iconClass || '';
    const sizeClass = this.size ? `ph-${this.size}` : '';

    return [baseClass, sizeClass].join(' ');
  }
}
</script>
<style lang="scss" scoped>
$transition-duration: 0.15s;

.bo-button {
  display: flex;
  align-items: center;
  gap: 0.5rem;

  cursor: pointer;
  display: flex;

  min-width: 160px;
  justify-content: center;

  border-radius: 2px;

  color: $gray-darkest;
  border: 1px solid transparent;
  transition: all $transition-duration;

  &:hover {
    color: $coral-base;
  }

  &--icon {
    padding: 8px;
    min-width: unset;
  }

  &--regular {
    padding: 0.5rem 1rem;
  }

  &--box {
    background-color: white;
    filter: drop-shadow(0px 0px 1px $gray-lighter);

    &:hover {
      background-color: $coral-lightest;
      border-color: $coral-base;
    }
  }

  &--border {
    color: $coral-base;
    border-color: $coral-base;

    &:hover {
      color: white;
      background-color: $coral-base;
    }
  }

  &--solid {
    color: white;
    background-color: $coral-base;

    &:hover {
      color: white;
      background-color: $coral-dark;
    }
  }

  &--xxs {
    padding: 2px;
  }

  &--xs {
    padding: 4px;
  }

  &--sm {
    padding: 6px;
  }

  &--lg {
    padding: 10px;
  }

  &--xl {
    padding: 12px;
  }
}
</style>
