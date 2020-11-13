import { AxiosResponse } from 'axios';

export const getDataGeneric = getDataFn => {
  return {
    /** Local state */
    data() {
      return {
        isLoading: false,
        items: null,
      };
    },

    /** Lifecycle events */
    created() {
      this.getData();
    },

    /** Non-reactive properties */
    methods: {
      getData() {
        this.switchLoadingFlagTo(true);

        getDataFn()
          .then(this.handleSuccessResponse)
          .catch(this.handleErrorResponse)
          .finally(() => {
            this.switchLoadingFlagTo(false);
          });
      },

      handleSuccessResponse(response) {
        this.items = response.data;
      },

      handleErrorResponse(error) {
        console.error(error);
      },

      switchLoadingFlagTo(flag) {
        this.isLoading = flag;
      },
    },
  };
};
