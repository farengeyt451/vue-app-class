<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    iconName: {
      type: String,
    },
    viewBox: {
      type: String,
      default: '0 0 16 16',
    },
    iconColor: {
      type: String,
      default: 'currentColor',
    },
  },
};
</script>

<style scoped lang="stylus">
svg
  display inline-block
  vertical-align baseline
</style>
