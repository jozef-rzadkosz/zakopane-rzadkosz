<template>
  <div class="logo">
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
};
</script>

<style scoped lang="scss">
.logo {
  &__icon {
  }
  &__title {
    text-transform: uppercase;
  }
}
</style>
