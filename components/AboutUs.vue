<template>
  <section
    id="o-nas"
    class="about-us py-10 py-md-16"
  >
    <v-container>
      <Cards>
        <Card
          v-for="(card, index) in allAbouts"
          :key="card.id"
          :card="card"
          :position="index % 2 === 0 ? 'left' : 'right'"
        />
      </Cards>
    </v-container>
  </section>
</template>

<script>
export default {
  name: 'AboutUs',
  props: {
    allAbouts: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped></style>
