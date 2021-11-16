<template>
  <Header />
  <AboutUs />
  <InterestingPlaces />
  <Gallery />
</template>

<script lang="ts">
import Header from '~/components/partials/Header.vue';
import AboutUs from '~/components/partials/AboutUs.vue';
import InterestingPlaces from '~/components/partials/InterestingPlaces.vue';
import Gallery from '~/components/partials/Gallery.vue';

export default {
  components: { Gallery, InterestingPlaces, AboutUs, Header },
};
</script>

<style scoped lang="scss"></style>
