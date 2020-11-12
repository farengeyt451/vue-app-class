import { Author, Image, Statistics, Theme } from '../common';

export interface BaseCard {
  authors: Array<Author>;
  category: Array<Theme>;
  content: Array<any>;
  count?: any;
  count_hits: number;
  description: string;
  editors: Array<any>;
  id: number;
  image?: Image;
  icon: {
    sizes: {
      full: string;
      thumb: string;
    };
  };
  is_adv: number;
  is_main: number;
  is_saved: boolean;
  itemsCount: number;
  promo_shows: number;
  statistics: Statistics;
  themes: Array<Theme>;
  title: string;
  subtitle?: string;
  type: string;
  card_type?: string;
  url: string;
  replace_tag_with: string;
  status: number;
  published_at: number;
}
