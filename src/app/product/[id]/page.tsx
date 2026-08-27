import ProductCarousel from "@/src/components/ProductCarousel";
import Title from "@/src/components/Title";
import Image from "next/image";
import ScrollDiv from "@/src/components/ScrollDiv";
import ImageCarousel from "@/src/components/ImageCarousel";
import Button from "@/src/components/Button";
import { ShoppingCart, Monitor, Captions, AudioLines, Check } from "lucide-react";    
import { getProductById } from "@/src/services/api";
import { notFound } from "next/navigation";

interface ProductPageProps {
    params: Promise<{ id: string }>;
}

export default async function ProductPage({ params }: ProductPageProps) {
    const { id } = await params;
    
    let product;
    try {
        product = await getProductById(Number(id));
    } catch (error) {
        notFound();
    }

    if (!product) return notFound();

    const coverMedia = product.medias?.find((media) => {
        if (typeof media === "string") return false;
        
        const isCover = media.type?.toLowerCase() === "cover";
        const is16by9 = media.aspect === "16:9";
        
        return isCover && is16by9;
    });

    const mainCoverUrl = 
        coverMedia?.url || 
        (typeof product.medias?.[0] === "string" ? product.medias[0] : product.medias?.[0]?.url) || 
        "/placeholder.jpg";

    return (
        <>
            <Title name={product.name} />
            
            <div className="w-full px-[37px]">
                <div className="relative w-full hSizeCard bg-main rounded-[20px] overflow-hidden">
                    <Image 
                        src={mainCoverUrl} 
                        alt={product.name || "Produto"} 
                        fill 
                        className="object-cover" 
                        priority
                    />  
                    <div className="absolute flex flex-col justify-end w-full h-full bg-black/10 rounded-[20px]">
                        <div className="relative ml-[20px] mb-[14px] w-[calc((100%-120px)/7)] aspect-[16/9]">
                            <Image src={"/test/t24/i4.webp"} alt="game logo" fill sizes="aspect-[16/9]" className="absolute"/>
                        </div>
                        <div className="flex gap-[14px] w-full right-0 bottom-0 bg-linear-to-t from-black to-black/0 px-[20px] pb-[20px]">
                            {product.categories?.map((category) => (
                                <div key={category.id} className="flex items-center px-[14px] h-[20px] rounded-[20px] shadow-[0_0_0_2px] shadow-main bg-main2">
                                    <h4>{category.name}</h4>
                                </div>
                            ))}                
                        </div>  
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-7 w-full py-[20px] px-[37px] gap-[20px]">
                <Button text="Plataforma" options={["PC", "Xbox", "Playstation", "Nintendo", "Mobile"]}/>
                <div className="col-span-6">
                    <Button icon={<ShoppingCart size={14} />} text="Comprar"/>
                </div>
            </div>

            <div className="grid grid-cols-7 flex gap-[20px] w-full px-[37px]">
                <div className="col-span-1 hSizeCard bg-main rounded-[20px] p-[20px] flex flex-col gap-[20px]">
                    <h1>Idiomas</h1>
                    <ScrollDiv>
                        <div className="flex justify-between w-full">
                            <h3>Opções</h3>
                            <div className="flex items-center text-icon gap-[6px]">
                                <AudioLines size={14} />
                                <Monitor size={14} />
                                <Captions size={14} />
                            </div>
                        </div>
                        {["Alemão", "Inglês", "Espanhol (América Latina)", "Espanhol (Espanha)", "Francês", "Português (Brasil)", "Coreano"].map((item) => (
                            <div key={item} className="flex justify-between w-full">
                                <h4>{item}</h4>
                                <div className="flex items-center text-text2 gap-[6px]">
                                    <Check size={14} />
                                    <Check size={14} />
                                    <Check size={14} />
                                </div>
                            </div>
                        ))}
                    </ScrollDiv>
                </div>

                <div className="col-span-3 hSizeCard bg-main rounded-[20px] p-[20px] flex flex-col gap-[20px]">
                    <h1>Sobre</h1>
                    <div className="grid grid-cols-3 gap-[20px] h-[37px] w-full">
                        <div className="flex items-center gap-[6px] px-[14px] bg-main2 rounded-[20px]">
                            <h3>Desenvolvido por</h3>
                            <h4>{product.developer?.name}</h4>
                        </div>
                        <div className="flex items-center gap-[6px] px-[14px] bg-main2 rounded-[20px]">
                            <h3>Distribuído por</h3>
                            <h4>{product.distributor?.name}</h4>
                        </div>
                        <div className="flex items-center gap-[6px] px-[14px] bg-main2 rounded-[20px]">
                            <h3>Lançado em</h3>
                            <h4>{product.release}</h4>
                        </div>
                    </div>
                    <ScrollDiv>
                        <h4>{product.desc}</h4>
                    </ScrollDiv>
                </div>

                <div className="col-span-3 hSizeCard bg-button rounded-[20px]">
                    <ImageCarousel name={product.name} images={product.medias} />
                </div> 
            </div>
        </>
    );
}