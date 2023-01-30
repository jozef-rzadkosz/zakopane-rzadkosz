<template>
  <v-btn
    fab
    small
    outlined
    elevation="0"
    type="button"
    class="social-button"
    v-bind="$attrs"
    v-on="$listeners"
    target="_blank"
  >
    <svg-icon
      width="24"
      height="24"
      :name="icon"
      class="social-button__icon"
    ></svg-icon>
  </v-btn>
</template>

<script>
export default {
  name: 'SocialButton',
  props: {
    icon: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped lang="scss">
.social-button {
  border: none;
  background-color: var(--v-primary-base);
  &:hover {
    background-color: var(--v-white-base);
  }
  &,
  &__icon {
    transition: 0.2s $cubic-bezier;
  }
  &__icon {
    color: var(--v-white-base);
  }
  &:hover &__icon {
    color: var(--v-primary-base);
  }
}
</style>
