export interface Image {
  id: number;
  type: string;
  description: string;
  copyright: string;
  sizes: {
    full: string;
    thumb: string;
  };
}
