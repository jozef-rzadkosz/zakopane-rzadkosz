<template>
  <footer class="footer footer-color py-10 py-md-16">
    <v-container class="footer__container white--text">
      <Logo class="footer__logo" />
      <div
        class="footer__description"
        v-html="sanitizeText(text)"
      ></div>
      <ul class="footer__menu">
        <li
          class="footer__item"
          v-for="item in navItems"
          :key="item.id"
        >
          <nuxt-link
            :to="{ path: '/', hash: item.url }"
            class="footer__link text-decoration-none"
          >
            {{ item.name }}
          </nuxt-link>
        </li>
      </ul>
      <div class="footer__call-to-action call-to-action">
        <p>Zadzwoń i zarezerwuj</p>
        <a
          href="tel:+48603281787"
          class="footer__link text-h3 text-decoration-none font-weight-bold"
          >+48 603 281 787</a
        >
        <a
          href="mailto:info@zakopane-rzadkosz.pl"
          class="footer__mail text-decoration-none"
          >info@zakopane-rzadkosz.pl</a
        >
        <div class="call-to-action__social">
          <SocialButton
            v-for="item in socialItems"
            :key="item.id"
            :href="item.url"
            :icon="item.name"
          />
        </div>
      </div>
      <div class="footer__line"></div>
      <div class="footer__copyright white--text">
        Copyright &copy; {{ new Date().getFullYear() }} | Zakopane-Rzadkosz.pl
      </div>
    </v-container>
  </footer>
</template>

<script>
import navItems from '~/mixins/navItems';
import sanitizeText from '~/mixins/sanitizeText';

export default {
  mixins: [navItems, sanitizeText],
  props: {
    text: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped lang="scss">
.footer {
  &__container {
    display: grid;
    grid-template-areas: 'logo' 'description' 'menu' 'call-to-action' 'line' 'copyright';
    gap: 1rem;
    @media #{$md-and-up} {
      grid-template-columns: repeat(3, minmax(0, 1fr));
      grid-template-areas: 'logo . .' 'description menu call-to-action' 'line line line' '. copyright copyright';
    }
  }
  &__logo {
    grid-area: logo;
    justify-self: start;
  }
  &__description {
    grid-area: description;
  }
  &__menu {
    grid-area: menu;
    list-style: none;
    padding-left: 0;
    @media #{$md-and-up} {
      justify-self: center;
    }
  }
  &__link {
  }
  &__mail {
    opacity: 0.5;
  }
  &__link,
  &__mail {
    color: var(--v-white-base);
    transition: 0.2s $cubic-bezier;
    &:hover {
      color: var(--v-primary-base);
      opacity: 1;
    }
  }
  &__call-to-action {
    grid-area: call-to-action;
    @media #{$md-and-up} {
      justify-self: end;
      text-align: right;
    }
  }
  &__line {
    grid-area: line;
    height: 2px;
    background-color: var(--v-background-base);
    opacity: 0.5;
  }
  &__copyright {
    grid-area: copyright;
    @media #{$md-and-up} {
      justify-self: end;
    }
  }
}

.call-to-action {
  display: grid;
  gap: 1rem;
  @media #{$md-and-up} {
    justify-items: end;
  }
  &__social {
    display: flex;
    gap: 1rem;
  }
}
</style>
