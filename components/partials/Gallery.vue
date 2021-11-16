<template>
  <section id="gallery" class="gallery">
    <div class="container">
      <h2 class="h2 gallery__title">Galeria</h2>
      <h3 class="h5 gallery__subtitle">Kilka zdjęć z dostępnych pokoi</h3>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Gallery',
};
</script>

<style scoped lang="scss">
.gallery {
  padding: 4rem 0;
  &__title {
    margin-bottom: 0.75rem;
  }
}
</style>
