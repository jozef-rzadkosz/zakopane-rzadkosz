<template>
  <div>
    <Header :header="header" />
    <Home :home="home" />
    <AboutUs :allAbouts="allAbouts" />
    <Gallery :gallery="gallery" />
    <Contact />
    <Map />
    <Footer :text="footer?.text" />
  </div>
</template>

<script>
import { request } from '~/datocms';
import { HOME_QUERY } from '~/graphql';

export default {
  components: {},
  asyncData() {
    return new Promise((resolve, reject) => {
      request({
        query: HOME_QUERY,
      })
        .then((data) => resolve(data))
        .catch((err) => reject(err));
    });
  },
  data() {
    return {
      title: 'Zakopane-Rzadkosz - Wynajem pokoi i apartamentów',
      description:
        'Zakopane-Rzadkosz to najlepsze miejsce do wynajmu pokoi i apartamentów w Zakopanem. Oferujemy komfortowe i dobrze wyposażone pokoje w najlepszej lokalizacji w Zakopanem.',
      siteName: 'Zakopane-Rzadkosz',
      url: 'https://zakopane-rzadkosz.pl/',
      image: 'https://zakopane-rzadkosz.pl/images/og-image.jpg',
    };
  },
  head() {
    return {
      title: this.title,
      meta: [
        {
          name: 'robots',
          content: 'index, follow',
        },
        {
          title: this.title,
        },
        {
          hid: 'description',
          name: 'description',
          content: this.description,
        },
        {
          hid: 'og:title',
          name: 'og:title',
          content: this.title,
        },
        {
          hid: 'og:type',
          name: 'og:type',
          content: 'website',
        },
        {
          hid: 'og:url',
          name: 'og:url',
          content: this.url,
        },
        {
          hid: 'og:image',
          name: 'og:image',
          content: this.image,
        },
        {
          hid: 'og:site_name',
          name: 'og:site_name',
          content: this.siteName,
        },
        {
          hid: 'og:description',
          name: 'og:description',
          content: this.description,
        },
      ],
    };
  },
};
</script>
