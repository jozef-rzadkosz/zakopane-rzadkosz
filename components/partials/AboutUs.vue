<template>
  <section id="about-us" class="about-us">
    <div class="container">
      <h2 class="about-us__title h2">O nas</h2>
      <h3 class="about-us__subtitle h5">Krótka historia jak to się zaczęło?</h3>
      <Image class="about-us__image" src="/header_2.jpeg" shadow alt="" />
      <h3 class="about-us__experience h3">28 lat doświadczenia...</h3>
      <p class="about-us__description">
        The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax
        quiz prog.
      </p>
      <p>
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
        illo inventore veritatis et quasi architecto beatae vitae dicta sunt
        explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
        odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
        voluptatem sequi nesciunt.
      </p>
    </div>
  </section>
</template>

<script lang="ts">
import Image from '~/components/Image.vue';
export default {
  components: { Image },
};
</script>

<style lang="scss" scoped>
@use './assets/variables' as v;
.about-us {
  padding: 4rem 0;
  &__title {
    margin-bottom: 0.75rem;
  }
  &__subtitle {
    margin-bottom: 4rem;
  }
  &__image {
    margin-bottom: 3.375rem;
  }
  &__experience {
    font-weight: 400;
    margin-bottom: 0.75rem;
  }
  &__description {
    font-size: 1rem;
    font-family: v.$heading-font-family;
  }
}
</style>
