<template>
  <transition name="bo-modal-fade">
    <div class="bo-modal__backdrop">
      <div class="bo-modal" :class="size ? `bo-modal--${size}` : ''">
        <header class="bo-modal__header">
          <h6 class="header__title">
            <slot name="header" />
          </h6>
          <bo-button type="icon" icon-class="ph-x" @click="close" />
        </header>
        <section class="bo-modal__body">
          <slot name="body" />
        </section>
        <footer v-if="hasFooterSlot" class="bo-modal__footer">
          <slot name="footer" />
        </footer>
      </div>
    </div>
  </transition>
</template>

<script lang="ts">
import Vue from 'vue';

import Component from 'nuxt-class-component';
import { Prop } from 'vue-property-decorator';

@Component
export default class BoModal extends Vue {
  @Prop({ required: false })
  size!: 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';

  get hasFooterSlot() {
    return !!this.$slots.footer;
  }

  close() {
    this.$emit('close');
  }
}
</script>
<style lang="scss" scoped>
.bo-modal-fade-enter,
.bo-modal-fade-leave-to {
  opacity: 0;
}

.bo-modal-fade-enter-active,
.bo-modal-fade-leave-active {
  transition: opacity 0.5s ease;
}

.bo-modal {
  background: #ffffff;
  overflow-x: auto;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  gap: 1rem;

  filter: drop-shadow(0px 1px 1px $gray-base);
  border-radius: 5px;

  &--xxs {
    width: 12rem;
    height: 6rem;
  }

  &--xs {
    width: 24rem;
    height: 12rem;
  }

  &--sm {
    width: 36rem;
    height: 18rem;
  }

  &--md {
    width: 48rem;
    height: 24rem;
  }

  &--lg {
    width: 60rem;
    height: 30rem;
  }

  &--xl {
    width: 72rem;
    height: 36rem;
  }

  &__backdrop {
    display: flex;
    justify-content: center;
    align-items: center;

    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;

    background-color: rgba(0, 0, 0, 0.3);
    z-index: 402;
  }

  &__header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    .header__title {
      font-weight: 600;
    }
  }

  &__footer {
    flex-direction: column;
    justify-content: flex-end;
  }

  &__body {
    position: relative;
    display: flex;
    flex-grow: 1;
  }

  .btn-close {
    position: absolute;
    top: 0;
    right: 0;
    border: none;
    font-size: 20px;
    padding: 10px;
    cursor: pointer;
    font-weight: bold;
    color: #4aae9b;
    background: transparent;
  }

  .btn-green {
    color: white;
    background: #4aae9b;
    border: 1px solid #4aae9b;
    border-radius: 2px;
  }
}
</style>
