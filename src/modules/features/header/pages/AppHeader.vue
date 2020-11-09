<template>
  <div class="header">

    <!-- Left column -->
    <div class="header__column header__column--left">

      <router-link
        class="header__logo-holder"
        to="/"
      >
        <img
          class="header__logo"
          src="../assets/app-logo.svg"
          alt="Main logo"
        >
      </router-link>

      <nav
        class="header__nav"
        v-if="contentItems"
      >
        <app-header-nav :nav-items="contentItems"></app-header-nav>
      </nav>

      <div
        class="header__preloader"
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
    <div class="header__column header__column--right">

      <!-- Action buttons (random post, search) -->
      <div class="header__actions">

        <div class="header__search">
          <app-header-search></app-header-search>
        </div>

        <div class="header__random">
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
        class="header__user"
      >
        <app-header-user></app-header-user>
      </router-link>
    </div>
  </div>
</template>

<script>
import { ContentLoader } from 'vue-content-loader';
import { getHeaderData, isUserAuthenticated } from '@/api';
import IconRandom from '@/icons/IconRandom.vue';
import AppHeaderIcon from '../components/AppHeaderIcon.vue';
const appHeaderUser = () => import('../components/AppHeaderUser.vue');
const appHeaderNav = () => import('../components/AppHeaderNav.vue');
const appHeaderSearch = () => import('../components/AppHeaderSearch.vue');

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

  /** Local state */
  data() {
    return {
      isLoading: false,
      contentItems: null,
      error: null,
    };
  },

  /** Lifecycle events */
  created() {
    /** Delay to see placeholder */
    setTimeout(() => {
      this.getData();
    }, 1000);
  },

  /** Non-reactive properties */
  methods: {
    getData() {
      this.switchLoadingFlagTo(true);

      getHeaderData()
        .then(this.handleSuccessResponse)
        .catch(this.handleErrorResponse)
        .finally(() => {
          this.switchLoadingFlagTo(false);
        });
    },

    handleSuccessResponse(data) {
      console.log('log: handleSuccessResponse -> data', data);
      this.contentItems = data;
    },

    handleErrorResponse(error) {
      console.error(error);
    },

    switchLoadingFlagTo(flag) {
      this.isLoading = flag;
    },

    onActionIconClick(event) {
      this.$router.push('random-article');
    },
  },
};
</script>

<style lang="stylus">
.header
  display flex
  justify-content space-between
  align-items center
  padding 0 100px
  height 75px
  background-color c-white
  box-shadow 0 2px 20px rgba(0, 0, 0, 0.1)

.header__nav
  margin-left 75px
  height 100%

.header__preloader
  margin-left 90px
  min-width 700px
  width 100%
  height 100%

.header__column
  display flex
  align-items center
  height 100%

/*
 * Left column
 */
.header__logo-holder
  display block
  flex-shrink 0
  width 180px
  height 45px
  cursor pointer

.header__logo
  width 100%
  height 100%

/*
 * Right column
 */
.header__actions
  display flex

.header__random
  margin-left 10px

.header__user
  margin-left 40px
</style>
