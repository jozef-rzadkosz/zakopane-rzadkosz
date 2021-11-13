<template>
  <div class="logo">
    <div class="logo__image">
      <img src="/logo.svg" alt="" />
    </div>
    <h1 class="logo__title">Zakopane Rzadkosz</h1>
  </div>
</template>

<script>
export default {
  name: 'Logo',
};
</script>

<style scoped lang="scss">
@use './assets/variables' as v;

.logo {
  display: flex;
  flex-direction: column;
  align-items: center;
  &__image {
  }
  &__title {
    font-family: v.$body-font-family;
    text-transform: uppercase;
    font-size: 1.25rem;
    color: var(--white);
  }
}
</style>
