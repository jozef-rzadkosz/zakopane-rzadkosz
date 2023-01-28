<template>
  <div class="welcome">
    <div class="welcome__image-wrapper">
      <img
        :src="image.src"
        :alt="image.alt"
        :srcset="image.webpSrcSet"
        class="welcome__image"
      />
    </div>
    <div class="welcome__content">
      <h2 class="welcome__title text-h2 text-uppercase primary--text">
        {{ title }}
      </h2>
      <h3
        v-if="subtitle"
        class="welcome__subtitle text-h3 text-uppercase mb-4"
      >
        {{ subtitle }}
      </h3>
      <div
        class="welcome__description mt-4"
        v-html="sanitizeText(description)"
      ></div>
    </div>
  </div>
</template>

<script>
import sanitizeText from '@/mixins/sanitizeText';

export default {
  mixins: [sanitizeText],
  props: {
    image: {
      type: Object,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    subtitle: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped lang="scss">
.welcome {
  display: grid;
  grid-template-areas: 'content' 'image';
  gap: 2.5rem;
  @media #{$md-and-up} {
    grid-template-areas: 'content image';
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 0;
  }
  &:nth-child(2n + 1) {
    @media #{$md-and-up} {
      grid-template-areas: 'image content';
    }
  }
  &__image-wrapper {
    grid-area: image;
    max-height: 20rem;
    @media #{$md-and-up} {
      max-height: unset;
    }
  }
  &__image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    min-height: 10rem;
    @media #{$md-and-up} {
      height: 0;
      min-height: 100%;
    }
  }
  &__content {
    grid-area: content;
    padding: 0 1rem;
    @media #{$md-and-up} {
      padding: 10vw 5vw;
    }
  }
}
</style>
