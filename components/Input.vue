<template>
  <input
    :type="type"
    :id="name"
    :name="name"
    :placeholder="placeholder"
    class="input"
    v-model="model"
  />
</template>

<script lang="ts">
import { computed } from 'vue';

export default {
  name: 'Input',
  props: {
    value: {
      type: String,
      default: '',
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
  setup(props: { value: string }, { emit }) {
    const model = computed({
      get() {
        return props.value;
      },
      set(value) {
        emit('input', value);
      },
    });

    return { model };
  },
};
</script>

<style scoped lang="scss">
.input {
  border-radius: 6px;
  padding: 0 0.625rem;
  height: 2.25rem;
  width: 100%;
  font-family: inherit;
}
</style>
