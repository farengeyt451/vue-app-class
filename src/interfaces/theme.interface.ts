import { Image } from './image.interface';

export interface Theme {
  id: number;
  alias: string;
  type: string;
  title: string;
  description: string;
  count: number;
  itemsCount?: number;
  url: string;
  image: Image;
  substrate: any;
  icon?: Image;
  partner: any[];
  statistics: {
    url: number;
    page_views: number;
    video_views: number;
    shares: number;
  };
  similar?: Array<Theme>;
  is_thesaurus?: 0 | 1;
  source?: string;
}
