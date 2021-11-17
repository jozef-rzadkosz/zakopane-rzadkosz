<template>
  <footer class="footer">
    <div class="footer__container container">
      <Logo class="footer__logo" />
      <div class="footer__icons">
        <ButtonIcon link="" icon="fb" />
        <ButtonIcon link="" icon="google" />
        <ButtonIcon link="" icon="mapMarker" />
      </div>
      <NavigationList class="footer__nav" :items="navList" />
      <div class="footer__info">
        <p class="footer__item">Ul. Stachonie 29a, 34-500 Zakopane</p>
        <a href="mailto:info@zakopane-rzadkosz.pl" class="footer__link">
          info@zakopane-rzadkosz.pl
        </a>
        <a href="tel:+48603281787" class="footer__link">+48 603 281 787</a>
      </div>
    </div>
  </footer>
</template>

<script lang="ts" setup>
import Logo from '~/components/Logo.vue';
import ButtonIcon from '~/components/ButtonIcon.vue';
import NavigationList from '~/components/NavigationList.vue';

interface ListItem {
  title: string;
  link: string;
}

const navList: Array<ListItem> = [
  { title: 'O nas', link: '#o-nas' },
  { title: 'Ciekawe miejsca', link: '#ciekawe-miejsca' },
  { title: 'Galeria', link: '#galeria' },
  { title: 'Kontakt', link: '#kontakt' },
];
</script>

<style scoped lang="scss">
@use 'assets/variables' as v;
.footer {
  background-color: var(--background);
  padding: 3rem 0;
  &__container {
    display: grid;
    grid-template-areas: 'logo' 'icons' 'nav' 'info';
    gap: 1.5rem;
  }
  &__logo {
    grid-area: logo;
  }
  &__icons {
    grid-area: icons;
    display: grid;
    grid-auto-flow: column;
    gap: 1.25rem;
    justify-content: center;
  }
  &__nav {
    grid-area: nav;
  }
  &__info {
    color: var(--white);
    grid-area: info;
    text-align: center;
    display: grid;
    gap: 0.25rem;
    font-family: v.$heading-font-family;
  }
  &__item {
    margin-bottom: 0;
  }
  &__link {
    text-decoration: none;
    transition: v.$transition;
    color: var(--white);
    &:hover {
      color: var(--primary);
    }
  }
}
</style>
