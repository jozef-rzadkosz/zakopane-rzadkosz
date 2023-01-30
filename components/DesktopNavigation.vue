<template>
  <nav class="nav">
    <ul class="nav__list">
      <li
        class="nav__item"
        v-for="item in navItems"
        :key="item.id"
      >
        <nav-link :to="item.url">{{ item.name }}</nav-link>
      </li>
    </ul>
  </nav>
</template>

<script>
import navItems from '~/mixins/navItems';

export default {
  name: 'DesktopNavigation',
  mixins: [navItems],
};
</script>

<style scoped></style>
