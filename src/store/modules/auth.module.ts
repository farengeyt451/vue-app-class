import { AuthState } from '../interfaces';

export const authModule = {
  state: () => ({
    isUserAuthenticated: true,
  }),

  mutations: {
    setUserAuthenticatedFlagTo(state: AuthState, flag: boolean) {
      state.isUserAuthenticated = flag;
    },
  },
};
