import { SET_SEARCH_BOX_OPENED_FLAG } from './types';

export const headerModule = {
  state: () => ({
    isSearchBoxOpened: false,
  }),

  mutations: {
    [SET_SEARCH_BOX_OPENED_FLAG](state: any, flag: boolean) {
      state.isSearchBoxOpened = flag;
    },
  },
};
