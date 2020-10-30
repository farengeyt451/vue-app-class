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

        <div
          class="nav__inner"
          v-if="item.items || item.children"
        >

          <div class="nav__wrapper">

            <!-- Themes submenu -->
            <template v-if="item.items">
              <div class="nav__themes">
                <div
                  class="nav__theme"
                  v-for="theme of item.items"
                  :key="theme.url"
                >
                  <app-header-theme :theme="theme"></app-header-theme>
                </div>
              </div>

              <div class="nav__see-all">
                <router-link
                  :to="item.url"
                  class="nav__see-link"
                >
                  <span>Смотреть все темы</span>
                </router-link>
              </div>
            </template>

            <!-- Materials submenu -->
            <template v-if="item.children">
              <div class="nav__materials">
                <div
                  class="nav__material"
                  v-for="material of item.children"
                  :key="material.title"
                >
                  <app-header-material :materialBlock="material"></app-header-material>
                </div>
              </div>
            </template>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import AppHeaderTheme from './AppHeaderTheme.vue';
import AppHeaderMaterial from './AppHeaderMaterial.vue';

export default {
  /** Template modifiers */
  components: { AppHeaderTheme, AppHeaderMaterial },

  /** Interface */
  props: {
    navItems: {
      type: Array,
      required: false
    }
  },

  /** Local state */
  computed: {
    /** Take first color */
    specialLinkColor() {
      return colors => colors && Array.from(colors.split(';'))[0];
    }
  }
};
</script>

<style lang="stylus">
border-height = 2px

.nav
  height 100%
  font-family ff-main

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
  transition color 0.2s ease, border-bottom-color 0.3s

  elStates(c-accent)

.nav__link--active
  border-bottom-color c-accent

.nav__link--special
  font-weight fw-semi-bold

.nav__item:hover
  & > .nav__inner
    display block

.nav__inner
  position fixed
  top 75px
  left 0
  display none
  width 100%
  border-top 1px solid #e5e5e5
  background-color c-white

.nav__wrapper
  margin 0 auto
  padding 40px 20px
  max-width 1220px

/*
 * Themes submenu
 */
.nav__themes
  display flex
  flex-wrap wrap
  justify-content flex-start
  margin 0 -10px

.nav__theme
  flex-basis 25%
  margin-bottom 25px
  padding 0 10px

.nav__see-all
  position relative
  display block
  margin-top 50px
  text-align center

  &:before
  &:after
    position absolute
    top 50%
    width 42%
    height 2px
    background-color c-accent
    content ""
    transform translateY(-50%)

  &:before
    left 0

  &:after
    right 0

.nav__see-link
  color c-accent
  text-decoration none
  text-transform uppercase
  font-weight fw-semi-bold
  font-size 14px
  transition color 0.2s ease

  &:hover
    color darken(c-accent, 10%)

  &:active
    color darken(c-accent, 20%)

/*
 * Materials submenu
 */
.nav__materials
  display flex
  flex-wrap wrap
  justify-content flex-start
  margin 0 -50px

.nav__material
  flex-basis 25%
  margin-bottom 25px
  padding 0 50px
</style>
