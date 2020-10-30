<template>

  <div
    class="icon"
    @click="onIconClick"
  >
    <!-- Render wrapper with tooltip -->
    <template v-if="shouldShowTooltip">
      <div
        class="icon__wrapper"
        v-tippy="tippyProps"
      >
        <div class="icon__source">
          <icon-base :viewBox="viewBox">
            <slot></slot>
          </icon-base>
        </div>
      </div>
    </template>

    <!-- Render wrapper without tooltip -->
    <template v-else>
      <div class="icon__wrapper">
        <div class="icon__source">
          <icon-base :viewBox="viewBox">
            <slot></slot>
          </icon-base>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
import IconBase from '@/modules/base/IconBase.vue';

export default {
  /** Template dependencies*/
  components: {
    IconBase,
  },

  /** Interface */
  props: {
    viewBox: {
      type: String,
      default: '0 0 16 16',
    },
    shouldShowTooltip: {
      type: Boolean,
      required: false,
      default: false,
    },
    tooltipContent: {
      required: false,
    },
  },

  /** Local state */
  data() {
    return {
      tippyProps: {
        animation: 'shift-away',
        arrow: false,
        content: this.tooltipContent,
        duration: [400, 250],
        theme: 'light header-icon',
      },
    };
  },

  /** Non-reactive properties */
  methods: {
    onIconClick(event) {
      this.$emit('icon-click', event);
    },
  },
};
</script>

<style lang="stylus">
.icon__wrapper
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

  .accent-theme &
    background-color #fce8e1
    color c-accent

.icon__source
  width 16px
  height 16px
  pointer-events none

.tippy-box[data-theme~="header-icon"]
  padding 2px 4px
  border-radius 6px
  color c-black-soft
  letter-spacing 0.1px
  font-size 12px
  font-family ff-main
</style>
