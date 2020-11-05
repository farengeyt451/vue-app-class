import Vue from 'vue';
import App from './App.vue';
import router from './router';

/** Plugins */
import PerfectScrollbar from 'vue2-perfect-scrollbar';

/** Directives */
import '@/directives/tooltip.directive.ts';

/** Pipes */
import '@/pipes/pluralize.pipe.ts';

Vue.use(PerfectScrollbar);
Vue.config.productionTip = false;

const app = new Vue({
  router,
  render: h => h(App),
}).$mount('#app');

console.log(app);
