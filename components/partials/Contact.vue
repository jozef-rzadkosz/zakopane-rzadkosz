<template>
  <section id="contact" class="contact">
    <div class="contact__container container">
      <h3 class="contact__title h3">Zadaj nam pytanie</h3>
      <p class="contact__description">
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor.
      </p>
      <p class="contact__divider">lub</p>
      <Button icon>Zarezerwuj teraz</Button>
    </div>
  </section>
  <ContactForm />
</template>

<script lang="ts">
import Button from '~/components/Button.vue';
import ContactForm from '~/components/partials/ContactForm.vue';
export default {
  name: 'Contact',
  components: { ContactForm, Button },
};
</script>

<style scoped lang="scss">
@use './assets/variables' as v;
.contact {
  padding: 4rem 0;
  text-align: center;
  &__container {
    display: grid;
    justify-items: center;
  }
  &__title {
    margin-bottom: 0.875rem;
  }
  &__description {
    margin-bottom: 0;
  }
  &__description,
  &__divider {
    font-family: v.$heading-font-family;
  }
  &__divider {
    margin: 2rem 0;
  }
}
</style>
