import { AxiosResponse } from 'axios';
import makeRequest from '../makeRequest';
import { AppHeader } from '@/interfaces/header/header.interface';

const rootRoute = 'grid';

export const getHeaderData = (): Promise<AppHeader.Item[]> =>
  makeRequest({ url: `${rootRoute}/header`, method: 'get' }).then(
    (response: AxiosResponse<AppHeader.Item[]>) => response.data
  );
