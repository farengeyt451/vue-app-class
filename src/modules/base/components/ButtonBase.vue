<template>
  <a
    class="b-button"
    :class="{ 'b-button--wide': isFullWidth }"
    @click="onButtonClick"
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

  /** Non-reactive properties */
  methods: {
    onButtonClick(event) {
      this.$emit('button-click', event);
    },
  },
};
</script>

<style lang="stylus">
button-height = 42px

.b-button
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

.b-button--wide
  width 100%
</style>
