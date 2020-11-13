<template>
  <div class="ah-nav">

    <div class="ah-nav__list">
      <transition-group
        appear
        appear-class="opacity-appear"
        appear-to-class="opacity-appear-to"
        appear-active-class="opacity-appear-active"
        tag="ul"
        class="ah-nav__group"
      >
        <li
          class="ah-nav__item"
          v-for="item of navItems"
          :key="item.title"
        >
          <router-link
            class="ah-nav__link"
            active-class="ah-nav__link--active"
            exact-active-class="ah-nav__link-- exact-active"
            :to="item.url"
            :exact="true"
            :style="{ color: item.color && specialLinkColor(item.color) }"
            :class="{ 'ah-nav__link--special': item.color, 'ah-nav__link--overflow': item.title.length > 25 }"
          >
            {{ item.title }}
          </router-link>

          <div
            class="ah-nav__inner"
            v-if="item.items || item.children"
          >

            <div class="ah-nav__wrapper">

              <!-- Themes submenu -->
              <template v-if="item.items">
                <div class="ah-nav__themes">
                  <div
                    class="ah-nav__theme"
                    v-for="theme of item.items"
                    :key="theme.url"
                  >
                    <app-header-theme :theme="theme"></app-header-theme>
                  </div>
                </div>

                <div class="ah-nav__see-all">
                  <router-link
                    :to="item.url"
                    class="ah-nav__see-link"
                  >
                    <span>Смотреть все темы</span>
                  </router-link>
                </div>
              </template>

              <!-- Materials submenu -->
              <template v-if="item.children">
                <div class="ah-nav__materials">
                  <div
                    class="ah-nav__material"
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
      return (colors) => colors && Array.from(colors.split(';'))[0];
    },
  },
};
</script>

<style lang="stylus">
@import "opacity-appear"

border-height = 2px

.ah-nav
  height 100%
  font-family ff-main

.ah-nav__list
  height 100%

.ah-nav__group
  display flex
  height 100%
  list-style-type none

.ah-nav__item
  padding 0
  height 100%
  list-style-type none

.ah-nav__link
  position relative
  z-index 2
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

.ah-nav__link--active
  border-bottom-color c-accent

.ah-nav__link--special
  position relative
  overflow hidden
  max-width 230px
  white-space nowrap
  font-weight fw-semi-bold

.ah-nav__link--overflow
  &:after
    position absolute
    right 0
    width 40px
    height 100%
    background-image linear-gradient(to right, rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 1))
    content ""

.ah-nav__item:hover
  & > .ah-nav__inner
    visibility visible
    opacity 1
    transform translateY(0)

.ah-nav__inner
  position absolute
  top header-height
  left 0
  z-index 1
  visibility hidden
  width 100%
  border-top 1px solid #e5e5e5
  background-color c-white
  opacity 0
  transition transform 0.2s cubic-bezier(0.55, 0.31, 0.15, 0.93), opacity 0.2s ease 0.2s
  transform translateY((-(header-height)))

.ah-nav__wrapper
  margin 0 auto
  padding 40px 20px
  max-width 1220px

/*
 * Themes submenu
 */
.ah-nav__themes
  display flex
  flex-wrap wrap
  justify-content flex-start
  margin 0 -10px

.ah-nav__theme
  flex-basis 25%
  margin-bottom 25px
  padding 0 10px

.ah-nav__see-all
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

.ah-nav__see-link
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
.ah-nav__materials
  display flex
  flex-wrap wrap
  justify-content flex-start
  margin 0 -50px

.ah-nav__material
  flex-basis 25%
  margin-bottom 25px
  padding 0 50px
</style>
