export interface Product {
    id: number;
    name: string;
    description?: string;
    lowest_price: number;
    highest_price: number;
    image: string;
    category?: "game" | "giftcard"; // Para sabermos o tipo do produto
    platform?: string; // Ex: PC, PS5, Xbox (opcional para gift cards)
    discount?: number; // Porcentagem de desconto (se houver)
}
