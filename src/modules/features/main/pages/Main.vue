<template>
  <div class="main">
    <div class="main__grid">
      <grid></grid>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import Grid from '@/modules/features/grid';
import { getCards } from '@/api';
import { getDataGeneric } from '@/mixins';

export default {
  /** Template dependencies */
  components: { Grid },

  created() {
    // Timeout to see placeholder
    this.getGridData();
  },

  /** Non-reactive properties */
  methods: {
    ...mapActions(['getGridData']),
  },
};
</script>

<style lang="stylus"></style>
