import { Image } from './image.interface';

export interface Author {
  alias: string;
  count: number;
  description: string;
  image: Image | null;
  url: string;
  title: string;
}
