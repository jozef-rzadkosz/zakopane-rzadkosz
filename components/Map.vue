<template>
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2600.9945439086196!2d19.993225316452964!3d49.31438697933462!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4715f24f8a0e7c2b%3A0xab885a928d3da463!2sStachonie%2029A%2C%2034-500%20Zakopane!5e0!3m2!1spl!2spl!4v1675089326566!5m2!1spl!2spl"
    class="map"
    style="border: 0"
    allowfullscreen=""
    loading="lazy"
    referrerpolicy="no-referrer-when-downgrade"
  ></iframe>
</template>

<script>
export default {
  name: 'MyMap',
};
</script>

<style scoped lang="scss">
.map {
  display: block;
  width: 100%;
  height: 500px;
}
</style>
