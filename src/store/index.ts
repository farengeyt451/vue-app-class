import Vue from 'vue';
import Vuex, { Store } from 'vuex';

/** Modules */
import { headerModule } from './modules/header';
import { authModule } from './modules/auth';
import { mainModule } from './modules/main';

/** Interfaces */
import { AuthState } from './modules/auth/interfaces';
import { HeaderState } from './modules/header/interfaces';

Vue.use(Vuex);

const store: Store<{ header: HeaderState; auth: AuthState }> = new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',

  modules: {
    header: headerModule,
    auth: authModule,
    main: mainModule,
  },
});

export default store;
