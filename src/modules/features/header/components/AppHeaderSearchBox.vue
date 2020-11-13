<template>
  <form
    class="ah-search-box"
    @submit.prevent.stop
  >
    <input
      class="ah-search-box__input"
      type="text"
      name="header-search"
      placeholder="Найти что-то интересное"
      v-model="searchQuery"
      ref="searchBox"
    >
  </form>
</template>

<script lang="ts">
import { Vue, Component, Watch, Emit, Prop } from 'vue-property-decorator';
import { getSearchResult } from '@/api';
import debounce from 'lodash-es/debounce';
import Axios, { AxiosError, AxiosResponse, CancelToken, CancelTokenSource } from 'axios';

const DEBOUNCE_WAIT_TIME = 240;

@Component({})
export default class AppHeaderSearchBox extends Vue {
  @Prop() resetSearchQuery!: boolean;
  searchQuery = null;
  isPending = false;
  cancelSource!: CancelTokenSource;
  currentPage = 1;

  debouncedGetData!: (query: string) => void;

  private created() {
    this.debouncedGetData = debounce(this.getData, DEBOUNCE_WAIT_TIME);
  }

  @Watch('searchQuery')
  private onQueryChange(currentVal: string) {
    this.cancelSearchQuery();
    this.debouncedGetData(currentVal);
  }

  @Watch('resetSearchQuery')
  private onResetSearchQuery(curValue: boolean) {
    if (!curValue) this.searchQuery = null;
  }

  @Watch('isSearchBoxOpened')
  private onSearchBoxStateChange(isOpened: boolean) {
    isOpened && (this.$refs.searchBox as HTMLElement).focus();
  }

  private get isSearchBoxOpened() {
    return this.$store.state.header.isSearchBoxOpened;
  }

  private getData(query: string) {
    this.switchPendingFlagTo(true);

    if (!query) {
      this.emitSearchResult(null);
      this.switchPendingFlagTo(false);
      return;
    }

    this.generateCancelToken();
    this.makeRequest(query, this.currentPage, this.cancelSource.token);
  }

  @Emit('pending-status')
  private switchPendingFlagTo(flag: boolean) {
    this.isPending = flag;
  }

  private generateCancelToken() {
    this.cancelSource = Axios.CancelToken.source();
  }

  private makeRequest(query: string, page: number, cancelToken: CancelToken) {
    getSearchResult(query, page, cancelToken)
      .then(this.emitSearchResult)
      .catch(this.processErrorResponse)
      .finally(() => {
        this.switchPendingFlagTo(false);
      });
  }

  private emitSearchResult(results: AxiosResponse | null) {
    this.$emit('search-results', results);
  }

  private processErrorResponse(error: AxiosError) {
    console.error(error);
  }

  private cancelSearchQuery() {
    this.cancelSource && this.cancelSource.cancel('This query is canceled');
  }
}
</script>

<style lang="stylus">
.ah-search-box__input
  padding 10px 60px 10px 20px
  width 100%
  outline none
  border 1px solid transparent
  border-radius 40px
  background-color #f5f8f9
  background-repeat no-repeat
  color c-dark
  font-size 16px
  font-family ff-main
  transition border-color 0.2s ease-in, background-color 0.25s ease

  &:focus
    background-color darken(#f5f8f9, 7%)

  placeholder-color(c-grey-light)
</style>
