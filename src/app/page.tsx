import ProductCarousel from "../components/ProductCarousel";
import { mockHighlights } from "@/src/services/mocks";

export default function HomePage() {
    return (
        <>
        <div className="flex flex-wrap">
            {mockHighlights.map((highlight) => (
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
