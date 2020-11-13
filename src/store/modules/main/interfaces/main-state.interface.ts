import { AxiosError, AxiosResponse } from 'axios';
import { BaseCard } from '@/modules/features/grid/interfaces';

export interface MainState {
  cards: AxiosResponse<BaseCard[]> | null;
  isLoading: boolean;
  error: AxiosError | null;
}
