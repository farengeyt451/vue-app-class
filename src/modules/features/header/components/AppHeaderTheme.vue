<template>
  <router-link
    v-if="theme"
    class="ah-theme"
    :to="theme.url"
  >
    <div class="ah-theme__wrapper">
      <div class="ah-theme__holder">
        <img
          class="ah-theme__icon"
          :src="getAppHost + theme.icon.sizes.full"
          :alt="theme.title"
        >
      </div>

      <div class="ah-theme__info">
        <h4 class="ah-theme__name">{{ theme.title }}</h4>
        <div class="ah-theme__count">
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
      requred: true,
    },
  },

  /** Local state */
  computed: {
    getAppHost() {
      return process.env.VUE_APP_HOST;
    },
  },
};
</script>

<style lang="stylus">
.ah-theme
  display block
  text-decoration none
  font-family ff-main

  &:hover
    cursor pointer

    .ah-theme__name
      color c-accent

    .ah-theme__holder
      transform scale(1.025)

  &:active
    .ah-theme__name
      color darken(c-accent, 10%)

.ah-theme__wrapper
  display flex
  align-items center

.ah-theme__holder
  flex-shrink 0
  width 80px
  height 80px
  transition transform 0.2s ease

.ah-theme__icon
  width 100%
  height 100%
  object-fit cover
  object-position center

.ah-theme__info
  margin-left 15px

.ah-theme__name
  color c-black-soft
  font-weight fw-semi-bold
  font-size 18px
  line-height 1.28
  transition color 0.2s ease

  &:first-letter
    text-transform uppercase

.ah-theme__count
  display block
  margin-top 2px
  color c-grey-light
  font-size 16px
  line-height 1.5
</style>
