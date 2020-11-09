<template>
  <div id="app">
    <header>
      <app-header></app-header>
    </header>

    <main>
      <router-view></router-view>
    </main>

    <footer>
    </footer>
  </div>
</template>

<script>
import AppHeader from '@/modules/features/header/pages/AppHeader.vue';

export default {
  /** Template dependencies*/
  components: {
    AppHeader,
  },

  /** Events */
  watch: {
    $route(to, from) {
      console.group('Router');
      console.log('$route -> from', from);
      console.log('$route -> to', to);
      console.log(history);
      console.groupEnd();
    },
  },
};
</script>

<style lang="stylus">
@import "./styles"

#app
  display flex
  flex-direction column
  min-height 100%
  background-color c-bg-body
  color c-dark
  font-family Avenir, Helvetica, Arial, sans-serif
  line-height 1.15
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale

*
*::before
*::after
  box-sizing border-box

html
body
  height 100%

main
  flex-grow 1
  flex-shrink 0
  flex-basis auto

.footer
  flex-shrink 0
</style>
