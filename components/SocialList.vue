<template>
  <ul class="social mx-4 pb-8">
    <li
      class="social__item pa-0"
      v-for="item in socialItems"
      :key="item.id"
    >
      <SocialButton
        :icon="item.name"
        :href="item.url"
      />
    </li>
  </ul>
</template>

<script>
import navItems from '@/mixins/navItems';

export default {
  name: 'SocialList',
  mixins: [navItems],
};
</script>

<style scoped lang="scss">
.social {
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: minmax(0, max-content);
  gap: 0.5rem;
  list-style: none;
  padding-left: 0;
  &__item {
    min-height: 2.375rem !important;
  }
}
</style>
