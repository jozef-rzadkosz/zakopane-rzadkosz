<template>
  <section class="form" id="form">
    <div class="form__container container">
      <h3 class="form__title h3">Formularz kontaktowy</h3>
      <form class="form__wrapper" @submit.prevent="handleSubmit">
        <Input :name="name" placeholder="Imię i nazwisko*" v-model="name" />
        <Input
          :name="email"
          type="email"
          placeholder="Adres E-mail*"
          v-model="email"
        />
        <Textarea
          :name="message"
          placeholder="Treść wiadomości*"
          v-model="message"
        />
        <Button>Wyślij</Button>
      </form>
    </div>
  </section>
</template>

<script lang="ts">
import { ref, watch } from 'vue';
import Button from '~/components/Button.vue';
import Input from '~/components/Input.vue';
import Textarea from '~/components/Textarea.vue';

export default {
  name: 'ContactForm',
  components: { Textarea, Button, Input },
  setup() {
    const name = ref('');
    const email = ref('');
    const message = ref('');

    function handleSubmit(data: Event) {
      console.log(data, name.value, email.value, message.value);
    }

    return { name, email, message, handleSubmit };
  },
};
</script>

<style scoped lang="scss">
.form {
  padding: 4rem 0;
  background-color: var(--background);
  &__title {
    color: var(--white);
    margin-bottom: 2rem;
  }
  &__wrapper {
    display: grid;
    gap: 1rem;
  }
}
</style>
