<template>
  <perfect-scrollbar>
    <ul class="ah-results">
      <li
        class="ah-result"
        v-for="result of results.data"
        :key="result.id"
      >
        <router-link
          :to="result.url"
          class="ah__wrapper"
        >
          <div
            class="ah__icon-holder"
            v-if="result.image"
          >
            <img
              :src="getAppHost + result.image.sizes.thumb"
              :alt="result.title"
              class="ah__icon"
            >
          </div>
          <div class="ah__info">
            <h3
              class="ah__title"
              :title="result.title"
            >
              {{ result.title }}
            </h3>
            <div class="ah__count">
              {{ result.itemsCount }} {{ result.itemsCount | pluralize(['материал', 'материала', 'материалов']) }}
            </div>
          </div>
        </router-link>
      </li>
    </ul>
  </perfect-scrollbar>
</template>

<script>
export default {
  /** Template dependencies*/
  components: {},

  /** Interface */
  props: {
    results: {
      required: true,
    },
  },

  /** Local state */
  // data() {},
  computed: {
    getAppHost() {
      return process.env.VUE_APP_HOST;
    },
  },

  /** Events */
  watch: {},

  /** Non-reactive properties */
  methods: {},
};
</script>

<style lang="stylus">
.ah-results
  margin 0
  padding 20px 0 40px 0
  border-radius 5px
  background-color c-white
  box-shadow 0 4px 25px rgba(0, 0, 0, 0.13)
  list-style-type none

.ah-result
  padding 0 20px
  transition background-color 0.2s ease

  &:first-child
    .ah__wrapper
      border-top none

  &:hover
    background-color c-cream

.ah__wrapper
  display flex
  align-items center
  padding 20px
  border-top 1px solid #ececec
  text-decoration none

.ah__icon-holder
  flex-shrink 0
  width 55px
  height 55px

.ah__icon
  width 100%
  height 100%
  border-radius 50%
  object-fit cover
  object-position center

.ah__info
  margin-left 20px
  color c-dark
  font-weight fw-regular

.ah__title
  margin 0
  color c-dark
  text-decoration none
  text-transform capitalize
  font-weight fw-semi-bold
  font-size 16px
  line-height 1

  line-clamp(2)

.ah__count
  margin-top 7px
</style>
