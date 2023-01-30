<template>
  <v-btn
    class="go-to-top primary"
    :class="{ 'go-to-top--visible': isIntersecting }"
    fab
    @click="goToTop"
    elevation="3"
  >
    <svg-icon
      class="white--text"
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
      isIntersecting: false,
    };
  },
  mounted() {
    let options = {
      root: null,
      rootMargin: '-50px',
      threshold: 0.1,
    };
    let observer = new IntersectionObserver(this.obsCallback, options);
    const goToTop = document.getElementById('header');
    observer.observe(goToTop);
  },
  methods: {
    goToTop() {
      window.scrollTo(0, 0);
    },
    obsCallback(entries, observer) {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          this.isIntersecting = true;
        } else {
          this.isIntersecting = false;
        }
      });
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
