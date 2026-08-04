"use client"
import { Product } from "../types/product";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/pagination"
import { Pagination } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Title from "./Title";
import ProductCard from "./ProductCard";
import { useRef, useState } from "react";
import Button from "./Button";

type ProductCarouselProps = {
    name: string;
    products: Product[];
} 

export default function ProductCarousel({ name, products}: ProductCarouselProps) {
    const swiperRef = useRef<SwiperType | null>(null);
    const [isBeginning, setIsBeginning] = useState(true);
    const [isEnd, setIsEnd] = useState(false);

    const handleSlideChange = (swiper: SwiperType) => {
        setIsBeginning(swiper.isBeginning);
        setIsEnd(swiper.isEnd);
    };

    return(
        <>
        <Title name={name} />
        <Swiper
            onSwiper={(swiper) => {
                swiperRef.current = swiper;
                setIsBeginning(swiper.isBeginning);
                setIsEnd(swiper.isEnd);
            }}
            onSlideChange={handleSlideChange}
            slidesPerView={2.333}
            spaceBetween={20}
            slidesOffsetBefore={37}
            slidesOffsetAfter={37}           
            modules={[Pagination]}
            className="relative w-full"
        >
            {products.map((product)=> (
                <SwiperSlide key={product.id} className="bg-button overflow-hidden rounded-[20px]">
                    <ProductCard product={product} aspect={"169"} />
                </SwiperSlide>
            ))}
            <Button icon={<ChevronLeft size={14} />} disabled={isBeginning} onClick={() => swiperRef.current?.slidePrev()} 
                position="absolute top-1/2 -translate-y-1/2 left-[60px] z-1" cn="bg-button/50 shadow-button/50"
            />
            <Button icon={<ChevronRight size={14} />} disabled={isEnd} onClick={() => swiperRef.current?.slideNext()} 
                position="absolute top-1/2 -translate-y-1/2 right-[60px] z-1" cn="bg-button/50 shadow-button/50"
            />
        </Swiper>
        </>
    )
}