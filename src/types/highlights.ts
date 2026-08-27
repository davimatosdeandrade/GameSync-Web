import { ProductSimpleDetail } from './product';

export interface Highlight {
  id: number;
  name: string;
  products: ProductSimpleDetail[];
}