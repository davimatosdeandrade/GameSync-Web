import { Product } from "../types/product";

import Image from "next/image";

interface CardProductProps {
    product: Product,
    size?: "default" | "featured",
}

export default function CardProduct({ product, size = "default" }: CardProductProps) {
    const imageAspect = {
        default: "aspect-[2/3]",
        featured: "video",
    }

    return (
        <div className={`${imageAspect[size]} relative bg-c1 transition rounded-[10px] border-[2px] border-c3 hover:border-c4 hover:cursor-pointer`}>
            <div>
                <Image 
                    src={product.image} 
                    alt={product.name}
                    fill
                    className="bg-red-900 rounded-[10px]"
                />
            </div>
            <div className="absolute w-full h-full bg-black/10 rounded-[10px]">
                <div className="absolute bottom-0 flex flex-col justify-end w-full h-[50%] bg-linear-to-t from-black to-black/0 p-[10px] rounded-b-[10px]">
                    <p className="text-c4">
                        {product.name}
                    </p>
                    <div className="flex">
                        {product.lowest_price === product.highest_price ? (
                            <p className="text-c5">
                                Entre R${product.lowest_price} e R${product.highest_price}
                            </p>
                        ) : (
                            <p className="text-c5">
                                R${product.highest_price}
                            </p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
