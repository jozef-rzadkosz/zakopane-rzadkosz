<template>
  <section id="interesting-places" class="interesting">
    <div class="container">
      <h2 class="interesting__title h2">Ciekawe miejsca</h2>
      <p class="interesting__description">
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
        illo inventore veritatis et quasi architecto beatae vitae dicta sunt
        explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
        odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
        voluptatem sequi nesciunt. Neque porro quisquam est,
      </p>
    </div>
    <Cards>
      <Card
        v-for="place in places"
        :key="place.id"
        :title="place.title"
        :description="place.description"
        :src="place.src"
        :alt="place.alt"
        :link="place.link"
      />
    </Cards>
  </section>
</template>

<script lang="ts">
import Cards from '~/components/Cards.vue';
import Card from '~/components/Card.vue';

interface Places {
  id: number;
  title: string;
  src: string;
  description: string;
  link: string;
  alt: string;
}

interface Data {
  places: Places[];
}

export default {
  name: 'InterestingPlaces',
  data(): Data {
    return {
      places: [
        {
          id: 1,
          title: 'Giewont',
          src: '/header_2.jpeg',
          description:
            'Lorem ipsum dolor sit amet, consetetursadipscing elitr, sed diam nonumy eirmodtempor invidunt ut labore et dolore magnaaliquyam erat, sed diam voluptua. At vero eoset accusam et justo duo dolores et ea rebum.Stet clita kasd gubergren, no sea takimatasanctus est Lorem ipsum dolor sit amet.Lorem ipsum dolor sit.',
          link: 'https://google.pl',
          alt: '',
        },
        {
          id: 2,
          title: 'Kasprowy Wierch',
          src: '/header.jpeg',
          description:
            'Lorem ipsum dolor sit amet, consetetursadipscing elitr, sed diam nonumy eirmodtempor invidunt ut labore et dolore magnaaliquyam erat, sed diam voluptua. At vero eoset accusam et justo duo dolores et ea rebum.Stet clita kasd gubergren, no sea takimatasanctus est Lorem ipsum dolor sit amet.Lorem ipsum dolor sit.',
          link: 'https://google.pl',
          alt: '',
        },
        {
          id: 3,
          title: 'Morskie Oko',
          src: '/header_v3.jpeg',
          description:
            'Lorem ipsum dolor sit amet, consetetursadipscing elitr, sed diam nonumy eirmodtempor invidunt ut labore et dolore magnaaliquyam erat, sed diam voluptua. At vero eoset accusam et justo duo dolores et ea rebum.Stet clita kasd gubergren, no sea takimatasanctus est Lorem ipsum dolor sit amet.Lorem ipsum dolor sit.',
          link: 'https://google.pl',
          alt: '',
        },
        {
          id: 4,
          title: 'Krupówki',
          src: '/telluride-gc4cdb750f_1920.jpeg',
          description:
            'Lorem ipsum dolor sit amet, consetetursadipscing elitr, sed diam nonumy eirmodtempor invidunt ut labore et dolore magnaaliquyam erat, sed diam voluptua. At vero eoset accusam et justo duo dolores et ea rebum.Stet clita kasd gubergren, no sea takimatasanctus est Lorem ipsum dolor sit amet.Lorem ipsum dolor sit.',
          link: 'https://google.pl',
          alt: '',
        },
        {
          id: 5,
          title: 'Skocznia narciarska',
          src: '/ski-facility-g9a99aae9d_1920.jpeg',
          description:
            'Lorem ipsum dolor sit amet, consetetursadipscing elitr, sed diam nonumy eirmodtempor invidunt ut labore et dolore magnaaliquyam erat, sed diam voluptua. At vero eoset accusam et justo duo dolores et ea rebum.Stet clita kasd gubergren, no sea takimatasanctus est Lorem ipsum dolor sit amet.Lorem ipsum dolor sit.',
          link: 'https://google.pl',
          alt: '',
        },
      ],
    };
  },
  components: {
    Cards,
    Card,
  },
};
</script>

<style scoped lang="scss">
.interesting {
  padding-top: 4rem;
  background-color: var(--background);
  color: var(--white);
  &__title {
    margin-bottom: 1.125rem;
  }
  &__description {
    margin-bottom: 4rem;
  }
}
</style>
