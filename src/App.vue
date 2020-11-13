<template>
  <div id="app">

    <perfect-scrollbar class="layout">
      <header>
        <app-header></app-header>
      </header>

      <main>
        <router-view></router-view>
      </main>

      <footer>
      </footer>
    </perfect-scrollbar>

  </div>
</template>

<script>
import { isUserAuthenticated } from '@/api';
import { AppHeader } from '@/modules/features/header';

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

  /** Lifecycle events */
  created() {
    this.checkForAuthStatus();
  },

  /** Non-reactive properties */
  methods: {
    checkForAuthStatus() {
      this.$store.commit('setUserAuthenticatedFlagTo', isUserAuthenticated());
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
  padding 40px 0

.footer
  flex-shrink 0

.ps.layout
  max-height 100vh
</style>
