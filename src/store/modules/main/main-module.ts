import { getCards } from '@/api';
import { AxiosError, AxiosResponse } from 'axios';
import { Commit } from 'vuex';
import { BaseCard } from '@/modules/features/grid/interfaces';
import { MainState } from './interfaces';
import { SET_MAIN_DATA_ERROR, SET_MAIN_DATA_LOADING, SET_MAIN_DATA_SUCCESS } from './types';

export const mainModule = {
  state: () => ({
    cards: null,
    isLoading: false,
    error: null,
  }),

  mutations: {
    [SET_MAIN_DATA_LOADING](state: MainState, flag: boolean) {
      state.isLoading = flag;
    },

    [SET_MAIN_DATA_SUCCESS](state: MainState, response: AxiosResponse<BaseCard[]>) {
      state.cards = response;
    },

    [SET_MAIN_DATA_ERROR](state: MainState, error: AxiosError) {
      state.error = error;
    },
  },

  actions: {
    getGridData({ commit }: { commit: Commit }) {
      commit(SET_MAIN_DATA_LOADING, true);

      getCards()
        .then(response => {
          commit(SET_MAIN_DATA_SUCCESS, response);
        })
        .catch(error => {
          commit(SET_MAIN_DATA_ERROR, error);
        })
        .finally(() => {
          commit(SET_MAIN_DATA_LOADING, false);
        });
    },
  },
};
