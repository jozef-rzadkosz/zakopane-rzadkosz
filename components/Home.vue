<template>
  <section
    class="home py-10 py-md-16 background"
    id="strona-glowna"
  >
    <v-container>
      <div class="d-flex justify-md-center pb-10 pb-md-16">
        <Heading
          :title="home?.title"
          :position="$vuetify.breakpoint.mdAndUp ? 'center' : 'left'"
        />
      </div>
      <div v-html="sanitizeText(home?.description)"></div>
    </v-container>
  </section>
</template>

<script>
import sanitizeText from '~/mixins/sanitizeText';

export default {
  name: 'Home',
  mixins: [sanitizeText],
  props: {
    home: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped lang="scss"></style>
