"use client";
import { useEffect, useRef, useState } from "react";
import { ProductSimpleDetail } from "../types/product";
import Image from "next/image";
import Link from "next/link";

interface CardProductProps {
    product: ProductSimpleDetail;
    aspect: "916" | "169";
}

export default function ProductCard({ product, aspect }: CardProductProps) {
    const ref = useRef<HTMLDivElement>(null);
    const [visible, setvisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => setvisible(entry.isIntersecting),
            { threshold: 1 } 
        );

        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    const cardProductAspect = {
        916: "aspect-[9/16]",
        169: "aspect-[16/9]",
    };

    const offers = product?.offers ?? [];
    const prices = offers.map((o) => Number(o.price));
    const lowestPrice = prices.length > 0 ? Math.min(...prices) : null;
    const highestPrice = prices.length > 0 ? Math.max(...prices) : null;

    const imageUrl = product?.cover?.url || "/placeholder.png";

    return (
        <Link href={`/product/${product?.id}`}>
            <div className="group hSizeCard relative bg-button duration-300 transition rounded-[20px] overflow-hidden hover:cursor-pointer">
                <div className="absolute inset-0 rounded-[20px] border-2 border-transparent group-hover:border-icon duration-300 transition z-1 pointer-events-none" />

                <Image 
                    src={imageUrl} 
                    alt={product?.name || "Produto"} 
                    fill 
                    sizes={cardProductAspect[aspect]} 
                    className="bg-button duration-300 transition group-hover:scale-102 object-cover" 
                />

                <div className="absolute w-full h-full bg-black/10 rounded-[20px]">
                    <div 
                        ref={ref} 
                        className={`absolute bottom-0 flex flex-col justify-end w-full bg-linear-to-t from-black to-black/0 p-[20px] duration-300 transition-opacity ${visible ? "opacity-100" : "opacity-0"}`}
                    >
                        <h2>{product?.name}</h2>

                        {lowestPrice !== null && highestPrice !== null && (
                            lowestPrice !== highestPrice ? (
                                <h3>Entre R${lowestPrice.toFixed(2)} e R${highestPrice.toFixed(2)}</h3>
                            ) : (
                                <h3>R${highestPrice.toFixed(2)}</h3>
                            )
                        )}

                        <div className="flex gap-[14px] w-full mt-[6px] flex-wrap-reverse">
                            {offers.map((offer) => (
                                <div key={offer.id} className="flex items-center px-[14px] h-[20px] rounded-[20px] shadow-[0_0_0_2px] shadow-main/70 bg-main2/30">
                                    <h4>{offer.store.name}</h4>
                                </div>
                            ))}
                            {offers.length < 1 &&
                            <div className="flex items-center px-[14px] h-[20px] rounded-[20px] shadow-[0_0_0_2px] shadow-red-400/70 bg-red-400/30">
                                <h4>Esgotado</h4>
                            </div>}
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
}