<template>
  <router-link
    :to="tagData.url"
    class="b-tag"
  >
    {{ tagData.title }}
  </router-link>
</template>

<script>
export default {
  /** Interface */
  props: {
    tagData: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="stylus">
.b-tag
  display inline-block
  padding 6px 15px
  border-radius 3px
  background-color c-white
  color #2e3e4c
  text-decoration none
  text-transform uppercase
  font-weight fw-semi-bold
  font-size 12px
  font-family ff-main
  transition-duration 400ms
  transition-property background-color, color

  &:hover
    background-color #abbfc6
    color c-white

  &:active
    background-color #86a7b3

/*
 * Themes
 */
.b-tag
  &.dark-theme
    background-color c-grey-dark
    color c-white

    &:hover
      background-color c-accent

    &:active
      background-color #eb4209

  &.gray-theme
    background-color c-grey-blue
    color c-white

    &:hover
      background-color #95a7ad

    &:active
      background-color #86a7b3
</style>
