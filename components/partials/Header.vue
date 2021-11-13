<template>
  <header class="header">
    <div class="header__background" />
    <div class="header__content">
      <div class="header__container container">
        <Logo class="header__logo" />
        <h2 class="h3 header__title">
          <span class="pre-line">{{ title }}</span>
        </h2>
        <p class="header__description">
          But I must explain to you how all this mistaken idea of denouncing
          pleasure
        </p>
        <Button icon> Zobacz więcej </Button>
      </div>
    </div>
  </header>
</template>

<script>
import Logo from '~/components/Logo';
import Button from '~/components/Button';

export default {
  name: 'Header',
  data() {
    return {
      title: 'U nas poczujesz się\njak w domu',
    };
  },
  components: { Logo, Button },
};
</script>

<style scoped lang="scss">
.header {
  position: relative;
  padding: 3.5rem 0 10rem;
  background: url('/header.jpeg') center;
  &__background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: var(--black);
    opacity: 0.6;
  }
  &__content {
    position: relative;
    z-index: 1;
    color: var(--white);
  }
  &__container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  &__logo {
    margin-bottom: 11.25rem;
  }
  &__title {
    display: flex;
    flex-direction: column;
    text-transform: uppercase;
    margin-bottom: 1.75rem;
  }
  &__description {
    margin-bottom: 3rem;
  }
  &__title,
  &__description {
    text-align: center;
  }
}
</style>
