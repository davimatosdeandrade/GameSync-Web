import { Product } from "./product";
import { Highlight } from "./highlights";

export interface ProductHighlights extends Highlight {
    products: Product[];
}