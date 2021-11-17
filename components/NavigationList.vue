<template>
  <ul class="nav-list">
    <li
      class="nav-list__item"
      v-for="(item, index) in props.items"
      :key="index"
    >
      <nuxt-link class="nav-list__link body-1" :to="item.link">
        {{ item.title }}
      </nuxt-link>
    </li>
  </ul>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue';

const props = defineProps({
  items: {
    type: Array,
    required: true,
  },
});
</script>

<style scoped lang="scss">
@use './assets/variables' as v;

.nav-list {
  display: grid;
  justify-items: center;
  gap: 1.25rem;
  list-style: none;
  font-family: v.$heading-font-family;
  &__item {
  }
  &__link {
    transition: v.$transition;
    text-decoration: none;
    color: var(--primary);
    &:hover {
      color: var(--white);
    }
  }
}
</style>
