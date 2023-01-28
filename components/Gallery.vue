<template>
  <section
    id="galeria"
    class="gallery py-10 py-md-16 background"
  >
    <v-container>
      <div class="d-flex justify-start justify-md-center pb-10 pb-md-16">
        <Heading :title="gallery?.title" />
      </div>
    </v-container>
    <GalleryComponent :images="gallery?.image" />
  </section>
</template>

<script>
export default {
  props: {
    gallery: {
      type: Object,
      required: true,
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
