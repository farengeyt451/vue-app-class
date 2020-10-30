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
            v-for="(n, index) in 6"
            :key="index"
            :x="index * 67"
            y="12"
            rx="4"
            ry="4"
            width="62"
            height="12"
          />
        </content-loader>
      </div>

    </div>

    <!-- Right column -->
    <div class="header__column header__column--right">

      <!-- Action buttons (random post, search) -->
      <div class="header__actions">
        <div class="header__icon header__icon--random">
          <app-header-icon
            @icon-click="onIconClick"
            :shouldShowTooltip="true"
            tooltipContent="Случайный материал"
          >
            <icon-random></icon-random>
          </app-header-icon>
        </div>

        <div class="header__icon header__icon--search">
          <app-header-icon
            @icon-click="onIconClick"
            :shouldShowTooltip="true"
            tooltipContent="Поиск"
          >
            <icon-search></icon-search>
          </app-header-icon>
        </div>
      </div>

      <!-- User menu -->
      <div class="header__user">
        <app-header-user></app-header-user>
      </div>
    </div>
  </div>
</template>

<script>
import { ContentLoader, ListLoader } from 'vue-content-loader';
import { getHeaderData } from '@/api/rest/grid.ts';
import AppHeaderNav from '../components/AppHeaderNav.vue';
import AppHeaderIcon from '../components/AppHeaderIcon.vue';
import AppHeaderUser from '../components/AppHeaderUser.vue';
import IconRandom from '@/icons/IconRandom.vue';
import IconSearch from '@/icons/IconSearch.vue';

export default {
  /** Template dependencies */
  components: {
    AppHeaderNav,
    AppHeaderIcon,
    IconRandom,
    IconSearch,
    AppHeaderUser,
    ContentLoader,
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
      this.fetchHeaderData();
    }, 2000);
  },

  /** Non-reactive properties */
  methods: {
    fetchHeaderData() {
      this.swithLoadingFlagTo(true);

      getHeaderData()
        .then(this.handleSuccessResponse)
        .catch(this.handleErrorResponse)
        .finally(() => {
          this.swithLoadingFlagTo(false);
        });
    },

    handleSuccessResponse(data) {
      console.log('log: handleSuccessResponse -> data', data);
      this.contentItems = data;
    },

    handleErrorResponse(error) {
      console.error(error);
    },

    swithLoadingFlagTo(flag) {
      this.isLoading = flag;
    },

    onIconClick(event) {
      console.log(event);
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
  min-width 800px
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

.header__icon--search
  margin-left 10px

.header__user
  margin-left 40px
</style>
