<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :viewBox="viewBox"
    :aria-labelledby="iconName"
    role="presentation"
  >
    <title
      :id="iconName"
      lang="en"
    >{{iconName}} icon</title>
    <g :fill="iconColor">
      <slot />
    </g>
  </svg>
</template>

<script>
export default {
  props: {
    iconName: {
      type: String
    },
    viewBox: {
      type: String,
      default: '0 0 16 16'
    },
    iconColor: {
      type: String,
      default: 'currentColor'
    }
  }
};
</script>

<style scoped lang="stylus">
svg
  display inline-block
  vertical-align baseline
</style>
