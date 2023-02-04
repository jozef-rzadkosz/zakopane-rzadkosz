<template>
  <div class="card">
    <Heading
      class="card__title mb-10"
      :title="card?.title"
      :position="position"
    />
    <LazyImage
      :alt="card?.image?.responsiveImage?.alt"
      :srcset="card?.image?.responsiveImage?.webpSrcSet"
      :lazy-src="card?.image?.responsiveImage?.src"
      :src="card?.image?.blurUpThumb"
      class="card__image mb-4 mb-md-0"
    />
    <div
      class="card__description"
      v-html="sanitizeText(card.description)"
    ></div>
  </div>
</template>

<script>
import sanitizeText from '~/mixins/sanitizeText';

export default {
  name: 'Card',
  mixins: [sanitizeText],
  props: {
    card: {
      type: Object,
      required: true,
    },
    position: {
      type: String,
    },
  },
};
</script>

<style scoped lang="scss">
.card {
  display: grid;
  grid-template-areas: 'title' 'image' 'description';
  @media #{$md-and-up} {
    grid-template-areas: 'title image' 'description image';
    grid-template-columns: repeat(2, minmax(0, 1fr));
    column-gap: 3rem;
  }
  &:nth-child(2n + 2) {
    @media #{$md-and-up} {
      grid-template-areas: 'image title' 'image description';
    }
  }
  &:nth-child(2n + 2) &__title {
    @media #{$md-and-up} {
      justify-self: end;
    }
  }
  &__title {
    grid-area: title;
  }
  &__image {
    grid-area: image;
    @media #{$md-and-up} {
      height: 0;
      min-height: 100% !important;
    }
  }
  &__description {
    grid-area: description;
  }
}
</style>
