import Vue from 'vue';
import App from './App.vue';
import router from './router';

/** Directives */
import '@/directives/tooltip.directive.ts';

/** Pipes */
import '@/pipes/pluralize.pipe.ts';

Vue.config.productionTip = false;

const app = new Vue({
  router,
  render: h => h(App),
}).$mount('#app');

console.log(app);
