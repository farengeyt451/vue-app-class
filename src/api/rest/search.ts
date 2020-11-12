import { BaseCard } from '@/interfaces/base-card/base-card.interface';
import { AxiosResponse, CancelToken } from 'axios';
import makeRequest from '../helpers/makeRequest';

const rootRoute = 'search';

export const getSearchResult = (
  query: string,
  page: number,
  cancelToken: CancelToken
): Promise<AxiosResponse<BaseCard>> =>
  makeRequest({ url: `${rootRoute}?q=${query}&page=${page}`, method: 'get', cancelToken });
