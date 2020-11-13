<template>
  <div class="a-header">

    <!-- Left column -->
    <div class="a-header__column a-header__column--left">

      <router-link
        class="a-header__logo-holder"
        to="/"
      >
        <img
          class="a-header__logo"
          src="../assets/app-logo.svg"
          alt="Main logo"
        >
      </router-link>

      <nav
        class="a-header__nav"
        v-if="items"
      >
        <app-header-nav :nav-items="items"></app-header-nav>
      </nav>

      <div
        class="a-header__preloader"
        v-else
      >
        <content-loader
          primaryColor="#f3f3f3"
          secondaryColor="#ecebeb"
        >
          <rect
            v-for="(n, index) in 7"
            :key="index"
            :x="index * 55"
            y="15"
            rx="4"
            ry="4"
            width="50"
            height="12"
          />
        </content-loader>
      </div>

    </div>

    <!-- Right column -->
    <div class="a-header__column a-header__column--right">

      <!-- Action buttons (random post, search) -->
      <div class="a-header__actions">

        <div class="a-header__search">
          <app-header-search></app-header-search>
        </div>

        <div class="a-header__random">
          <app-header-icon
            tooltipContent="Случайный материал"
            :shouldShowTooltip="true"
            @icon-click="onActionIconClick"
          >
            <icon-random></icon-random>
          </app-header-icon>
        </div>
      </div>

      <!-- User menu -->
      <router-link
        tag="div"
        to="/profile"
        class="a-header__user"
      >
        <app-header-user></app-header-user>
      </router-link>
    </div>
  </div>
</template>

<script>
import { ContentLoader } from 'vue-content-loader';
import { getHeaderData } from '@/api';
import IconRandom from '@/icons/IconRandom.vue';
import AppHeaderIcon from '../components/AppHeaderIcon.vue';
const appHeaderUser = () => import('../components/AppHeaderUser.vue');
const appHeaderNav = () => import('../components/AppHeaderNav.vue');
const appHeaderSearch = () => import('../components/AppHeaderSearch.vue');
import { getDataGeneric } from '@/mixins';

export default {
  /** Template dependencies */
  components: {
    AppHeaderIcon,
    appHeaderNav,
    appHeaderUser,
    ContentLoader,
    IconRandom,
    appHeaderSearch,
  },

  mixins: [getDataGeneric(getHeaderData)],

  methods: {
    onActionIconClick() {
      this.$router.push('random-article');
    },
  },
};
</script>

<style lang="stylus">
.a-header
  display flex
  justify-content space-between
  align-items center
  padding 0 100px
  height 75px
  background-color c-white
  box-shadow 0 2px 20px rgba(0, 0, 0, 0.1)

.a-header__nav
  margin-left 75px
  height 100%

.a-header__preloader
  margin-left 90px
  min-width 700px
  width 100%
  height 100%

.a-header__column
  display flex
  align-items center
  height 100%

/*
 * Left column
 */
.a-header__logo-holder
  display block
  flex-shrink 0
  width 180px
  height 45px
  cursor pointer

.a-header__logo
  width 100%
  height 100%

/*
 * Right column
 */
.a-header__actions
  display flex

.a-header__random
  margin-left 7px

.a-header__user
  margin-left 40px
</style>
