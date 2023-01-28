<template>
  <MyButton
    class="call-button"
    fab
    variant="secondary"
    elevation="3"
    href="tel:+48695431597"
  >
    <svg-icon
      name="call"
      width="24"
      height="24"
    ></svg-icon>
  </MyButton>
</template>

<script>
import MyButton from '~/components/Button';
export default {
  components: { MyButton },
};
</script>

<style scoped lang="scss">
.call-button {
  position: fixed;
  bottom: 4rem;
  right: 1.5rem;
  padding: 0 !important;
  transition: 0.2s $cubic-bezier;
  min-width: auto !important;
  aspect-ratio: 1/1 !important;
  z-index: 7;
  width: 4.5rem !important;
}
</style>
