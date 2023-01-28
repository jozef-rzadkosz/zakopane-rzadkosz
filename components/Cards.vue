<template>
  <section class="cards py-10">
    <v-container class="cards__container">
      <slot />
    </v-container>
  </section>
</template>

<script>
export default {
  name: 'Cards',
};
</script>

<style scoped lang="scss">
.cards {
  &__container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(16rem, 1fr));
    gap: 2rem;
  }
}
</style>
