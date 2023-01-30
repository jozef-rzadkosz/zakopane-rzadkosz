<template>
  <v-btn
    class="btn text-button"
    :class="`btn--${variant}`"
    v-bind="$attrs"
    v-on="$listeners"
    :v-ripple="false"
  >
    <slot />
    <svg-icon
      v-show="icon"
      class="btn__icon"
      name="arrow"
    ></svg-icon>
  </v-btn>
</template>

<script>
export default {
  name: 'ContactButton',
  props: {
    variant: {
      type: String,
      required: true,
    },
    icon: {
      type: Boolean,
      default: () => false,
    },
  },
};
</script>

<style scoped lang="scss">
.btn {
  padding-bottom: 4px !important;
  min-height: 3rem;
  height: 3.875rem !important;
  transition: 0.2s $cubic-bezier;
  width: 100%;
  color: var(--v-white-base) !important;
  border-radius: 0;
  &--primary {
    color: var(--v-primary-base) !important;
    background-color: transparent !important;
    border: 3px solid var(--v-primary-base);
    &:hover {
      background-color: var(--v-primary-base) !important;
      color: var(--v-white-base) !important;
    }
  }
  &--secondary {
    background-color: var(--v-primary-base) !important;
    color: var(--v-white-base) !important;
    border: 3px solid var(--v-primary-base);
    &:hover {
      background-color: transparent !important;
      color: var(--v-primary-base) !important;
    }
  }
  &__icon {
    width: 1.5rem;
    height: 1.5rem;
  }
  ::v-deep {
    &.v-btn--disabled {
      border: 3px solid var(--v-placeholder-base) !important;
      cursor: not-allowed;
    }
  }
}
</style>
