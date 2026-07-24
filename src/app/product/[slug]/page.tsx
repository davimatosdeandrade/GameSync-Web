import ProductCarousel from "@/src/components/ProductCarousel";
import Title from "@/src/components/Title";
import Image from "next/image";
import ScrollDiv from "@/src/components/ScrollDiv";
import ImageCarousel from "@/src/components/ImageCarousel";
import Button from "@/src/components/Button";
import { ShoppingCart } from "lucide-react";    

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
        <Title name={name} />
        <div className="w-full px-[40px]">
            <div className="relative w-full aspect-[21/5] bg-main rounded-[20px] overflow-hidden">
                <Image src={image} alt={name} fill className="object-cover" />  
                <div className="absolute flex flex-col justify-end w-full h-full bg-black/10 rounded-[20px]">
                    <div className="relative ml-[20px] mb-[14px] w-[calc((100%-120px)/7)] aspect-[16/9]">
                        <Image src={"/test/t24/i4.webp"} alt="game logo" fill sizes="aspect-[16/9]" className="absolute"/>
                    </div>
                    <div className="flex gap-[14px] w-full right-0 bottom-0 bg-linear-to-t from-black to-black/0 px-[20px] pb-[20px]">
                        {["PC", "Xbox", "Playstation", "Nintendo", "Mobile"].map((item) => (
                            <div key={item} className="flex items-center px-[14px] h-[20px] rounded-[20px] shadow-[0_0_0_2px] shadow-main bg-main2">
                                <h4>{item}</h4>
                            </div>
                        ))}                 
                    </div>  
                </div>
            </div>
        </div>
        <div className="grid grid-cols-7 w-full py-[20px] px-[40px] gap-[20px]">
            <Button text="Plataforma" options={["PC", "Xbox", "Playstation", "Nintendo", "Mobile"]} />
            <div className="col-span-6">
                <Button icon={ <ShoppingCart size={14} /> } text={`Comprar`} />
            </div>
        </div>
        <div className="grid grid-cols-7 gap-[20px] w-full px-[40px]">
            <div className="col-span-1 bg-main rounded-[20px] p-[20px] flex flex-col gap-[20px]">
                <h1>Requisitos</h1>
                {/* <ScrollDiv className="flex-1 bg-main2 rounded-[20px] p-[14px] overflow-auto">
                    <h4></h4>
                </ScrollDiv> */}
            </div>
            <div className="col-span-3 aspect-[16/9] bg-main rounded-[20px] p-[20px] flex flex-col gap-[20px]">
                <h1>Sobre</h1>
                <div className="grid grid-cols-3 gap-[20px] h-[37px] w-full">
                    <div className="flex items-center gap-[6px] px-[14px] bg-main2 rounded-[20px]">
                        <h3>Desenvolvido por</h3>
                        <h4>Hypixel</h4>
                    </div>
                    <div className="flex items-center gap-[6px] px-[14px] bg-main2 rounded-[20px]">
                        <h3>Distribuído por</h3>
                        <h4>Hypixel</h4>
                    </div>
                    <div className="flex items-center gap-[6px] px-[14px] bg-main2 rounded-[20px]">
                        <h3>Lançado em</h3>
                        <h4>20/12/2025</h4>
                    </div>
                </div>
                <ScrollDiv className="flex-1 bg-main2 rounded-[20px] p-[14px] overflow-auto">
                    <h4>{description}</h4>
                </ScrollDiv>
            </div>
            <div className="col-span-3">
                <ImageCarousel images={teste3} />
            </div> 
        </div>
        <ProductCarousel name="Novidades" products={teste2} />
        </>
    )
}