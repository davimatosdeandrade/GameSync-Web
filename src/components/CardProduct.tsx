"use client";
import { useEffect, useRef, useState } from "react";
import { Product } from "../types/product";
import Image from "next/image";

interface CardProductProps {
    product: Product;
    aspect: "916" | "169" | "219";
}

export default function CardProduct({ product, aspect }: CardProductProps) {
    const ref = useRef<HTMLDivElement>(null);
    const [visivel, setVisivel] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => setVisivel(entry.isIntersecting),
            { threshold: 1 } 
        );

        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    const cardProductAspect = {
        916: "aspect-[9/16]",
        169: "aspect-[16/9]",
        219: "aspect-[21/9]"
    }

    return (
        <div className={`group ${cardProductAspect[aspect]} w-full relative bg-main transition rounded-[20px] overflow-hidden hover:cursor-pointer`}>
            <div className="absolute inset-0 rounded-[20px] border-2 border-transparent group-hover:border-icon transition z-1 pointer-events-none" /> 
            <Image 
                src={product.image} 
                alt={product.name}
                fill
                sizes={cardProductAspect[aspect]}
                className="bg-button rounded-[20px] transition group-hover:scale-105"
            />
            <div className="absolute w-full h-full bg-black/10 rounded-[20px]">
                <div ref={ref} className={`absolute bottom-0 flex flex-col justify-end w-full h-[50%] bg-linear-to-t from-black to-black/0 p-[20px] transition-opacity duration-300 ${visivel ? "opacity-100" : "opacity-0"}`}>
                    {product.description != null &&
                    <div className={`absolute bottom-[60px] left-[-360px] group-hover:left-[20px] transition-all duration-300 w-[340px] aspect-[16/9] my-[20px] rounded-[20px] shadow-[0_0_0_2px] shadow-main bg-black/40 backdrop-blur-md p-[12px]`}>
                        <h4>{product.description}</h4>
                    </div>}
                    <h2>{product.name}</h2>
                    {product.lowest_price === product.highest_price ? (
                        <h3>Entre R${product.lowest_price} e R${product.highest_price}</h3>
                    ) : (
                        <h3>R${product.highest_price}</h3>
                    )}
                </div>
            </div>
        </div>
    );
}
