<template>
  <div
    class="gb-card"
    :style="cardData.image && { backgroundImage:  'linear-gradient(rgba(0, 0, 0, 0.1) 50%, rgba(0, 0, 0, 0.7)), url(' + getAppHost + cardData.image.sizes.thumb + ')' }"
  >

    <div
      class="gb-card__tag"
      v-if="cardData.category[0]"
    >
      <tag-base :tagData="cardData.category[0]"></tag-base>
    </div>

    <div class="gb-card__title">
      <heading-base :level="3">
        {{ cardData.title }}
      </heading-base>
    </div>

  </div>
</template>

<script>
import { TagBase, HeadingBase } from '@/modules/base';

export default {
  /** Template dependencies */
  components: {
    TagBase,
    HeadingBase,
  },

  /** Interface */
  props: {
    cardData: {
      type: Object,
      required: true,
    },
  },

  /** Local state */
  computed: {
    getAppHost() {
      return process.env.VUE_APP_HOST;
    },
  },
};
</script>

<style lang="stylus">
.gb-card
  position relative
  display flex
  align-items flex-end
  padding 20px
  height 100%
  border-radius 6px
  background-position center
  background-size auto 100%
  background-repeat no-repeat
  transition background-size 0.2s ease-in

  &:hover
    background-size auto 110%

.gb-card__tag
  position absolute
  top 20px
  right 20px

.gb-card__title
  margin-top auto

  line-clamp(4)
</style>
