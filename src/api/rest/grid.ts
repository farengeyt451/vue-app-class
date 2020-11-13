import { AxiosResponse } from 'axios';
import makeRequest from '../helpers/make-request';
import { AppHeader } from '@/interfaces/header/header.interface';
import { BaseCard } from '@/interfaces/base-card/base-card.interface';

const rootRoute = 'grid';

export const getHeaderData = (): Promise<AxiosResponse<AppHeader.Item[]>> =>
  makeRequest({ url: `${rootRoute}/header`, method: 'get' });

export const getCards = (page = 1): Promise<AxiosResponse<BaseCard>> =>
  makeRequest({ url: `${rootRoute}?page=${page}`, method: 'get' });
