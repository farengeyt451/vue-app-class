<template>
  <div class="nav">

    <ul class="nav__list">
      <li
        class="nav__item"
        v-for="item of navItems"
        :key="item.id"
      >
        <router-link
          class="nav__link"
          :to="item.url"
          :exact="true"
          active-class="nav__link--active"
          exact-active-class="nav__link-- exact-active"
          :style="{ color: item.color && specialLinkColor(item.color) }"
          :class="{ 'nav__link--special': item.color }"
        >
          {{ item.title }}
        </router-link>
      </li>
    </ul>
  </div>

</template>

<script>
export default {
  /** Props */
  props: {
    navItems: {
      type: Array,
      required: false
    }
  },

  /** Local state */
  data() {
    return {};
  },

  computed: {
    /** Take first color */
    specialLinkColor() {
      return colors => colors && Array.from(colors.split(';'))[0];
    }
  },

  /** Lifecycle events */
  // created() {},

  /** Non-reactive properties */
  methods: {}
};
</script>

<style lang="stylus">
border-height = 2px

.nav
  height 100%

.nav__list
  display flex
  margin 0
  padding 0
  height 100%
  list-style-type none

.nav__item
  padding 0
  height 100%
  list-style-type none

.nav__link
  display flex
  align-items center
  box-sizing content-box
  padding 0 15px
  height "calc(100% - %s)" % border-height
  border-bottom border-height solid transparent
  color c-black-soft
  text-decoration none
  font-weight fw-regular
  font-size 16px
  font-family ff-main
  transition color 0.2s ease, border-bottom-color 0.3s

  elStates(c-accent)

.nav__link--active
  border-bottom-color c-accent

.nav__link--special
  font-weight fw-semi-bold
</style>
