<template>
  <img class="image" :src="src" alt="" :class="{ 'image--shadow': shadow }" />
</template>

<script>
export default {
  name: 'Image',
  props: {
    src: {
      type: String,
      required: true,
    },
    shadow: {
      type: Boolean,
      default: false,
    },
    //  TODO: Add ALT and SRCSET
  },
};
</script>

<style scoped lang="scss">
.image {
  border-radius: 6px;
  width: 100%;
  height: 100%;
  object-fit: cover;
  &--shadow {
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.38);
  }
}
</style>
