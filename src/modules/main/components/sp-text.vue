<template>
  <section class="sp-text" :class="`sp-text--${$mq}${size ? ' size--' + size : ''}`">
    <h1 v-if="importance === 1">
      <slot></slot>
    </h1>
    <h2 v-else-if="importance === 2">
      <slot></slot>
    </h2>
    <h3 v-else-if="importance === 3">
      <slot></slot>
    </h3>
    <h4 v-else-if="importance === 4">
      <slot></slot>
    </h4>
    <h5 v-else-if="importance === 5">
      <slot></slot>
    </h5>
    <h6 v-else-if="importance === 6">
      <slot></slot>
    </h6>
    <span v-else>
      <slot></slot>
    </span>
  </section>
</template>

<script lang="ts">
import Component, { mixins } from 'nuxt-class-component';
import { Prop } from 'vue-property-decorator';
import ScreenSizes from '@/modules/core/mixins/screen-sizes';

@Component
export default class SpText extends mixins(ScreenSizes) {
  @Prop({ required: false, default: 0 })
  importance!: number;

  @Prop({ required: false, default: 'lg' })
  size!: string;
}
</script>

<style lang="scss" scoped>
.sp-text {
  &--xs {
    &.size--xs {
      font-size: 1rem;
    }

    &.size--sm {
      font-size: 1.15rem;
    }

    &.size--md {
      font-size: 1.3rem;
    }

    &.size--lg {
      font-size: 1.45rem;
    }

    &.size--xl {
      font-size: 1.6rem;
    }

    &.size--xxl {
      font-size: 4rem;
    }
  }

  &--sm {
    &.size--xs {
      font-size: 1.25rem;
    }

    &.size--sm {
      font-size: 1.5;
    }

    &.size--md {
      font-size: 1.75rem;
    }

    &.size--lg {
      font-size: 2rem;
    }

    &.size--xl {
      font-size: 2.25em;
    }

    &.size--xxl {
      font-size: 6rem;
    }
  }

  &--md {
    &.size--xs {
      font-size: 1.5rem;
    }

    &.size--sm {
      font-size: 2rem;
    }

    &.size--md {
      font-size: 2.5rem;
    }

    &.size--lg {
      font-size: 3rem;
    }

    &.size--xl {
      font-size: 3.5rem;
    }

    &.size--xxl {
      font-size: 8rem;
    }
  }

  &--lg {
    &.size--xs {
      font-size: 1.75rem;
    }

    &.size--sm {
      font-size: 2.5rem;
    }

    &.size--md {
      font-size: 3.25rem;
    }

    &.size--lg {
      font-size: 4rem;
    }

    &.size--xl {
      font-size: 4.75rem;
    }

    &.size--xxl {
      font-size: 10rem;
    }
  }

  &--xl {
    &.size--xs {
      font-size: 2rem;
    }

    &.size--sm {
      font-size: 3rem;
    }

    &.size--md {
      font-size: 4rem;
    }

    &.size--lg {
      font-size: 5rem;
    }

    &.size--xl {
      font-size: 6rem;
    }

    &.size--xxl {
      font-size: 12rem;
    }
  }
}
</style>
