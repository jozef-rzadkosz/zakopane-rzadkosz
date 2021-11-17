<template>
  <textarea
    :type="type"
    :id="name"
    :name="name"
    :placeholder="placeholder"
    class="input"
    v-model="modelValue"
  />
</template>

<script lang="ts">
import { computed } from 'vue';

export default {
  name: 'Textarea',
  props: {
    modelValue: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      default: 'text',
    },
    placeholder: {
      type: String,
      required: true,
    },
  },
  setup(props: { modelValue: string }, { emit }) {
    const modelValue = computed({
      get() {
        return props.modelValue;
      },
      set(value) {
        emit('input', value);
      },
    });

    return { modelValue };
  },
};
</script>

<style scoped lang="scss">
@use './assets/variables' as v;
.input {
  border-radius: 6px;
  padding: 0.625rem;
  height: 7rem;
  width: 100%;
  font-family: v.$heading-font-family;
  font-size: 0.875rem;
  border: none;
}
</style>
