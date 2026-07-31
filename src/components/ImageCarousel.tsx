"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useState, useRef } from "react";
import Image from "next/image";
import Background from "./Background";
import Title from "./Title";
import Button from "./Button";

interface ImageCarouselProps {
    name: string;
    images: string[];
}

export default function ImageCarousel({ name, images }: ImageCarouselProps) {
    const swiperRef = useRef<SwiperType | null>(null);
    const [isBeginning, setIsBeginning] = useState(true);
    const [isEnd, setIsEnd] = useState(false);
    const [zoom, setZoom] = useState(false);

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
            pagination={{
                clickable: true,
            }}
            modules={[Pagination]}
            className="group w-full h-full relative bg-button rounded-[20px] duration-300 transition border-2 border-transparent hover:border-icon"
        >
            {images.map((image, index) => (
                <SwiperSlide key={`${image}-${index}`} className="relative overflow-hidden hover:cursor-pointer">
                    <Image onClick={()=> setZoom(true)} src={image} alt={`Slide ${index + 1}`} fill sizes="aspect-[16/9]" className="object-cover duration-300 transition group-hover:scale-102" />
                    <div />
                </SwiperSlide>
            ))}
            <Button icon={<ChevronLeft size={14} />} disabled={isBeginning} onClick={() => swiperRef.current?.slidePrev()} 
                position="absolute top-1/2 -translate-y-1/2 left-[20px] z-1" cn="bg-button/50 shadow-button/50"
            />
            <Button icon={<ChevronRight size={14} />} disabled={isEnd} onClick={() => swiperRef.current?.slideNext()} 
                position="absolute top-1/2 -translate-y-1/2 right-[20px] z-1" cn="bg-button/50 shadow-button/50"
            />
        </Swiper>
        <Background
            show={zoom} 
            z={10} 
            elements={
                <>
                <Title 
                    name={name} 
                    buttons={
                        <Button icon={<X size={14} />} onClick={() => setZoom(false)} position="relative"/>
                    }
                />
                <Swiper
                    onSwiper={(swiper) => {
                        swiperRef.current = swiper;
                        setIsBeginning(swiper.isBeginning);
                        setIsEnd(swiper.isEnd);
                    }}
                    onSlideChange={handleSlideChange}
                    slidesPerView={1}
                    spaceBetween={137}
                    slidesOffsetBefore={97}
                    slidesOffsetAfter={97}      
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className="w-full flex-1 px-[20px]"
                >
                    {images.map((image, index) => (
                        <SwiperSlide key={`${image}-${index}`} className="relative w-full flex items-center justify-center">
                            <Image onClick={() => setZoom(true)} src={image} alt={`Slide ${index + 1}`} fill className="object-contain rounded-[20px] cursor-pointer" sizes="(max-width: 768px) 100vw, 80vw"/>
                        </SwiperSlide>
                    ))}
                    <Button icon={<ChevronLeft size={14} />} disabled={isBeginning} onClick={() => swiperRef.current?.slidePrev()} 
                        position="absolute top-1/2 -translate-y-1/2 left-[40px] z-1" cn="bg-button/50 shadow-button/50"
                    />
                    <Button icon={<ChevronRight size={14} />} disabled={isEnd} onClick={() => swiperRef.current?.slideNext()} 
                        position="absolute top-1/2 -translate-y-1/2 right-[40px] z-1" cn="bg-button/50 shadow-button/50"
                    />
                </Swiper>
                </>
            }
        />
        </>
    );
    }