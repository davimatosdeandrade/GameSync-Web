import Carousel from "../components/Carousel";
import { mockHighlights } from "@/src/services/mocks";

export default function HomePage() {
    return (
        <>
        <div className="flex flex-wrap">
            {mockHighlights.map((highlight) => (
                <Carousel
                    key={highlight.id}
                    name={highlight.name}
                    items={highlight.products}
                    type="cards"
                    aspect="169"
                    slidesPerView={2.333}
                />
            ))}
        </div>
        </>
    );
}
