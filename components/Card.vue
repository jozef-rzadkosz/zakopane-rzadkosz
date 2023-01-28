<template>
  <div class="card">
    <div>
      <img
        :src="image.src"
        :alt="image.alt"
        :srcset="image.webpSrcSet"
        class="card__image"
      />
    </div>
    <h2 class="card__title text-h2 text-uppercase primary--text pb-3">
      {{ title }}
    </h2>
    <div
      class="card__description"
      v-html="sanitizeText(description)"
    ></div>
  </div>
</template>

<script>
import sanitizeText from '@/mixins/sanitizeText';

export default {
  name: 'Card',
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
    description: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped lang="scss">
.card {
  &__image {
    width: 100%;
    height: 15rem;
    object-fit: cover;
  }
  &__title {
  }
}
</style>
