import ProductCarousel from "../components/ProductCarousel";
import { mockHighlights } from "@/src/services/mocks";

export default function HomePage() {
    return (
        <>
        <div className="flex flex-wrap">
            {mockHighlights.map((highlight) => (
                <ProductCarousel
                    name={highlight.name}
                    aspect="169"
                    slidesPerView={2.333}
                    products={highlight.products}
                />
            ))}
        </div>
        </>
    );
}
