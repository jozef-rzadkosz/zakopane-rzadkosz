<template>
  <img
    class="lazy-img"
    :src="src"
    @onload="onLoad"
    :alt="alt"
    ref="image"
  />
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      required: true,
    },
    // srcset: {
    //   type: String,
    //   required: true,
    // },
    alt: {
      type: [String],
      required: true,
    },
  },

  methods: {
    onLoad() {},
  },
};
</script>

<style scoped lang="scss">
.lazy-img {
  width: 100%;
}
</style>
