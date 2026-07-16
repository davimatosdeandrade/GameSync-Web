"use client";
import { useEffect, useRef, useState } from "react";
import { Product } from "../types/product";
import Image from "next/image";
import Link from "next/link";

interface CardProductProps {
    product: Product;
    aspect: "916" | "169";
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
    }

    return (
        <Link href={`/product/${product.name.toLowerCase().replace(/\s+/g, "-")}`}>
            <div className={`group ${cardProductAspect[aspect]} w-full relative bg-main duration-300 transition rounded-[20px] overflow-hidden hover:cursor-pointer`}>
                <div className="absolute inset-0 rounded-[20px] border-2 border-transparent group-hover:border-icon duration-300 transition z-1 pointer-events-none" /> 
                <Image 
                    src={product.image} 
                    alt={product.name}
                    fill
                    sizes={cardProductAspect[aspect]}
                    className="bg-button rounded-[20px] duration-300 transition group-hover:scale-102"
                />
                <div className="absolute w-full h-full bg-black/10 rounded-[20px]">
                    <div ref={ref} className={`absolute bottom-0 flex flex-col justify-end w-full h-[1%] bg-linear-to-t from-black to-black/0 p-[20px] duration-300 transition-opacity duration-300 ${visivel ? "opacity-100" : "opacity-0"}`}>
                        {product.description != null && aspect === "169" &&
                        <div className={`absolute bottom-[60px] left-[-360px] group-hover:left-[20px] duration-300 transition-all duration-300 w-[340px] aspect-[16/9] my-[20px] rounded-[20px] shadow-[0_0_0_2px] shadow-main bg-black/40 backdrop-blur-md p-[12px]`}>
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
        </Link>
    );
}
