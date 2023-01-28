<template>
  <section class="apar-gallery pb-6">
    <v-container>
      <h2 class="text-h2 primary--text text-uppercase py-10">Galeria</h2>
    </v-container>
    <Gallery
      class="py-4"
      v-for="g in gallery"
      :key="g.id"
      :title="g.title"
      :galleryImages="g.image"
    />
  </section>
</template>

<script>
import Gallery from '~/components/Gallery';

export default {
  components: {
    Gallery,
  },
  props: {
    gallery: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      currentImage: null,
    };
  },
  computed: {
    images() {
      return this.galleryImages;
    },
  },
};
</script>

<style scoped lang="scss">
.gallery {
  &__images {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
    grid-auto-rows: 20rem;
    gap: 1rem;
  }
  &__image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
</style>
