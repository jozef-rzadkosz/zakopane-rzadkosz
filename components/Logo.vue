<template>
  <div
    class="logo"
    :class="`logo--${variant}`"
  >
    <svg-icon
      class="logo__icon"
      name="logo"
      width="45"
      height="15"
    ></svg-icon>
    <h1 class="logo__title text-h3 font-weight-bold">Zakopane Rzadkosz</h1>
  </div>
</template>

<script>
export default {
  name: 'Logo',
  props: {
    variant: {
      type: String,
      default: 'left',
      validator(value) {
        return ['left', 'center'].includes(value);
      },
    },
  },
};
</script>

<style scoped lang="scss">
.logo {
  display: flex;
  flex-direction: column;
  &--left {
    align-items: flex-start;
  }
  &--center {
    align-items: center;
  }
  &__icon {
  }
  &__title {
    font-family: $body-font-family !important;
    text-transform: uppercase;
    color: currentColor;
  }
}
</style>
