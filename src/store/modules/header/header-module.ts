import { SET_SEARCH_BOX_OPENED_FLAG } from './types';
import { HeaderState } from './interfaces';

export const headerModule = {
  state: () => ({
    isSearchBoxOpened: false,
  }),

  mutations: {
    [SET_SEARCH_BOX_OPENED_FLAG](state: HeaderState, flag: boolean) {
      state.isSearchBoxOpened = flag;
    },
  },
};
