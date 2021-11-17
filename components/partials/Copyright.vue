<template>
  <section class="copyright">
    <div class="copyright__container container body-2">
      <span>
        Copyright &copy; {{ getCurrentYear() }} | zakopane-rzadkosz.pl
      </span>
      <span>Made By: Józef Rzadkosz</span>
    </div>
  </section>
</template>

<script lang="ts" setup>
function getCurrentYear(): Number {
  return new Date().getFullYear();
}
</script>

<style scoped lang="scss">
@use './assets/variables' as v;

.copyright {
  background-color: var(--background);
  border-top: 2px solid var(--card-background);
  color: var(--white);
  &__container {
    display: grid;
    gap: 0.25rem;
    justify-items: center;
    padding-top: 1.5rem;
    padding-bottom: 1.5rem;
    font-family: v.$heading-font-family;
  }
}
</style>
