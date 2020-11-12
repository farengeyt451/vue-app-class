<template>
  <div class="ah-user">
    <div class="ah-user__label">Личный кабинет</div>

    <div class="ah-user__avatar">
      <app-header-icon class="accent-theme">
        <icon-user></icon-user>
      </app-header-icon>
    </div>
  </div>
</template>

<script>
import AppHeaderIcon from '../components/AppHeaderIcon.vue';
import IconUser from '@/icons/IconUser.vue';

export default {
  /** Template dependencies*/
  components: {
    AppHeaderIcon,
    IconUser,
  },
};
</script>

<style lang="stylus">
.ah-user
  display flex
  align-items center
  font-weight fw-regular
  font-family ff-main
  cursor pointer

  &:hover
    .ah-user__avatar
      border-color c-accent
      background-color #fce8e1

.ah-user__label
  color c-black-soft
  text-transform uppercase
  font-weight fw-semi-bold
  font-size 14px
  line-height 1

.ah-user__avatar
  box-sizing content-box
  margin-left 15px
  border 1px solid transparent
  border-radius 50%
  transition border-color 0.2s ease
</style>
