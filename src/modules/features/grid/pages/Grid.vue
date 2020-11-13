<template>
  <div class="grid">

    <transition-group
      v-if="!isLoading"
      class="grid__items"
      tag="div"
      appear
      appear-class="opacity-appear"
      appear-to-class="opacity-appear-to"
      appear-active-class="opacity-appear-active"
    >
      <router-link
        class="grid__item"
        v-for="(gridItem, index) in gridItems"
        :key="index"
        :to="gridItem.url"
      >
        <grid-base-card
          :cardData="gridItem"
          v-if="gridItem"
        >
        </grid-base-card>
      </router-link>
    </transition-group>

    <div
      v-else
      class="grid__placeholder"
    >
      <content-loader
        primaryColor="#f3f3f3"
        secondaryColor="#ecebeb"
        width="1220"
        height="1480"
      >
        <template v-for="(outerNum, outerIndex) in 5">
          <rect
            v-for="(innerNum, innerIndex) in 4"
            :key="innerNum + 10 + String(outerIndex)"
            :x="innerIndex * 300"
            :y="outerIndex *300"
            rx="6"
            ry="6"
            width="280"
            height="280"
          />
        </template>
      </content-loader>
    </div>

  </div>
</template>

<script>
import GridBaseCard from '../components/GridBaseCard.vue';
import { ContentLoader } from 'vue-content-loader';
import { v4 as uuid } from 'uuid';

export default {
  /** Template dependencies */
  components: { GridBaseCard, ContentLoader },

  /** Local state */
  computed: {
    gridItems() {
      return this.$store.state.main.cards?.data.slice(0, 20);
    },

    isLoading() {
      return this.$store.state.main.isLoading;
    },

    generateKey() {
      return uuid();
    },
  },
};
</script>

<style lang="stylus">
@import "opacity-appear"

.grid
  margin 0 auto
  padding 0 20px
  max-width 1220px
  width 100%

.grid__items
  display grid
  grid-template-columns repeat(4, 1fr)
  grid-gap 20px

.grid__item
  width 280px
  height 280px
  border-radius 6px
  text-decoration none
</style>
