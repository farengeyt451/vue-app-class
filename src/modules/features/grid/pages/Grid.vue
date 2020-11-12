<template>
  <div class="grid">
    <router-link
      class="grid__item"
      v-for="(gridItem, index) in gridItems"
      :key="index"
      :to="gridItem.url"
    >
      <grid-base-card
        :cardData="gridItem"
        v-if="gridItem"
      ></grid-base-card>
    </router-link>
  </div>
</template>

<script>
import GridBaseCard from '../components/GridBaseCard.vue';

export default {
  /** Template dependencies */
  components: { GridBaseCard },

  /** Interface */
  props: {
    gridItems: {
      type: Array,
      required: false,
    },
  },
};
</script>

<style lang="stylus">
.grid
  display grid
  margin 0 auto
  padding 0 20px
  max-width 1220px
  width 100%
  grid-template-columns repeat(4, 1fr)
  grid-gap 20px

.grid__item
  width 280px
  height 280px
  border-radius 6px
  text-decoration none
</style>
