<template>
  <section class="sp-photo-text">
    <sp-text class="sp-photo-text__title font-titles" :importance="4" size="lg">{{ title }}</sp-text>
    <div class="sp-photo-text__image" :style="{ backgroundImage: `url(${imageUrl})` }" />
  </section>
</template>

<script lang="ts">
import Vue, { VueConstructor } from 'vue';
import Component, { mixins } from 'nuxt-class-component';
import { Prop } from 'vue-property-decorator';
import ScreenSizes from '@/modules/core/mixins/screen-sizes';

@Component
export default class TextArticle extends mixins(ScreenSizes) {
  @Prop({ required: true })
  title!: string;

  @Prop({ required: true })
  imageUrl!: string;
}
</script>

<style lang="scss" scoped>
.sp-photo-text {
  display: flex;
  position: relative;

  &__title {
    position: absolute;
    color: white;
    top: 0;
    bottom: 0;
    text-align: center;
    align-items: center;
    justify-content: center;
    display: flex;
    width: 100%;
  }

  &__image {
    width: 100%;
    height: 750px;
    background-position: center;
    background-size: cover;
  }
}
</style>
