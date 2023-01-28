<template>
  <section class="gallery">
    <v-container>
      <h2 class="gallery__title text-h2 primary--text text-uppercase pb-4">
        {{ title }}
      </h2>
      <div class="gallery__images">
        <div
          class="gallery__image-wrapper"
          v-for="(image, index) in images"
          :key="image.id"
        >
          <img
            :src="image.responsiveImage.src"
            :alt="image.responsiveImage.alt"
            :srcset="image.responsiveImage.webpSrcSet"
            @click="currentImage = index"
            class="gallery__image"
          />
        </div>
      </div>
      <CoolLightBox
        :items="images.map((image) => image.responsiveImage.src)"
        :index="currentImage"
        @close="currentImage = null"
      />
    </v-container>
  </section>
</template>

<script>
import 'vue-cool-lightbox/dist/vue-cool-lightbox.min.css';

import CoolLightBox from 'vue-cool-lightbox';

export default {
  components: {
    CoolLightBox,
  },
  props: {
    title: { type: String, required: true },
    galleryImages: { type: Array, required: true },
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
    grid-template-columns: repeat(auto-fit, minmax(18rem, 1fr));
    grid-auto-rows: 20rem;
    gap: 1rem;
  }
  &__image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: 0.2s $cubic-bezier;
  }
  &__image-wrapper {
    overflow: hidden;
  }
  &__image-wrapper:hover &__image {
    @media #{$md-and-up} {
      transform: scale(1.1);
      cursor: pointer;
    }
  }
}
</style>
