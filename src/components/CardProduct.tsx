import { Product } from "../types/product";

import Image from "next/image";

interface CardProductProps {
    product: Product,
    size?: "default" | "featured",
}

export default function CardProduct({ product, size = "default" }: CardProductProps) {
    const imageAspect = {
        default: "aspect-[2/3] w-[calc((100%-60px)/7)]",
        featured: "aspect-[16/7.84]",
    }

    return (
        <div className={`group ${imageAspect[size]} relative bg-c1 transition rounded-[10px] overflow-hidden hover:cursor-pointer`}>
            <div className="absolute inset-0 rounded-[10px] border-2 border-transparent group-hover:border-c4 transition z-10 pointer-events-none" /> 
            <Image 
                src={product.image} 
                alt={product.name}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                className="bg-c3 rounded-[10px] transition group-hover:scale-105"
            />
            <div className="absolute w-full h-full bg-black/10 rounded-[10px]">
                <div className="absolute bottom-0 flex flex-col justify-end w-full h-[50%] bg-linear-to-t from-black to-black/0 p-[10px]">
                    <h4>{product.name}</h4>
                    <div className="flex">
                        {product.lowest_price === product.highest_price ? (
                            <h5>Entre R${product.lowest_price} e R${product.highest_price}</h5>
                        ) : (
                            <h5>R${product.highest_price}</h5>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
