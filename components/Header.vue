<template>
  <header
    class="header"
    id="header"
  >
    <LazyImage
      class="header__image"
      :src="header.image?.blurUpThumb"
      :alt="header.image?.responsiveImage?.alt"
      :srcset="header.image?.responsiveImage?.webpSrcSet"
      :lazy-src="header.image?.responsiveImage?.src"
    />
    <div class="header__cover" />
    <v-container class="header__container text-center white--text">
      <h2 class="header__author text-h2 font-weight-bold">
        {{ header?.title }}
      </h2>
      <p class="header__subtitle">
        {{ header?.subtitle }}
      </p>
      <Button variant="primary">{{ header?.buttonTitle }}</Button>
    </v-container>
    <Navigation />
    <GoToTop />
  </header>
</template>

<script>
import sanitizeText from '~/mixins/sanitizeText';

export default {
  mixins: [sanitizeText],
  props: {
    header: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped lang="scss">
.header {
  position: relative;
  height: clamp(30rem, 30vw, 50rem);
  display: grid;
  align-items: center;
  grid-template-rows: minmax(0, 1fr);
  &__image {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 0;
    height: 100%;
  }
  &__cover {
    position: absolute;
    background: rgba(0, 0, 0, 0.5);
    top: 0;
    left: 0;
    z-index: 1;
    width: 100%;
    height: 100%;
  }
  &__container {
    position: relative;
    z-index: 2;
  }
}
</style>
