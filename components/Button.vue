<template>
  <button class="btn">
    <slot />
    <Arrow class="btn__icon" v-if="icon" />
  </button>
</template>

<script>
import Arrow from '~/components/Arrow';

export default {
  name: 'Button',
  components: { Arrow },
  props: {
    icon: [Boolean],
  },
};
</script>

<style scoped lang="scss">
@use './assets/variables' as v;

.btn {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem 1.875rem;
  background: var(--primary);
  border: 2px solid var(--primary);
  color: var(--white);
  border-radius: 6px;
  transition: v.$transition;
  cursor: pointer;
  font-weight: 600;
  &:hover {
    background-color: var(--white);
    color: var(--primary);
  }
  &__icon {
    margin-left: 0.5rem;
  }
}
</style>
