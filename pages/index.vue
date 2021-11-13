<template>
  <Header />
  <AboutUs />
  <InterestingPlaces />
</template>

<script lang="ts">
import Header from '~/components/partials/Header.vue';
import AboutUs from '~/components/partials/AboutUs.vue';
import InterestingPlaces from '~/components/partials/InterestingPlaces.vue';

export default {
  components: { InterestingPlaces, AboutUs, Header },
};
</script>

<style scoped lang="scss"></style>
