<template>
  <router-link
    v-if="theme"
    class="theme"
    :to="theme.url"
  >
    <div class="theme__wrapper">
      <div class="theme__holder">
        <img
          class="theme__icon"
          :src="getAppHost + theme.icon.sizes.full"
          :alt="theme.title"
        >
      </div>

      <div class="theme__info">
        <h4 class="theme__name">{{ theme.title }}</h4>
        <div class="theme__count">
          {{ theme.count }} {{ theme.count | pluralize(['публикация', 'публикации', 'публикаций']) }}
        </div>
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  /** Interface */
  props: {
    theme: {
      type: Object,
      requred: true
    }
  },

  /** Local state */
  computed: {
    getAppHost() {
      return process.env.VUE_APP_HOST;
    }
  }
};
</script>

<style lang="stylus">
.theme
  display block
  text-decoration none
  font-family ff-main

  &:hover
    cursor pointer

    .theme__name
      color c-accent

    .theme__holder
      transform scale(1.025)

  &:active
    .theme__name
      color darken(c-accent, 10%)

.theme__wrapper
  display flex
  align-items center

.theme__holder
  flex-shrink 0
  width 80px
  height 80px
  transition transform 0.2s ease

.theme__icon
  width 100%
  height 100%
  object-fit cover
  object-position center

.theme__info
  margin-left 15px

.theme__name
  margin 0
  color c-black-soft
  font-weight fw-semi-bold
  font-size 18px
  line-height 1.28
  transition color 0.2s ease

  &:first-letter
    text-transform uppercase

.theme__count
  display block
  margin-top 2px
  color c-grey-light
  font-size 16px
  line-height 1.5
</style>
