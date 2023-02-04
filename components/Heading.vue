<template>
  <div>
    <div class="heading">
      <h2
        class="heading__title text-h2 font-weight-bold pb-3"
        :class="`heading--${position}`"
      >
        {{ title }}
      </h2>
      <div
        class="heading__line"
        :class="`heading__line--${position}`"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Heading',
  props: {
    title: {
      type: String,
      required: true,
    },
    position: {
      type: String,
      default: 'left',
      validator(value) {
        return ['left', 'center', 'right'].includes(value);
      },
    },
  },
};
</script>

<style scoped lang="scss">
.heading {
  display: grid;
  grid-auto-columns: auto;
  &--left {
    text-align: left;
  }
  &--center {
    text-align: center;
  }
  &--right {
    @media #{$md-and-up} {
      text-align: right;
    }
  }
  &__title {
  }
  &__line {
    width: 100px;
    border-top: 3px solid red;
    &--left {
      justify-self: start;
    }
    &--center {
      justify-self: center;
    }
    &--right {
      @media #{$md-and-up} {
        justify-self: end;
      }
    }
  }
}
</style>
