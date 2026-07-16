import Carousel from "@/src/components/Carousel";
import Title from "@/src/components/Title";
import Image from "next/image";

interface ProductPageProps {
    params: { slug: string }
}

const teste = {
    id: 23,
    name: "Hollow Knight: Silksong",
    description: "Resident Evil Requiem is the ninth entry in the Resident Evil series. Experience terrifying survival horror with FBI analyst Grace Ashcroft, and dive into pulse-pounding action with legendary agent Leon S. Kennedy. Both of their journeys and unique gameplay styles intertwine into a heart-stopping, emotional experience that will chill you to your core.",
    image: "/test/t23/i1.webp",
    lowest_price: 75.00,
    highest_price: 75.00,
}

const teste2 = [
    {
        id: 1,
        name: "Dead by Daylight",
        description: "Resident Evil Requiem is the ninth entry in the Resident Evil series. Experience terrifying survival horror with FBI analyst Grace Ashcroft, and dive into pulse-pounding action with legendary agent Leon S. Kennedy. Both of their journeys and unique gameplay styles intertwine into a heart-stopping, emotional experience that will chill you to your core.",
        image: "/test/t1/i1.webp",
        lowest_price: 49.90,
        highest_price: 49.90,
    },
    {
        id: 2,
        name: "Assassin's Creed Odyssey",
        description: "Resident Evil Requiem is the ninth entry in the Resident Evil series. Experience terrifying survival horror with FBI analyst Grace Ashcroft, and dive into pulse-pounding action with legendary agent Leon S. Kennedy. Both of their journeys and unique gameplay styles intertwine into a heart-stopping, emotional experience that will chill you to your core.",
        image: "/test/t2/i1.webp",
        lowest_price: 109.90,
        highest_price: 140.90,
    },
    {
        id: 3,
        name: "Minecraft Bedrock Edition",
        description: "Resident Evil Requiem is the ninth entry in the Resident Evil series. Experience terrifying survival horror with FBI analyst Grace Ashcroft, and dive into pulse-pounding action with legendary agent Leon S. Kennedy. Both of their journeys and unique gameplay styles intertwine into a heart-stopping, emotional experience that will chill you to your core.",
        image: "/test/t3/i1.webp",
        lowest_price: 109.90,
        highest_price: 109.90,
    },
]

export default function ProductPage({ params }: ProductPageProps) {
    const { name, description, image } = teste;

    return(
        <>
        <Title
            name={name}
        />
        <div className="w-full px-[40px]">
            <div className="relative w-full aspect-[21/5] bg-main rounded-[20px]">
                <Image
                    src={image}
                    alt={name}
                    fill
                    className="rounded-[20px]"
                />  
                <div className="absolute w-full h-full bg-black/10 rounded-[20px]">

                </div>
            </div>
        </div>
        <Title
            name="Detalhes"
        />
        <div className="grid grid-cols-7 gap-[20px] w-full px-[40px]">
            <div className="bg-main rounded-[20px]">

            </div>
            <div className="col-span-3 aspect-[16/9] bg-main rounded-[20px]">

            </div>
            <div className="col-span-3 aspect-[16/9] bg-orange-900 rounded-[20px]">

            </div> 
        </div>
        <Carousel
            name="Novidades"
            items={teste2}
            type="cards"
            aspect="169"
            slidesPerView={2.333}
        />
        </>
    )
}