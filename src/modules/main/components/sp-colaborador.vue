<template>
  <section class="sp-colaborador">
    <sp-text class="sp-colaborador__title font-medium" :importance="4" size="md">{{ item.title }}</sp-text>
    <div class="sp-colaborador__info">
      <sp-text class="sp-colaborador__info-description font-medium" :importance="5">{{ item.description }}</sp-text>
      <div class="sp-colaborador__info-contact">
        <sp-text class="sp-colaborador__info-contact__field phone font-titles">{{ item.phone }}</sp-text>
        <sp-text class="sp-colaborador__info-contact__field mobile font-titles">{{ item.mobile }}</sp-text>
        <sp-text class="sp-colaborador__info-contact__field email font-titles">{{ item.email }}</sp-text>
        <sp-text class="sp-colaborador__info-contact__field website font-titles">{{ item.website }}</sp-text>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import Component, { mixins } from 'nuxt-class-component';
import { Prop } from 'vue-property-decorator';
import ScreenSizes from '@/modules/core/mixins/screen-sizes';

@Component
export default class TextArticle extends mixins(ScreenSizes) {
  @Prop({ required: true })
  item!: {
    title: string;
    description: string;
    phone?: string;
    mobile: string;
    email: string;
    website: string;
  };
}
</script>

<style lang="scss" scoped>
.sp-colaborador {
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
      gap: 1rem;
    }

    &-description {
      flex: 1;
      max-width: 40vw;

      .mobile & {
        max-width: initial;
      }
    }

    &-contact {
      flex: none;
      display: flex;
      flex-direction: column;
      align-items: flex-end;

      &__field {
        &.website {
          color: var(--color-secondary);
        }
      }
    }
  }
}
</style>
