import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from '@/store';

/** Plugins */
import PerfectScrollbar from 'vue2-perfect-scrollbar';

/** Directives */
import '@/directives/tooltip.directive';

/** Pipes */
import '@/pipes/pluralize.pipe';

/** Navigation guards */
import { globalGuard } from './guards/router.global-guard';

/** Plugins registration */
Vue.use(PerfectScrollbar);

/** Config */
Vue.config.productionTip = false;

/** Guards init */
router.beforeEach(globalGuard);

const app = new Vue({
  router,
  store,
  render: createElement => createElement(App),
}).$mount('#app');

console.log(app);
