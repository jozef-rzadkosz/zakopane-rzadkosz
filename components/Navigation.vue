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
      temporary
      app
    >
      <div class="nav__container d-flex flex-column justify-space-between">
        <v-list>
          <v-list-item>
            <v-btn
              fab
              small
              outlined
              elevation="0"
              @click="drawer = false"
              type="button"
              class="nav__close my-4"
            >
              <svg-icon
                class="nav__close-icon"
                name="close"
                size="24"
              ></svg-icon>
            </v-btn>
          </v-list-item>
          <v-list-item
            v-for="item in navItems"
            :key="item.id"
            class="nav__item mx-4 font-weight-bold"
            active-class="nav__item--active"
            :to="{ path: '/', hash: item.url }"
            :ripple="false"
            @click.native="handleScrollEvent(item.url)"
          >
            <span>{{ item.name }}</span>
          </v-list-item>
        </v-list>
        <v-list class="nav__social mx-4 pb-8">
          <v-list-item
            class="nav__social-item pa-0"
            v-for="item in socialItems"
            :key="item.id"
          >
            <SocialButton
              :icon="item.name"
              :href="item.url"
            />
          </v-list-item>
        </v-list>
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
    handleScrollEvent(anchorId) {
      if (this.$route.hash) {
        const anchor = document.querySelector(`#${anchorId}`);
        if (anchor) {
          this.drawer = false;
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
  position: relative;
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
  &__close {
    border: 1px solid var(--v-border-base);
  }
  &__button,
  &__close-icon {
    width: 1.4rem;
    height: 1.4rem;
    cursor: pointer;
  }
  &__item {
    &:not(:last-of-type) {
      border-bottom: 1px solid var(--v-border-base);
    }
    &--active {
      color: var(--v-primary-base) !important;
      background-color: transparent !important;
      outline-color: transparent !important;
      &::before,
      &::after {
        display: none;
      }
    }
  }
  &__social {
    display: grid;
    grid-auto-flow: column;
    grid-auto-columns: minmax(0, max-content);
    gap: 0.5rem;
  }
  &__social-item {
    min-height: 2.375rem !important;
  }
}
</style>
