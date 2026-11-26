import { Offer } from "../types/product";

export function getPrice(offers: Offer[] = [], fallback: string | null = "Esgotado") {
    if (!offers.length) return fallback;
    const prices = offers.map((o) => Number(o.price));
    const lowest = Math.min(...prices);
    const highest = Math.max(...prices);
    return lowest !== highest
        ? `Entre R$${lowest.toFixed(2)} e R$${highest.toFixed(2)}`
        : `R$${highest.toFixed(2)}`;
}
