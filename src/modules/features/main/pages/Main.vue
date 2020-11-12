<template>
  <div class="main">
    <div
      class="main__grid"
      v-if="items && items.length"
    >
      <grid :gridItems="items"></grid>
    </div>
  </div>
</template>

<script>
import Grid from '@/modules/features/grid';
import { getCards } from '@/api';
import { getDataGeneric } from '@/mixins';

export default {
  /** Template dependencies */
  components: { Grid },
  mixins: [getDataGeneric(getCards)],

  /** Non-reactive properties */
  methods: {
    handleSuccessResponse(response) {
      this.items = response.data.slice(0, 20);
    },
  },
};
</script>

<style lang="stylus"></style>
