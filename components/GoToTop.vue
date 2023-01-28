<template>
  <v-btn
    id="go-to-top"
    class="go-to-top"
    :class="{ 'go-to-top--visible': isScrollHigher }"
    fab
    variant="primary"
    @click="goToTop"
    elevation="3"
  >
    <svg-icon
      name="go-to-top"
      width="18"
      height="16"
    ></svg-icon>
  </v-btn>
</template>

<script>
export default {
  name: 'go-to-top',
  data() {
    return {
      isScrollHigher: false,
    };
  },
  mounted() {
    let options = {
      root: null,
      rootMargin: '100px',
      threshold: 0.1,
    };
    // TODO: To be done
    const obsCallback = function (entries, observer) {
      entries.forEach((entry) => {});
    };

    let observer = new IntersectionObserver(obsCallback, options);
    const goToTop = document.getElementById('go-to-top');
    observer.observe(goToTop);
  },
  methods: {
    goToTop() {
      window.scrollTo(0, 0);
    },
  },
};
</script>

<style scoped lang="scss">
.go-to-top {
  position: fixed;
  bottom: 4rem;
  right: 1.5rem;
  padding: 0 !important;
  transform: translateY(-100%);
  visibility: hidden;
  opacity: 0;
  transition: 0.2s $cubic-bezier;
  min-width: auto !important;
  aspect-ratio: 1/1 !important;
  z-index: 7;
  width: 3.5rem !important;
  &--visible {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
  }
}
</style>
