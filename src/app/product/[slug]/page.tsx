import ProductCarousel from "@/src/components/ProductCarousel";
import Title from "@/src/components/Title";
import Image from "next/image";
import ScrollDiv from "@/src/components/ScrollDiv";
import ImageCarousel from "@/src/components/ImageCarousel";

interface ProductPageProps {
    params: { slug: string }
}

const teste = {
    id: 23,
    name: "Hytale",
    description: "Hytale combines the scope of a sandbox with the depth of a roleplaying game, immersing players in a procedurally generated world where teetering towers and deep dungeons promise rich rewards throughout their adventures. Hytale supports everything from block-by-block construction to scripting and minigame creation, delivered using easy to use and powerful tools. Hytale combines the scope of a sandbox with the depth of a roleplaying game, immersing players in a procedurally generated world where teetering towers and deep dungeons promise rich rewards throughout their adventures. Hytale supports everything from block-by-block construction to scripting and minigame creation, delivered using easy to use and powerful tools. Hytale combines the scope of a sandbox with the depth of a roleplaying game, immersing players in a procedurally generated world where teetering towers and deep dungeons promise rich rewards throughout their adventures. Hytale supports everything from block-by-block construction to scripting and minigame creation, delivered using easy to use and powerful tools. Hytale combines the scope of a sandbox with the depth of a roleplaying game, immersing players in a procedurally generated world where teetering towers and deep dungeons promise rich rewards throughout their adventures. Hytale supports everything from block-by-block construction to scripting and minigame creation, delivered using easy to use and powerful tools. Hytale combines the scope of a sandbox with the depth of a roleplaying game, immersing players in a procedurally generated world where teetering towers and deep dungeons promise rich rewards throughout their adventures. Hytale supports everything from block-by-block construction to scripting and minigame creation, delivered using easy to use and powerful tools. Hytale combines the scope of a sandbox with the depth of a roleplaying game, immersing players in a procedurally generated world where teetering towers and deep dungeons promise rich rewards throughout their adventures. Hytale supports everything from block-by-block construction to scripting and minigame creation, delivered using easy to use and powerful tools. Hytale combines the scope of a sandbox with the depth of a roleplaying game, immersing players in a procedurally generated world where teetering towers and deep dungeons promise rich rewards throughout their adventures. Hytale supports everything from block-by-block construction to scripting and minigame creation, delivered using easy to use and powerful tools. Hytale combines the scope of a sandbox with the depth of a roleplaying game, immersing players in a procedurally generated world where teetering towers and deep dungeons promise rich rewards throughout their adventures. Hytale supports everything from block-by-block construction to scripting and minigame creation, delivered using easy to use and powerful tools. Hytale combines the scope of a sandbox with the depth of a roleplaying game, immersing players in a procedurally generated world where teetering towers and deep dungeons promise rich rewards throughout their adventures. Hytale supports everything from block-by-block construction to scripting and minigame creation, delivered using easy to use and powerful tools.",
    image: "/test/t24/i3.webp",
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

const teste3 = [ "/test/t24/i1.webp", "/test/t24/i2.webp", "/test/t24/i3.webp" ]

export default function ProductPage({ params }: ProductPageProps) {
    const { name, description, image } = teste;

    return(
        <>
        <Title
            name={name}
        />
        <div className="w-full px-[40px]">
            <div className="relative w-full aspect-[21/5] bg-main rounded-[20px] overflow-hidden">
                <Image
                    src={image}
                    alt={name}
                    fill
                    className="object-cover"
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
            <div className="col-span-3 aspect-[16/9] bg-main rounded-[20px] p-[20px] flex flex-col gap-[20px]">
                <h1>Sobre</h1>
                <div className="grid grid-cols-3 gap-[20px] h-[37px] w-full">
                    <div className="bg-main2 rounded-[20px]"></div>
                    <div className="bg-main2 rounded-[20px]"></div>
                    <div className="bg-main2 rounded-[20px]"></div>
                </div>
                <ScrollDiv className="flex-1 bg-main2 rounded-[20px] p-[20px] overflow-auto">
                    <h4>{description}</h4>
                </ScrollDiv>
            </div>
            <div className="col-span-3">
                <ImageCarousel
                    images={teste3}
                />
            </div> 
        </div>
        <ProductCarousel
            name="Novidades"
            aspect="169"
            slidesPerView={2.333}
            products={teste2}
        />
        </>
    )
}