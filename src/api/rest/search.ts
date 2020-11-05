import { AxiosResponse, CancelToken } from 'axios';
import makeRequest from '../makeRequest';

const rootRoute = 'search';

export const getSearchResult = (query: string, page: number, cancelToken: CancelToken): Promise<AxiosResponse> =>
  makeRequest({ url: `${rootRoute}?q=${query}&page=${page}`, method: 'get', cancelToken });
