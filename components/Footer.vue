<template>
  <footer class="footer footer-color">
    <v-container class="footer__container">
      <div class="font-weight-bold white--text">
        Copyright &copy; {{ new Date().getFullYear() }} | Józef Rzadkosz
      </div>
      <ul class="footer__list">
        <li
          class="footer__item"
          v-for="item in navItems"
          :key="item.id"
        >
          <nuxt-link
            :to="item.url"
            class="footer__link text-decoration-none font-weight-bold"
          >
            {{ item.title }}
          </nuxt-link>
        </li>
      </ul>
    </v-container>
  </footer>
</template>

<script>
import navItems from '@/mixins/navItems';

export default {
  mixins: [navItems],
};
</script>

<style scoped lang="scss">
.footer {
  height: 3.125rem;
  &__container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
  }
  &__list {
    list-style: none;
    display: flex;
    justify-content: flex-end;
    gap: 1rem;
  }
  &__link {
    color: var(--v-white-base);
  }
}
</style>
