<template>
  <div class="ah-search">

    <!-- Search box -->
    <transition
      name="s-expand"
      mode="out-in"
      key="small"
      @after-enter="commitOnFlagChange(true)"
      @after-leave="commitOnFlagChange(false)"
    >
      <div
        class="ah-search__box"
        v-show="isSearchBoxVisible"
      >
        <app-header-search-box
          @pending-status="onPendingStatusChange"
          @search-results="onSearchResultsChange"
          :resetSearchQuery="results"
        >
        </app-header-search-box>
      </div>
    </transition>

    <!-- Action icon -->
    <div class="ah-search__icon">
      <app-header-icon
        :tooltipContent="!isSearchBoxVisible ? 'Поиск' : 'Закрыть'"
        :shouldShowTooltip="true"
        :class="{ 'loading-theme': isQueryPending }"
        @icon-click="toggleSearchBox"
      >
        <transition
          name="s-slide-fade"
          mode="out-in"
        >
          <template v-if="!isQueryPending">
            <icon-close v-if="isSearchBoxVisible"></icon-close>
            <icon-search v-else></icon-search>
          </template>

          <template v-else>
            <icon-loading></icon-loading>
          </template>
        </transition>
      </app-header-icon>
    </div>

    <div
      class="ah-search__results"
      :class="{ 'ah-search__results--visible': isSearchBoxVisible }"
      v-if="results"
    >
      <app-header-search-results
        :results="results"
        @reset-results="onResultsReset"
      >
      </app-header-search-results>
    </div>
  </div>
</template>

<script>
import IconSearch from '@/icons/IconSearch.vue';
import IconClose from '@/icons/IconClose.vue';
import IconLoading from '@/icons/IconLoading.vue';
import AppHeaderSearchBox from './AppHeaderSearchBox.vue';
import AppHeaderIcon from './AppHeaderIcon.vue';
import AppHeaderSearchResults from './AppHeaderSearchResults';

export default {
  /** Template dependencies*/
  components: { AppHeaderIcon, IconSearch, IconClose, IconLoading, AppHeaderSearchBox, AppHeaderSearchResults },

  /** Local state */
  data() {
    return {
      isSearchBoxVisible: false,
      isQueryPending: false,
      results: null,
      resetSearchQuery: false,
    };
  },

  /** Non-reactive properties */
  methods: {
    toggleSearchBox() {
      this.isSearchBoxVisible = !this.isSearchBoxVisible;
    },

    onPendingStatusChange(isPending) {
      this.isQueryPending = isPending;
    },

    onSearchResultsChange(results) {
      this.setResultsData(results);
    },

    onResultsReset() {
      this.results = null;
    },

    setResultsData(results) {
      this.results = results;
    },

    commitOnFlagChange(flag) {
      this.$store.commit('setIsSearchBoxOpenedFlagTo', flag);
    },
  },
};
</script>

<style lang="stylus">
/*
 * Search box
 */
.ah-search
  position relative
  display flex

.ah-search__icon
  position relative
  z-index 1

.ah-search__icon--disabled
  pointer-events none

.ah-search__box
  position relative
  left 40px
  overflow hidden
  width 350px
  border-top-right-radius 40px
  border-bottom-right-radius 40px

/*
 * Search results
 */
.ah-search__results
  position absolute
  top 100%
  right 0
  z-index 2
  display block
  margin-top 30px
  max-width 350px
  width 100%
  opacity 0

  @import "perfect-scrollbar"

  .ps
    max-height 400px
    height 100%

.ah-search__results--visible
  opacity 1
  transition opacity 0.2s ease 0.2s

/*
 * Open/close search input animation
 */
.s-expand-enter-active
.s-expand-leave-active
  transition width 0.2s ease

.s-expand-leave-to
  width 0

.s-expand-enter
  width 0

.s-expand-enter-to
  width 350px

/*
 * Change icons animation
 */
.s-slide-fade-enter-active
  transition all 0.2s ease

.s-slide-fade-leave-active
  transition all 0.2s cubic-bezier(1, 0.5, 0.8, 1)

.s-slide-fade-enter
.s-slide-fade-leave-to
  opacity 0
  transform translateX(10px)
</style>
