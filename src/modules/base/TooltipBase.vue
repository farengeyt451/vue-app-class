<template>
</template>

<script>
import tippy from 'tippy.js';

export default {
  /** Template dependencies*/
  components: {},

  /** Interface */
  props: {
    target: {
      type: Object,
      required: true
    },
    tippyProps: {
      type: Object,
      required: false
    }
  },

  /** Lifecycle events */
  mounted() {
    tippy(target, tippyProps);
  }
};
</script>

<style lang="stylus"></style>
