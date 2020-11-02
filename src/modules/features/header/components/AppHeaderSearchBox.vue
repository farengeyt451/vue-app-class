<template>
  <form class="search">
    <input
      class="seacrh__input"
      type="text"
      name="header-search"
    >
  </form>
</template>

<script>
export default {
  /** Template dependencies*/
  components: {},

  /** Interface */
  props: {},

  /** Local state */
  data() {
    return {};
  },

  /** Non-reactive properties */
  methods: {},
};
</script>

<style lang="stylus">
.seacrh__input
  padding 10px 60px 10px 20px
  width 100%
  outline none
  border 1px solid transparent
  border-radius 40px
  background-color #f5f8f9
  background-repeat no-repeat
  color c-dark
  font-size 16px
  font-family ff-main
  transition border-color 0.2s ease-in, background-color 0.25s ease

  &:focus
    background-color darken(#f5f8f9, 5%)
</style>
