<template>
  <button class="btn-icon">
    <component :is="switchIcons" class="btn-icon__icon" />
  </button>
</template>

<script lang="ts" setup>
import { computed, defineProps } from 'vue';
import Fb from '~/components/icons/Fb.vue';
import Google from '~/components/icons/Google.vue';
import MapMarker from '~/components/icons/MapMarker.vue';

// interface Icons {
//   [key: string]: Component;
// }

const props = defineProps({
  icon: {
    type: String,
    required: true,
  },
});

const icons: any = {
  fb: Fb,
  google: Google,
  mapMarker: MapMarker,
};

const switchIcons = computed(() => {
  return icons[props.icon];
});
</script>

<style scoped lang="scss">
@use './assets/variables' as v;

.btn-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 2.1rem;
  width: 2.1rem;
  border-radius: 100%;
  background-color: var(--primary);
  border: 2px solid var(--primary);
  cursor: pointer;
  &,
  &__icon {
    transition: v.$transition;
  }
  &:hover {
    background-color: var(--white);
  }
  &__icon {
    color: var(--white);
  }
  &:hover &__icon {
    color: var(--primary);
  }
}
</style>
