<template>
  <div class="card">
    <div class="card__container container">
      <Image class="card__image" :src="src" :alt="alt" />
      <h3 class="card__title h3">{{ title }}</h3>
      <p class="card__description">{{ description }}</p>
      <Button icon @click.native="navigate">Zobacz więcej</Button>
    </div>
  </div>
</template>

<script lang="ts">
import Image from '~/components/Image.vue';
import Button from '~/components/Button.vue';

export default {
  name: 'Card',
  components: { Button, Image },
  props: {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    src: {
      type: String,
      required: true,
    },
    link: {
      type: String,
      required: true,
    },
    alt: {
      type: String,
      required: true,
    },
  },
  methods: {
    navigate() {
      window.open(this.link, '_blank');
    },
  },
};
</script>

<style scoped lang="scss">
.card {
  padding: 2rem 0;
  &:nth-child(odd) {
    background-color: var(--card-background);
  }
  &__container {
    display: grid;
    gap: 1.25rem;
    justify-items: start;
  }
  &__image {
  }
  &__title {
  }
}
</style>
