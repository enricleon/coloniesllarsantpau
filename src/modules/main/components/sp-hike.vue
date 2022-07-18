<template>
  <section class="sp-hike">
    <sp-text class="sp-hike__title font-medium" :importance="4" size="md">{{ item.title }}</sp-text>
    <div class="sp-hike__info">
      <sp-text class="sp-hike__info-description font-medium" :importance="5">{{ item.description }}</sp-text>
      <div class="sp-hike__info-image">
        <img :alt="item.title" :src="item.imageUrl" />
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import Component, { mixins } from 'nuxt-class-component';
import { Prop } from 'vue-property-decorator';
import ScreenSizes from '@/modules/core/mixins/screen-sizes';

@Component
export default class SpHike extends mixins(ScreenSizes) {
  @Prop({ required: true })
  item!: {
    title: string;
    description: string;
  };
}
</script>

<style lang="scss" scoped>
.sp-hike {
  display: flex;
  flex-direction: column;
  color: white;
  gap: 2rem;

  &__title {
  }

  &__info {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 10vw;

    .mobile & {
      flex-direction: column;
      gap: 5rem;
    }

    &-description {
      flex: 1;
      max-width: 40vw;

      .mobile & {
        max-width: initial;
      }
    }

    &-image {
      flex: none;
      display: flex;
      flex-direction: column;
    }
  }
}
</style>
