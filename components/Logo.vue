<template>
  <nuxt-link
    to="/"
    class="logo logo--center"
    @click.native="goToTop"
  >
    <svg-icon
      class="logo__icon"
      name="logo"
      width="45"
      height="15"
    ></svg-icon>
    <h1 class="logo__title text-h3 font-weight-bold">Zakopane Rzadkosz</h1>
  </nuxt-link>
</template>

<script>
export default {
  name: 'Logo',
  methods: {
    goToTop() {
      window.scrollTo(0, 0);
    },
  },
};
</script>

<style scoped lang="scss">
.logo {
  display: flex;
  flex-direction: column;
  text-decoration: none;
  color: var(--v-white-base);
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
