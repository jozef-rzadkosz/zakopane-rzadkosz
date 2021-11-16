<template>
  <Header />
  <AboutUs />
  <InterestingPlaces />
  <Gallery />
  <Contact />
</template>

<script lang="ts">
import Header from '~/components/partials/Header.vue';
import AboutUs from '~/components/partials/AboutUs.vue';
import InterestingPlaces from '~/components/partials/InterestingPlaces.vue';
import Gallery from '~/components/partials/Gallery.vue';
import Contact from '~/components/partials/Contact.vue';

export default {
  components: { Contact, Gallery, InterestingPlaces, AboutUs, Header },
};
</script>

<style scoped lang="scss"></style>
