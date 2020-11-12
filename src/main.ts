import Vue from 'vue';
import Vuex from 'vuex';
import App from './App.vue';
import router from './router';

/** Plugins */
import PerfectScrollbar from 'vue2-perfect-scrollbar';

/** Directives */
import '@/directives/tooltip.directive';

/** Pipes */
import '@/pipes/pluralize.pipe';

/** Navigation guards */
import { globalGuard } from './guards/router.global-guard';

/** Plugins registration */
Vue.use(Vuex);
Vue.use(PerfectScrollbar);

/** Config */
Vue.config.productionTip = false;

/** Guards init */
router.beforeEach(globalGuard);

const store = new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',

  state: {
    count: 0,
  },

  mutations: {
    increment(state) {
      state.count++;
    },
  },

  actions: {
    incrementAsync({ commit }) {
      setTimeout(() => {
        commit('increment');
      }, 1000);
    },
  },
});

const app = new Vue({
  router,
  store,
  render: createElement => createElement(App),
}).$mount('#app');

console.log(app);
