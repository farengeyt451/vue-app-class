<template>
  <a
    class="button"
    :class="{ 'button--wide': isFullWidth }"
  >
    <slot></slot>
  </a>
</template>

<script>
export default {
  /** Template dependencies*/
  components: {},

  /** Interface */
  props: {
    isFullWidth: {
      required: false,
      default: false,
    },
  },

  /** Lifecycle events */
};
</script>

<style lang="stylus">
button-height = 42px

.button
  display inline-block
  padding 0 20px
  height button-height
  border-radius 3px
  background-color c-accent
  color c-white
  text-align center
  text-transform uppercase
  font-size 14px
  line-height button-height
  cursor pointer
  transition background-color 0.2s ease

  &:hover
    background-color darken(c-accent, 5%)

  &:active
    background-color lighten(c-accent, 5%)

.button--wide
  width 100%
</style>
