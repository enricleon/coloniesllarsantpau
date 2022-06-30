<template>
  <section class="photo-text">
    <h4 class="photo-text__title font-titles">{{ title }}</h4>
    <div class="photo-text__image" :style="{ backgroundImage: `url(${imageUrl})` }" />
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
.photo-text {
  display: flex;
  position: relative;

  &__title {
    position: absolute;
    color: white;
    font-size: 5rem;
    top: 0;
    bottom: 0;
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
