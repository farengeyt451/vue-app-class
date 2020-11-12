<template>
  <div
    v-if="materialBlock"
    class="ah-material"
  >

    <h4 class="ah-material__caption">{{ materialBlock.title }}</h4>

    <ul class="ah-material__list">
      <li
        v-for="link of materialBlock.links"
        :key="link.url"
        class="ah-material__item"
      >
        <router-link
          class="ah-material__link"
          :to="link.url"
        >
          {{ link.title }}
        </router-link>
      </li>
    </ul>
  </div>

</template>

<script>
export default {
  /** Interface */
  props: {
    materialBlock: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="stylus">
.ah-material
  font-family ff-main

.ah-material__caption
  font-weight fw-semi-bold
  font-size 24px
  line-height 1

.ah-material__list
  padding 0
  list-style-type none

.ah-material__item
  padding-top 20px

  &:not(:first-child)
    padding-top 15px

  &:not(:last-child)
    padding-bottom 20px
    border-bottom 1px solid #e5e5e5

.ah-material__link
  display block
  color c-grey-light
  text-decoration none
  font-size 16px
  line-height 1.375
  transition color 0.2s ease

  elStates(c-accent)
  line-clamp(2)
</style>
