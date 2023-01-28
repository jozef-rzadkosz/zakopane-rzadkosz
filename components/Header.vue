<template>
  <header class="header">
    <img
      class="header__image"
      :src="image.src"
      :alt="image.alt"
      :srcset="image.webpSrcSet"
    />
    <v-container class="header__container text-center white--text">
      <h1 class="header__title text-h1">Zdobywcy Tatr</h1>
      <h2 class="header__author font-weight-bold">
        Wawrzyniec Gąsienica Mracielnik
      </h2>
      <Navigation />
    </v-container>
  </header>
</template>

<script>
export default {
  props: {
    image: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped lang="scss">
.header {
  position: relative;
  max-height: 100vh;
  &__image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  &__container {
    position: relative;
    z-index: 1;
    min-height: 300px;
    display: grid;
    grid-auto-columns: minmax(0, 1fr);
    align-items: center;
    align-content: center;
    @media #{$md-and-up} {
      min-height: 32rem;
      gap: 2.5rem;
    }
  }
  &__title,
  &__author {
    text-shadow: 1px 1px 10px $black-text-shadow;
  }
  &__author {
    font-size: clamp(1.25rem, 5vw, 1.5rem);
  }
}
</style>
