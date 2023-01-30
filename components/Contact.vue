<template>
  <section
    id="kontakt"
    class="contact py-10 py-md-16"
  >
    <v-container class="contact__container">
      <Heading
        title="Kontakt"
        class="pb-10 pb-md-16"
      />
      <ValidationObserver
        ref="form"
        v-slot="{ handleSubmit, failed, invalid }"
      >
        <form
          class="form"
          @submit.prevent="handleSubmit(onSubmit)"
        >
          <ContactInput
            v-model="form.name"
            name="name"
            label="Imię"
            placeholder="Podaj swoje imię"
            rules="required|min:3|max:100"
            class="contact__input"
          />
          <ContactInput
            v-model="form.surname"
            name="surname"
            label="Nazwisko"
            placeholder="Podaj swoje nazwisko"
            rules="required|min:3|max:100"
            class="contact__input"
          />
          <ContactInput
            v-model="form.email"
            name="email"
            label="Adres Email"
            placeholder="Podaj swój adres email"
            rules="required|email"
            class="contact__input"
          />
          <ContactInput
            v-model="form.phone"
            name="phone"
            label="Numer telefonu"
            placeholder="Podaj swój numer telefonu"
            rules="required|min:9|max:12|numeric"
            class="contact__input"
          />
          <ContactTextarea
            v-model="form.message"
            label="Treść wiadomości"
            name="message"
            placeholder="Wpisz tutaj treść wiadomości"
            rules="required|min:10|max:1000"
            class="contact__textarea"
          />
          <ContactButton
            class="form__button"
            variant="secondary"
            type="submit"
            :disabled="failed && invalid"
          >
            {{ isSubmitting ? 'Wysyłam...' : 'Wyślij swoje zgłoszenie' }}
          </ContactButton>
        </form>
      </ValidationObserver>
    </v-container>
    <v-snackbar
      :color="color"
      v-model="snackbar"
      top
      right
    >
      <span class="text-body-1 font-weight-black">{{ message }}</span>
    </v-snackbar>
  </section>
</template>

<script>
import { ValidationObserver } from 'vee-validate';

import ContactButton from '~/components/Button';
import ContactInput from '~/components/forms/Input';
import ContactTextarea from '~/components/forms/Textarea';

export default {
  name: 'Contact',
  components: {
    ContactInput,
    ContactButton,
    ContactTextarea,
    ValidationObserver,
  },
  data() {
    return {
      isSubmitting: false,
      message: '',
      color: '',
      snackbar: false,
      form: {
        name: '',
        surname: '',
        email: '',
        phone: '',
        message: '',
      },
    };
  },
  methods: {
    async onSubmit() {
      this.isSubmitting = true;
      this.message = '';
      this.color = '';

      try {
        const resp = await this.$axios.post('/contact', this.form);
        if (resp.status === 200) {
          this.form = {
            name: '',
            surname: '',
            email: '',
            phone: '',
            message: '',
          };
          this.message = 'Wysłano pomyślnie';
          this.color = 'green';
          this.$refs.form.reset();
          this.isSubmitting = false;
          this.snackbar = true;
        }
      } catch (err) {
        this.isSubmitting = false;
        this.color = 'red';
        this.message = 'Nie udało się wysłać wiadomości';
        this.snackbar = true;
        console.error(err);
      }
    },
  },
};
</script>

<style scoped lang="scss">
.contact {
  &__textarea {
    @media #{$md-and-up} {
      grid-column: 1/-1;
    }
  }
}
.form {
  display: grid;
  gap: 1rem;
  @media #{$md-and-up} {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  &__button {
    @media #{$md-and-up} {
      justify-self: start;
      width: auto;
    }
  }
}
</style>
