<template>
  <nav class="nav">
    <div class="d-flex justify-space-between">
      <Logo
        variant="center"
        class="nav__logo"
      ></Logo>
      <a
        class="nav__link"
        href="tel:+48603281787"
      >
        <svg-icon
          class="nav__phone"
          width="1.5rem"
          height="1.5rem"
          name="phone-solid"
        >
        </svg-icon>
        <span>+48 603 281 787</span>
      </a>
    </div>
    <div class="nav__line mt-3" />
    <ul class="nav__list">
      <li
        class="nav__item"
        v-for="item in navItems"
        :key="item.id"
      >
        <a
          class="nav__link nav__link--menu pt-4 px-4"
          :href="`#${item.url}`"
          @click="handleScrollEvent(item.url)"
          >{{ item.name }}</a
        >
      </li>
    </ul>
  </nav>
</template>

<script>
import navItems from '~/mixins/navItems';

export default {
  name: 'DesktopNavigation',
  mixins: [navItems],
  methods: {
    handleScrollEvent(anchorId) {
      if (this.$route.hash) {
        const anchor = document.querySelector(`#${anchorId}`);
        if (anchor) {
          this.$emit('close');
          window.scrollTo({
            top: anchor.getBoundingClientRect().top + window.pageYOffset,
          });
        }
      }
    },
  },
};
</script>

<style scoped lang="scss">
.nav {
  display: grid;
  grid-auto-columns: minmax(0, 1fr);
  align-items: center;
  width: 100%;
  &__line {
    width: 100%;
    height: 1px;
    background-color: var(--v-white-base);
    opacity: 0.5;
  }
  &__list {
    justify-self: end;
    list-style: none;
    display: grid;
    grid-auto-columns: minmax(0, max-content);
    grid-auto-flow: column;
  }
  &__link {
    display: flex;
    align-items: center;
    gap: 1rem;
    text-decoration: none;
    color: var(--v-white-base);
    font-weight: bold;
    transition: all 0.2s $cubic-bezier;
    font-size: 1rem;
    &:hover {
      color: var(--v-primary-base);
    }
    &--menu {
      margin-top: -1px;
      border-top: 2px solid transparent;
      &:hover {
        border-top: 2px solid var(--v-primary-base);
      }
    }
  }
}
</style>
