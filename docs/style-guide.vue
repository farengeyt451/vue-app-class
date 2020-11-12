<template></template>

<script>
export default {
  /** Side effects */
  el: null,

  /** Global awareness */
  name: null,
  parent: null,

  /** Component type */
  functional: false,

  /** Template modifiers */
  delimiters: [],
  comments: false,

  /** Template dependencies */
  components: {},
  directives: {},
  filters: {},

  /** Composition */
  extends: null,
  mixins: [],

  /** Interface */
  inheritAttrs: true,
  model: {},
  props: {},
  propsData: {},

  /** Local state */
  data() {
    return {
      isLoading: false,
      contentItems: null,
      error: null,
    };
  },
  computed() {},

  /** Events */
  watch: {},

  /** Lifecycle events */
  beforeCreate() {},
  created() {},
  beforeMount() {},
  mounted() {},
  beforeUpdate() {},
  updated() {},
  activated() {},
  deactivated() {},
  beforeDestro() {},
  destroyed() {},

  /** Non-reactive properties */
  methods: {},

  /** Rendering */
  template: null,
  render() {},
  renderError() {},
};
</script>

<style lang="stylus">
/*
 * Stylus comment
 */
</style>
