import ProductCarousel from "../components/ProductCarousel";
import { getHighlights } from "@/src/services/api";

export default async function HomePage() {
    const highlights = await getHighlights();

    return (
        <>
        <div className="flex flex-wrap w-full">
            {highlights.map((highlight) => (
                <ProductCarousel
                    key={highlight.id}
                    name={highlight.name}
                    products={highlight.products}
                />
            ))}
        </div>
        </>
    );
}
