<template>
  <nav class="nav">
    <ul class="nav__list px-0">
      <nuxt-link
        :to="item.url"
        v-for="item in navItems"
        :key="item.id"
        class="nav__item d-flex flex-column align-center justify-center text-decoration-none px-1"
      >
        <svg-icon
          :name="item.icon"
          width="24"
          height="24"
          v-show="!$vuetify.breakpoint.mdAndUp"
        ></svg-icon>
        <span class="font-weight-bold">{{ item.title }}</span>
      </nuxt-link>
    </ul>
  </nav>
</template>

<script>
import navItems from '@/mixins/navItems';

export default {
  mixins: [navItems],
};
</script>

<style scoped lang="scss">
.nav {
  position: fixed;
  left: 0;
  bottom: 0;
  background-color: var(--v-secondary-base);
  width: 100%;
  height: 50px;

  @media #{$md-and-up} {
    position: static;
    background-color: transparent;
    height: auto;
    width: auto;
  }
  &__list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(0, 1fr));
    height: 100%;
    list-style: none;
    @media #{$md-and-up} {
      grid-template-columns: repeat(auto-fit, minmax(0, max-content));
      justify-content: center;
      gap: 2.5rem;
    }
  }
  &__item {
    font-size: clamp(0.625rem, 3.25vw, 0.75rem);
    height: 100%;
    color: var(--v-white-base);
    transition: 0.2s $cubic-bezier;
    &:hover {
      color: var(--v-primary-base);
    }
    @media #{$md-and-up} {
      font-size: 1.25rem;
    }
  }
}
</style>
