<script>
export default {
  /** Interface */
  props: {
    level: {
      type: Number,
      required: true,
    },
  },

  /** Rendering */
  render(createElement) {
    return createElement(
      `h${this.level}`,
      {
        attrs: {
          class: `b-heading b-heading--${this.level}`,
        },
      },
      this.$slots.default
    );
  },
};
</script>

<style lang="stylus">
.b-heading
  color c-white
  font-family ff-main

.b-heading--1
  font-weight fw-bold
  font-size 50px
  line-height 1.2

.b-heading--2
  font-weight fw-bold
  font-size 36px
  line-height 1.17

.b-heading--3
  font-weight fw-semi-bold
  font-size 24px
  line-height 1.25

.b-heading--4
  font-weight fw-semi-bold
  font-size 18px
  line-height 1.4
</style>
