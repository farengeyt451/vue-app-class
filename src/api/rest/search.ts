import { AxiosResponse, CancelToken } from 'axios';
import makeRequest from '../helpers/make-request';
import { BaseCard } from '@/modules/features/grid/interfaces';

const rootRoute = 'search';

export const getSearchResult = (
  query: string,
  page: number,
  cancelToken: CancelToken
): Promise<AxiosResponse<BaseCard>> =>
  makeRequest({ url: `${rootRoute}?q=${query}&page=${page}`, method: 'get', cancelToken });
