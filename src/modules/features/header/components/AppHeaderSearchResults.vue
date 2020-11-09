<template>
  <div class="ah-results">
    <transition
      appear
      appear-class="opacity-appear"
      appear-to-class="opacity-appear-to"
      appear-active-class="opacity-appear-active"
      tag="div"
      v-if="results.data && results.data.length"
    >
      <div class="ah-results__positive">

        <div class="ah-results__header">
          <h2 class="ah-results__count">
            Найдено {{ getSearchResultsCount() }} {{ getSearchResultsCount() | pluralize(['результат', 'результата', 'результатов']) }}
          </h2>

          <button
            class="ah-results__clear"
            @click="onResultsReset"
          >
            Очистить
          </button>
        </div>

        <perfect-scrollbar>
          <ul class="ah-results__list">
            <li
              class="ah-results__item"
              v-for="result of results.data"
              :key="result.id"
            >
              <router-link
                :to="result.url"
                class="ah-results__wrapper"
              >
                <div class="ah-results__holder">
                  <img
                    v-if="result.image"
                    class="ah-results__icon"
                    :src="getAppHost + result.image.sizes.thumb"
                    :alt="result.title"
                  >
                  <img
                    v-else
                    class="ah-results__icon"
                    src="../assets/material-placeholder.svg"
                    alt="material-placeholder"
                  >
                </div>
                <div class="ah-results__notification">
                  <h3
                    class="ah-results__title"
                    :title="result.title"
                  >
                    {{ result.title }}
                  </h3>
                  <div
                    class="ah-results__materials"
                    v-if="result.itemsCount"
                  >
                    {{ result.itemsCount }} {{ result.itemsCount | pluralize(['материал', 'материала', 'материалов']) }}
                  </div>
                </div>
              </router-link>
            </li>
          </ul>
        </perfect-scrollbar>

        <div
          v-if="getSearchResultsCount() > 20"
          class="ah-results__more"
        >
          <button-base
            :isFullWidth="true"
            @button-click="onShowAllButtonClick"
          >
            Показать все результаты
          </button-base>
        </div>
      </div>
    </transition>

    <transition
      appear
      appear-class="opacity-appear"
      appear-to-class="opacity-appear-to"
      appear-active-class="opacity-appear-active"
      tag="div"
      v-else
    >

      <div class="ah-results__negative">
        <div class="ah-results__placeholder">
          <img
            class="ah-results__source"
            src="../assets/common-placeholder.png"
            srcset="../assets/common-placeholder.png 1x, ../assets/common-placeholder2x.png 2x"
            alt="not-found"
          >
        </div>

        <div class="ah-results__result">
          <h2 class="ah-results__message">
            По вашему запросу ничего <br> не найдено
          </h2>

          <p class="ah-results__text">
            Попробуйте найти что-нибудь другое или проверить написание текущей фразы
          </p>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import ButtonBase from '@/modules/base/ButtonBase.vue';
export default {
  /** Template dependencies*/
  components: { ButtonBase },

  /** Interface */
  props: {
    results: {
      required: true,
      type: Object,
    },
  },

  /** Local state */
  computed: {
    getAppHost() {
      return process.env.VUE_APP_HOST;
    },

    getSearchResultsCount() {
      return () => this.results.headers['x-pagination-total-count'];
    },
  },

  /** Non-reactive properties */
  methods: {
    onResultsReset() {
      this.$emit('reset-results');
    },

    onShowAllButtonClick() {
      this.$router.push('/search');
    },
  },
};
</script>

<style lang="stylus">
@import "opacity-appear"

.ah-results
  padding 20px 0 30px 0
  border-radius 5px
  background-color c-white
  box-shadow 0 4px 25px rgba(0, 0, 0, 0.13)

/*
 * Top block with results count
 */
.ah-results__header
  display flex
  justify-content space-between
  align-items center
  padding 0 20px 20px 20px
  border-bottom 1px solid #ececec
  color c-grey-light
  font-weight fw-regular
  font-family ff-main

.ah-results__count
  font-size 16px
  line-height 1.2

.ah-results__clear
  padding 4px 8px
  outline none
  border 1px solid rgba(c-accent, 0.5)
  border-radius 5px
  background-color c-white
  color inherit
  font-weight inherit
  font-size 13px
  font-family inherit
  cursor pointer
  transition-timing-function ease-in
  transition-duration 0.2s
  transition-property color, background-color

  &:hover
    background-color c-accent
    color c-white

  &:active
    background-color darken(c-accent, 5%)

/*
 * Results list
 */
.ah-results__list
  list-style-type none

.ah-results__item
  padding 0 20px
  transition background-color 0.2s ease

  &:first-child
    .ah-results__wrapper
      border-top none

  &:hover
    background-color c-cream

  &:active
    background-color darken(c-cream, 5%)

/*
 * Results item
 */
.ah-results__wrapper
  display flex
  align-items center
  padding 20px 0
  border-top 1px solid #ececec
  text-decoration none

.ah-results__holder
  flex-shrink 0
  width 55px
  height 55px

.ah-results__icon
  width 100%
  height 100%
  border-radius 50%
  object-fit cover
  object-position center

.ah-results__notification
  margin-left 20px
  color c-dark
  font-weight fw-regular

.ah-results__title
  color c-dark
  text-decoration none
  text-transform capitalize
  font-weight fw-semi-bold
  font-size 16px
  line-height 1

  line-clamp(2)

.ah-results__materials
  margin-top 7px

/*
 * Show all results button
 */
.ah-results__more
  position relative
  margin-top 5px
  padding 0 20px

  &:before
    position absolute
    bottom 100%
    left 0
    width 100%
    height 40px
    background linear-gradient(180deg, rgba(255, 255, 255, 0) 0, #fff 80%)
    content ""

/*
 * Placeholder for negative result
 */
.ah-results__negative
  padding 20px 0

.ah-results__placeholder
  margin 0 auto
  width 182px

.ah-results__source
  width 100%

.ah-results__result
  margin-top 15px
  padding 0 20px
  color c-dark
  text-align center
  font-family ff-main

.ah-results__message
  font-weight fw-semi-bold
  font-size 18px
  line-height 1.3

.ah-results__text
  display block
  margin-top 10px
  font-size 16px
  line-height 1.3
</style>
