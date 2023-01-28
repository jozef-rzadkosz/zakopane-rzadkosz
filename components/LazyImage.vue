<template>
  <img
    class="lazy-img lazy-img__loading"
    :src="src"
    :alt="alt"
    :data-lazy-srcset="srcset"
    :data-lazy-src="lazySrc"
    v-on="$listeners"
  />
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      required: true,
    },
    srcset: {
      type: String,
      required: true,
    },
    lazySrc: {
      type: String,
      required: true,
    },
    alt: {
      type: [String],
      // required: true,
    },
  },
};
</script>

<style scoped lang="scss">
.lazy-img {
  width: 100%;
  object-fit: cover;
  transition: filter 0.2s $cubic-bezier;
  min-height: 19rem;
  &__loading {
    filter: blur(10px);
  }
}
</style>
