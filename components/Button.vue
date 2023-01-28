<template>
  <v-btn
    class="btn text-button"
    :class="`btn--${variant}`"
    v-bind="$attrs"
    v-on="$listeners"
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
  name: 'MmpButton',
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

  &--large-text ::v-deep .v-btn__content {
    padding-top: 0.75rem;
    padding-bottom: 0.75rem;
    flex: unset !important;
    white-space: normal;
  }
  &--no-upper-borders {
    border-top-left-radius: 0 !important;
    border-top-right-radius: 0 !important;
  }
  &__icon {
    width: 1.5rem;
    height: 1.5rem;
  }
}
</style>
