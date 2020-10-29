<template>
  <div
    class="icon"
    @click="onIconClick"
  >
    <div class="icon__wrapper">
      <icon-base :viewBox="viewBox">
        <slot></slot>
      </icon-base>
    </div>
  </div>
</template>

<script>
import IconBase from '@/modules/base/IconBase.vue';

export default {
  /** Components*/
  components: {
    IconBase
  },

  /** Props */
  props: {
    viewBox: {
      type: String,
      default: '0 0 16 16'
    }
  },

  /** Local state */
  data() {
    return {};
  },

  /** Non-reactive properties */
  methods: {
    onIconClick(event) {
      this.$emit('icon-click', event);
    }
  }
};
</script>

<style lang="stylus">
.icon
  display flex
  justify-content center
  align-items center
  width 40px
  height 40px
  border-radius 50%
  background-color c-light
  color c-grey-light
  transition-timing-function ease
  transition-duration 0.2s
  transition-property color, background-color

  &:hover
    background-color c-accent
    color c-white
    cursor pointer

  &:active
    background-color darken(c-accent, 5%)

.icon__wrapper
  width 16px
  height 16px

.accent-theme
  background-color #fce8e1
  color c-accent
</style>
