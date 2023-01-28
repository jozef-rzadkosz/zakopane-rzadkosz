<template>
  <section class="gallery">
    <v-container>
      <div class="gallery__images">
        <div
          class="image"
          v-for="(image, index) in images"
          :key="image?.id"
        >
          <div class="image__wrapper">
            <LazyImage
              :src="image?.blurUpThumb"
              :alt="image?.responsiveImage?.alt"
              :srcset="image?.responsiveImage?.webpSrcSet"
              :lazy-src="image?.responsiveImage?.src"
              @click="currentImage = index"
              class="image__photo"
            />
          </div>
        </div>
      </div>
      <CoolLightBox
        :items="images.map((image) => image?.responsiveImage?.src)"
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
    images: { type: Array, required: true },
  },
  data() {
    return {
      currentImage: null,
    };
  },
};
</script>

<style scoped lang="scss">
.gallery {
  &__images {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(18rem, 1fr));
    grid-auto-rows: 20rem;
    gap: 0.25rem;
  }
}
.image {
  overflow: hidden;
  cursor: pointer;
  &__wrapper {
    height: 100%;
    transition: 0.2s $cubic-bezier;
  }
  &__photo {
    height: 100%;
  }
  &:hover &__wrapper {
    scale: 1.1;
  }
}
</style>
