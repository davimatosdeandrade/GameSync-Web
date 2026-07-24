"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useRef } from "react";
import Image from "next/image";

interface ImageCarouselProps {
    images: string[];
}

export default function ImageCarousel({ images }: ImageCarouselProps) {
    const swiperRef = useRef<SwiperType | null>(null);
    const [isBeginning, setIsBeginning] = useState(true);
    const [isEnd, setIsEnd] = useState(false);

    const handleSlideChange = (swiper: SwiperType) => {
        setIsBeginning(swiper.isBeginning);
        setIsEnd(swiper.isEnd);
    };

    return (
        <>
        <Swiper
            onSwiper={(swiper) => {
                swiperRef.current = swiper;
                setIsBeginning(swiper.isBeginning);
                setIsEnd(swiper.isEnd);
            }}
            onSlideChange={handleSlideChange}
            modules={[Pagination]}
            className="relative bg-button rounded-[20px]"
        >
            {images.map((image, index) => (
                <SwiperSlide key={`${image}-${index}`} className="relative aspect-[16/9] overflow-hidden">
                    <Image src={image} alt={`Slide ${index + 1}`} fill sizes="aspect-[16/9]" className="object-cover" />
                </SwiperSlide>
            ))}
            <button
                type="button"
                onClick={() => swiperRef.current?.slidePrev()}
                disabled={isBeginning}
                className="absolute top-1/2 -translate-y-1/2 left-[20px] z-1 text-text2 transition-all duration-300 
                disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:text-text2 
                enabled:hover:text-icon enabled:cursor-pointer"
            >
                <ChevronLeft size={22} />
            </button>
            <button
                type="button"
                onClick={() => swiperRef.current?.slideNext()}
                disabled={isEnd}
                className="absolute top-1/2 -translate-y-1/2 right-[20px] z-1 text-text2 transition-all duration-300 
                disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:text-text2 
                enabled:hover:text-icon enabled:cursor-pointer"
            >
                <ChevronRight size={22} />
            </button>
        </Swiper>
        </>
    );
    }