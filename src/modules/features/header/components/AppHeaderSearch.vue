<template>
  <div class="search">

    <!-- Search box -->
    <transition
      name="s-expand"
      mode="out-in"
      key="small"
    >
      <div
        class="search__box"
        v-show="isSearchBoxVisible"
      >
        <app-header-search-box></app-header-search-box>
      </div>
    </transition>

    <!-- Action icon -->
    <div class="search__icon">
      <app-header-icon
        :tooltipContent="!isSearchBoxVisible ? 'Поиск' : 'Закрыть'"
        :shouldShowTooltip="true"
        @icon-click="toggleSearchBox"
      >
        <transition
          name="s-slide-fade"
          mode="out-in"
        >
          <icon-close v-if="isSearchBoxVisible"></icon-close>
          <icon-search v-else></icon-search>
        </transition>
      </app-header-icon>
    </div>
  </div>
</template>

<script>
import IconSearch from '@/icons/IconSearch.vue';
import IconClose from '@/icons/IconClose.vue';
import AppHeaderSearchBox from './AppHeaderSearchBox.vue';
import AppHeaderIcon from './AppHeaderIcon.vue';

export default {
  /** Template dependencies*/
  components: { AppHeaderIcon, IconSearch, IconClose, AppHeaderSearchBox },

  /** Interface */
  props: {},

  /** Local state */
  data() {
    return {
      isSearchBoxVisible: false,
    };
  },

  /** Non-reactive properties */
  methods: {
    toggleSearchBox() {
      this.isSearchBoxVisible = !this.isSearchBoxVisible;
    },
  },
};
</script>

<style lang="stylus">
/*
 * Search box
 */
.search
  display flex

.search__icon
  position relative
  z-index 1

.search__box
  position relative
  left 40px
  overflow hidden
  width 350px
  border-top-right-radius 40px
  border-bottom-right-radius 40px

.s-expand-enter-active
.s-expand-leave-active
  transition width 0.2s ease

.s-expand-leave-to
  width 0

.s-expand-enter
  width 0

.s-expand-enter-to
  width 350px

.s-slide-fade-enter-active
  transition all 0.2s ease

.s-slide-fade-leave-active
  transition all 0.2s cubic-bezier(1, 0.5, 0.8, 1)

.s-slide-fade-enter
.s-slide-fade-leave-to
  opacity 0
  transform translateX(10px)
</style>
