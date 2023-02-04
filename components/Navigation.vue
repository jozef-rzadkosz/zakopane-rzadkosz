<template>
  <nav class="nav">
    <div
      class="nav__wrapper d-flex justify-space-between align-center px-6"
      :class="{
        'nav__wrapper--active': isScrollHigher,
        'nav__wrapper--show': isScrollUp && isScrollHigher,
      }"
    >
      <Logo
        variant="left"
        :class="{
          'black--text': isScrollHigher,
          'white--text': !isScrollHigher,
        }"
      />
      <svg-icon
        class="nav__button"
        :class="{
          'black--text': isScrollHigher,
          'white--text': !isScrollHigher,
        }"
        name="menu"
        width="22"
        height="22"
        @click="drawer = !drawer"
      ></svg-icon>
    </div>
    <v-navigation-drawer
      v-model="drawer"
      right
      app
    >
      <div class="nav__container d-flex flex-column justify-space-between">
        <NavigationList @close="drawer = false" />
        <SocialList />
      </div>
    </v-navigation-drawer>
  </nav>
</template>

<script>
import navItems from '~/mixins/navItems';

export default {
  name: 'Navigation',
  mixins: [navItems],
  data() {
    return {
      drawer: false,
      scrollLastPosition: 0,
      isScrollUp: true,
      isScrollHigher: false,
    };
  },
  beforeMount() {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      this.isScrollUp = this.scrollLastPosition > window.scrollY;
      this.isScrollHigher = window.scrollY > 30;
      this.scrollLastPosition = window.scrollY;
    },
  },
};
</script>

<style scoped lang="scss">
.nav {
  position: relative;
  ::v-deep {
    .v-navigation-drawer {
      height: var(--app-height) !important;
    }
  }
  &__wrapper {
    position: fixed;
    top: 0;
    height: 3.75rem;
    width: 100%;
    transition: 0.2s $cubic-bezier;
    z-index: 5;
    &--active {
      transform: translateY(-100%);
    }
    &--show {
      transform: translateY(0);
      background-color: var(--v-white-base);
      box-shadow: 0 3px 6px $button-inner-shadow;
    }
  }
  &__container {
    height: 100%;
  }

  &__button {
    width: 1.4rem;
    height: 1.4rem;
    cursor: pointer;
  }
}
</style>
