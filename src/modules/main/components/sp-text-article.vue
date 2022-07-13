<template>
  <section class="sp-text-article" :class="`sp-text-article--${$mq} ${gap ? '' : 'sp-text-article--nogap'}`">
    <div class="left" :class="`${highlight === 'left' ? 'highlight' : ''}`">
      <slot name="left"></slot>
    </div>
    <div class="right" :class="`${highlight === 'right' ? 'highlight' : ''}`">
      <slot name="right"></slot>
    </div>
  </section>
</template>

<script lang="ts">
import Vue, { VueConstructor } from 'vue';
import Component, { mixins } from 'nuxt-class-component';
import { Prop } from 'vue-property-decorator';
import ScreenSizes from '@/modules/core/mixins/screen-sizes';

@Component
export default class TextArticle extends mixins(ScreenSizes) {
  @Prop({ required: false, default: true })
  gap!: boolean;

  @Prop({ required: false, default: '' })
  highlight!: string;
}
</script>

<style lang="scss" scoped>
.sp-text-article {
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  flex-direction: column;

  .desktop & {
    flex-direction: row;
    gap: 2rem;

    &--sm {
      gap: 4rem;
      font-size: 1.25rem;
    }

    &--md {
      gap: 6rem;
      font-size: 1.5rem;
    }

    &--lg {
      gap: 8rem;
      font-size: 1.75rem;
    }

    &--xl {
      gap: 10rem;
      font-size: 2rem;
    }

    &--nogap {
      gap: 0;
    }
  }

  .left {
    flex: 1;
  }

  .right {
    flex: 1;
  }

  .right,
  .left {
    display: flex;
    flex-direction: column;

    &.highlight {
      flex: 3;
    }

    &:not(.highlight) {
      flex: 2;
    }
  }

  img {
    align-self: center;
  }
}
</style>
