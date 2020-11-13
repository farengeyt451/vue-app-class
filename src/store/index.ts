import Vue from 'vue';
import Vuex, { Store } from 'vuex';
import { AuthState, HeaderState } from './interfaces';

/** Modules */
import { headerModule, authModule } from './modules';

Vue.use(Vuex);

const store: Store<{ header: HeaderState; auth: AuthState }> = new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',

  modules: {
    header: headerModule,
    auth: authModule,
  },
});

export default store;
