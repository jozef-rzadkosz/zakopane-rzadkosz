<template>
  <ul class="list px-4">
    <li class="list__item">
      <v-btn
        fab
        small
        outlined
        elevation="0"
        @click="onClose"
        type="button"
        class="list__close my-6"
      >
        <svg-icon
          class="list__icon"
          name="close"
          size="24"
        ></svg-icon>
      </v-btn>
    </li>
    <li
      v-for="item in navItems"
      :key="item.id"
      class="list__item font-weight-bold"
    >
      <a
        class="list__link py-2 px-2"
        @click="handleScrollEvent(item.url)"
        :href="`#${item.url}`"
        >{{ item.name }}</a
      >
    </li>
  </ul>
</template>

<script>
import navItems from '~/mixins/navItems';

export default {
  name: 'NavigationList',
  mixins: [navItems],
  methods: {
    onClose() {
      this.$emit('close');
    },
    handleScrollEvent(anchorId) {
      if (this.$route.hash) {
        const anchor = document.querySelector(`#${anchorId}`);
        if (anchor) {
          this.$emit('close');
          window.scrollTo({
            top: anchor.getBoundingClientRect().top + window.pageYOffset,
          });
        }
      }
    },
  },
};
</script>

<style scoped lang="scss">
.list {
  list-style: none;
  padding-left: 0;
  &__item {
  }
  &__close {
  }
  &__icon {
    width: 1.5rem;
  }
  &__link {
    display: block;
    text-decoration: none;
    color: var(--v-font-color);
  }
}
</style>
