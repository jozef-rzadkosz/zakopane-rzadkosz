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
      class="mb-4"
    />
    <div v-html="sanitizeText(card.description)"></div>
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
  &:nth-child(2n + 2) &__title {
    @media #{$md-and-up} {
      justify-self: end;
    }
  }
  &__title {
  }
}
</style>
