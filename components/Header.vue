<template>
  <header
    class="header py-md-16"
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
      <DesktopNavigation
        v-show="$vuetify.breakpoint.mdAndUp"
      ></DesktopNavigation>
      <div class="header__welcome">
        <h2 class="header__author text-h2 text-md-h1 font-weight-bold">
          {{ header?.title }}
        </h2>
        <p class="header__subtitle">
          {{ header?.subtitle }}
        </p>
        <Button
          href="#strona-glowna"
          variant="primary"
          >{{ header?.buttonTitle }}</Button
        >
      </div>
    </v-container>
    <Navigation v-show="$vuetify.breakpoint.smAndDown" />
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
  height: clamp(35rem, 60vw, 45rem);
  display: grid;
  align-items: center;
  grid-template-rows: minmax(0, 1fr);
  @media #{$md-and-up} {
    align-items: unset;
  }
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
    display: grid;
    grid-template-rows: max-content minmax(0, 1fr);
    align-items: center;
  }
  &__welcome {
    position: relative;
    z-index: 2;
    display: grid;
    grid-auto-columns: minmax(0, 1fr);
    gap: 1rem;
    @media #{$md-and-up} {
      grid-auto-columns: auto;
      justify-items: center;
      padding: 0 10%;
      gap: 1.5rem;
    }
  }
}
</style>
