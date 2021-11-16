<template>
  <section id="gallery" class="gallery">
    <div class="container">
      <h2 class="h2 gallery__title">Galeria</h2>
      <h3 class="h5 gallery__subtitle">Kilka zdjęć z dostępnych pokoi</h3>
      <div class="gallery__container">
        <div class="gallery__thumbnail" v-for="image in images" :key="image.id">
          <img class="gallery__image" :src="image.src" alt="" />
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
interface LightboxImage {
  id: number;
  src: string;
}
export default {
  name: 'Gallery',
  setup() {
    // Define Lightbox when available
    const images: Array<LightboxImage> = [
      { id: 1, src: '/header.jpeg' },
      { id: 2, src: '/header_2.jpeg' },
      { id: 3, src: '/header_v3.jpeg' },
      { id: 4, src: '/header_4.jpeg' },
      { id: 5, src: '/header_5.jpeg' },
      { id: 6, src: '/ski-facility-g9a99aae9d_1920.jpeg' },
      { id: 7, src: '/telluride-gc4cdb750f_1920.jpeg' },
    ];
    return { images };
  },
};
</script>

<style scoped lang="scss">
.gallery {
  padding: 4rem 0;
  background-color: var(--gallery-background);
  &__title {
    margin-bottom: 0.75rem;
  }
  &__subtitle {
    margin-bottom: 4rem;
  }
  &__container {
    display: grid;
    gap: 1rem;
  }
  &__image {
    width: 100%;
    min-height: 12.5rem;
    border-radius: 6px;
    object-fit: cover;
  }
}
</style>
