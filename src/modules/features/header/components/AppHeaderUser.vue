<template>
  <div class="user">
    <div class="user__label">Личный кабинет</div>

    <div class="user__avatar">
      <app-header-icon
        viewBox="0 0 14 15"
        class="accent-theme"
      >
        <icon-user></icon-user>
      </app-header-icon>
    </div>
  </div>
</template>

<script>
import AppHeaderIcon from '../components/AppHeaderIcon.vue';
import IconUser from '@/icons/IconUser.vue';

export default {
  /** Components*/
  components: {
    AppHeaderIcon,
    IconUser
  },

  /** Props */
  props: {},

  /** Local state */
  data() {
    return {};
  },

  /** Lifecycle events */
  // created: function() {}

  /** Non-reactive properties */
  methods: {}
};
</script>

<style lang="stylus">
.user
  display flex
  align-items center
  font-weight fw-regular
  font-family ff-main
  cursor pointer

.user__label
  color c-black-soft
  text-transform uppercase
  font-weight fw-semi-bold
  font-size 14px
  line-height 1

.user__avatar
  margin-left 15px
</style>
