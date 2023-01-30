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
};
</script>
