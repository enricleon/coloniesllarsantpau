<template>
  <section class="text-photo">
    <div v-if="isLeft" class="left">
      <slot name="left"></slot>
      <nuxt-img v-if="imageUrl" :src="imageUrl" />
    </div>
    <div v-else class="right">
      <nuxt-img v-if="imageUrl" :src="imageUrl" />
      <slot name="right"></slot>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'nuxt-class-component';
import { Prop } from 'vue-property-decorator';

@Component({})
export default class TextPhoto extends Vue {
  @Prop({ required: false })
  imageUrl!: string;

  @Prop({ required: false, default: 'left' })
  position!: 'left' | 'right';

  get isLeft() {
    return this.position === 'left';
  }
}
</script>

<style lang="scss" scoped>
.text-photo {
  .right {
  }

  .left {
  }
}
</style>
