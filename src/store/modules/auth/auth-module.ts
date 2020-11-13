import { AuthState } from './interfaces';
import { SET_USER_AUTHENTICATED_FLAG } from './types';

export const authModule = {
  state: () => ({
    isUserAuthenticated: true,
  }),

  mutations: {
    [SET_USER_AUTHENTICATED_FLAG](state: AuthState, flag: boolean) {
      state.isUserAuthenticated = flag;
    },
  },
};
