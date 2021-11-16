<template>
  <section class="form" id="form">
    <div class="form__container container">
      <h3 class="form__title">Formularz kontaktowy</h3>
      <form @submit.prevent="handleSubmit">
        <Input :name="name" placeholder="Imię i nazwisko*" v-model="name" />
        <Button>Wyślij</Button>
      </form>
    </div>
  </section>
</template>

<script lang="ts">
import { ref } from 'vue';
import Button from '~/components/Button.vue';
import Input from '~/components/Input.vue';

export default {
  name: 'ContactForm',
  components: { Button, Input },
  setup() {
    let name = ref('');

    function handleSubmit(data: Event) {
      console.log(data, name.value);
    }
    console.log(name);

    return { name, handleSubmit };
  },
};
</script>

<style scoped lang="scss">
.form {
  padding: 4rem 0;
  background-color: var(--background);
  &__title {
    color: var(--white);
  }
}
</style>
