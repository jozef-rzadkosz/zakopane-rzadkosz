<template>
  <div id="lazy-image-wrapper">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'LazyImageWrapper',
  mounted() {
    let options = {
      root: null,
      rootMargin: '100px',
      threshold: 0.1,
    };

    let observer = new IntersectionObserver(this.observerCallback, options);
    document.querySelectorAll('img.lazy-img').forEach((el) => {
      observer.observe(el);
    });
  },
  methods: {
    observerCallback(entries, observer) {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.src = entry.target.dataset.lazySrc;
        entry.target.onload = function () {
          entry.target.classList.remove('lazy-img__loading');
        };

        entry.target.srcset = entry.target.dataset.lazySrcset;
        observer.unobserve(entry.target);
      });
    },
  },
};
</script>

<style scoped></style>
