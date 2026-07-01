import Carousel from "../components/Carousel";

import { mockHighlights } from "@/src/services/mocks";

export default function Home() {
    return (
        <div className="flex flex-wrap gap-[10px]">
            {mockHighlights.map((highlight) => (
                <Carousel
                    key={highlight.id}
                    name={highlight.name}
                    products={highlight.products}
                />
            ))}
        </div>
    );
}
