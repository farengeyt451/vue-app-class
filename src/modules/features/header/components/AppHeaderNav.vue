<template>
  <div class="nav">

    <div class="nav__list">
      <transition-group
        appear
        appear-class="opacity-appear"
        appear-to-class="opacity-appear-to"
        appear-active-class="opacity-appear-active"
        tag="ul"
        class="nav__group"
      >
        <li
          class="nav__item"
          v-for="item of navItems"
          :key="item.title"
        >
          <router-link
            class="nav__link"
            active-class="nav__link--active"
            exact-active-class="nav__link-- exact-active"
            :to="item.url"
            :exact="true"
            :style="{ color: item.color && specialLinkColor(item.color) }"
            :class="{ 'nav__link--special': item.color, 'nav__link--overflow': item.title.length > 25 }"
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
      </transition-group>

    </div>
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
      required: false,
    },
  },

  /** Local state */
  computed: {
    /** Take first color */
    specialLinkColor() {
      return colors => colors && Array.from(colors.split(';'))[0];
    },
  },
};
</script>

<style lang="stylus">
@import "opacity-appear"

border-height = 2px

.nav
  height 100%
  font-family ff-main

.nav__list
  margin 0
  padding 0
  height 100%

.nav__group
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
  position relative
  z-index 1
  display flex
  align-items center
  box-sizing content-box
  padding 0 15px
  height "calc(100% - %s)" % border-height
  border-bottom border-height solid transparent
  background-color c-white
  color c-black-soft
  text-decoration none
  font-weight fw-regular
  font-size 16px
  transition color 0.2s ease, border-bottom-color 0.3s

  elStates(c-accent)

.nav__link--active
  border-bottom-color c-accent

.nav__link--special
  position relative
  overflow hidden
  max-width 230px
  white-space nowrap
  font-weight fw-semi-bold

.nav__link--overflow
  &:after
    position absolute
    right 0
    width 40px
    height 100%
    background-image linear-gradient(to right, rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 1))
    content ""

.nav__item:hover
  & > .nav__inner
    visibility visible
    opacity 1
    transform translateY(0)

.nav__inner
  position fixed
  top header-height
  left 0
  z-index 0
  visibility hidden
  width 100%
  border-top 1px solid #e5e5e5
  background-color c-white
  opacity 0
  transition transform 0.4s cubic-bezier(0.55, 0.31, 0.15, 0.93), opacity 0.4s ease 0.2s
  transform translateY((-(header-height)))

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
