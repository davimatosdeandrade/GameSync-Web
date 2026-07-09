import Carousel from "../components/Carousel";
import { mockHighlights } from "@/src/services/mocks";

const teste = [
    {
        id: 1,
        name: "Dead by Daylight",
        image: "/test/t1/i1.webp",
        lowest_price: 49.90,
        highest_price: 49.90,
    },
    {
        id: 2,
        name: "Assassin's Creed Odyssey",
        image: "/test/t2/i1.webp",
        lowest_price: 109.90,
        highest_price: 140.90,
    },
    {
        id: 3,
        name: "Minecraft Bedrock Edition",
        image: "/test/t3/i1.webp",
        lowest_price: 109.90,
        highest_price: 109.90,
    },
]

export default function Home() {
    return (
        <>
        <Carousel
            key={1}
            name="Destaques"
            products={teste}
            aspect="219"
            slidesPerView={1.166}
        />
        <div className="flex flex-wrap">
            {mockHighlights.map((highlight) => (
                <Carousel
                    key={highlight.id}
                    name={highlight.name}
                    products={highlight.products}
                    aspect="169"
                    slidesPerView={2.333}
                />
            ))}
        </div>
        </>
    );
}
