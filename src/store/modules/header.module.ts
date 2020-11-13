export const headerModule = {
  state: () => ({
    isSearchBoxOpened: false,
  }),

  mutations: {
    setIsSearchBoxOpenedFlagTo(state: any, flag: boolean) {
      state.isSearchBoxOpened = flag;
    },
  },
};
