<template>
  <div
    v-if="materialBlock"
    class="material"
  >

    <h4 class="material__caption">{{ materialBlock.title }}</h4>

    <ul class="material__list">
      <li
        v-for="link of materialBlock.links"
        :key="link.url"
        class="material__item"
      >
        <router-link
          class="material__link"
          :to="link.url"
          :title="link.title"
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
.material
  font-family ff-main

.material__caption
  font-weight fw-semi-bold
  font-size 24px
  line-height 1

.material__list
  padding 0
  list-style-type none

.material__item
  padding-top 20px

  &:not(:first-child)
    padding-top 15px

  &:not(:last-child)
    padding-bottom 20px
    border-bottom 1px solid #e5e5e5

.material__link
  display block
  color c-grey-light
  text-decoration none
  font-size 16px
  line-height 1.375
  transition color 0.2s ease

  elStates(c-accent)
  line-clamp(2)
</style>
