<template>
  <section class="contact background py-10">
    <v-container class="contact__container">
      <h2 class="contact__title text-h2 primary--text text-uppercase pb-10">
        Kontakt
      </h2>
      <ValidationObserver
        ref="form"
        v-slot="{ handleSubmit, failed, invalid }"
      >
        <form
          class="form"
          @submit.prevent="handleSubmit(onSubmit)"
        >
          <ContactInput
            v-model="form.username"
            name="name"
            label="Imię i nazwisko"
            placeholder="Podaj swoje imię i nazwisko"
            rules="required|alpha_spaces|min:3|max:100"
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
            variant="primary"
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

import ContactButton from '@/components/Button';
import ContactInput from '@/components/forms/Input';
import ContactTextarea from '@/components/forms/Textarea';

export default {
  name: 'Contact',
  components: {
    ContactInput,
    ContactButton,
    ContactTextarea,
    ValidationObserver,
  },
  props: {
    from: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      isSubmitting: false,
      message: '',
      color: '',
      snackbar: false,
      form: {
        from: this.from,
        username: '',
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
            from: this.from,
            username: '',
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
      }
    },
  },
};
</script>

<style scoped lang="scss">
.contact {
  &__container {
    @media #{$md-and-up} {
      width: 44rem !important;
      margin: 0 auto;
    }
  }
}
.form {
  display: grid;
  gap: 1rem;
  &__button {
    @media #{$md-and-up} {
      justify-self: start;
      width: auto;
    }
  }
}
</style>
