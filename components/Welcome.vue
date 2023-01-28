<template>
  <section class="welcomes background pt-10 pt-md-0">
    <slot />
  </section>
</template>

<style scoped lang="scss">
.welcomes {
  display: grid;
  gap: 2rem;
  @media #{$md-and-up} {
    gap: 0;
  }
}
</style>
