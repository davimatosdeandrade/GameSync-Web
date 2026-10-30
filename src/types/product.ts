export interface EntityRef {
    id: number;
    name: string;
}

export interface Media {
    id: number;
    type: 'cover' | 'banner' | 'screenshot' | 'icon' | 'trailer' | 'gameplay';
    aspect: '16:9' | '9:16' | '21:5' | '3:4' | 'free';
    url: string;
}

export interface Offer {
    id: number;
    price: number;
    stock: number;
    store: EntityRef;
}

export interface ProductLanguage {
  id: number;
  name: string;
  audio: boolean;
  interface: boolean;
  subtitles: boolean;
}

export interface ProductSimpleDetail {
    id: number;
    name: string;
    type: EntityRef;
    cover: Media | null;
    categories: EntityRef[];
    offers: Offer[];
}

export interface ProductDetail {
  id: number;
  name: string;
  desc: string;
  release: string;
  type: EntityRef | null;
  distributor: EntityRef | null;
  developer: EntityRef | null;
  medias: Media[];
  languages: ProductLanguage[];
  categories: EntityRef[];
  offers: Offer[];
}