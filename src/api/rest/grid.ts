import { AxiosResponse } from 'axios';
import makeRequest from '../helpers/make-request';
import { AppHeader } from '@/modules/features/header/interfaces';
import { BaseCard } from '@/modules/features/grid/interfaces';

const rootRoute = 'grid';

export const getHeaderData = (): Promise<AxiosResponse<AppHeader.Item[]>> => {
  return makeRequest({ url: `${rootRoute}/header`, method: 'get' });
};

export const getCards = (page = 1): Promise<AxiosResponse<BaseCard>> =>
  makeRequest({ url: `${rootRoute}?page=${page}`, method: 'get' });
