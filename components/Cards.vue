<template>
  <div class="cards">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'Cards',
};
</script>

<style scoped lang="scss">
.cards {
  display: grid;
  grid-auto-flow: row;
  gap: 2.5rem;
}
</style>
