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

export interface MediaItem {
    id?: number;
    type?: string;
    aspect?: string;
    url: string;
}

interface ImageCarouselProps {
    name?: string;
    images?: (string | MediaItem)[];
}

export default function ImageCarousel({ name = "", images = [] }: ImageCarouselProps) {
    const mainSwiperRef = useRef<SwiperType | null>(null);
    const modalSwiperRef = useRef<SwiperType | null>(null);
    const [zoom, setZoom] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    const imageUrls = images.map((img) => (typeof img === "string" ? img : img.url));

    if (!imageUrls.length) return null;

    return (
        <>
            <Swiper
                onSwiper={(swiper) => {
                    mainSwiperRef.current = swiper;
                }}
                pagination={{ clickable: true }}
                loop={imageUrls.length > 1}
                modules={[Pagination]}
                className="w-full h-full relative bg-button rounded-[20px]"
            >       

                <div 
                    onClick={() => setZoom(true)} 
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    className="absolute top-0 left-0 w-full h-full rounded-[20px] duration-300 transition border-2 border-transparent 
                    hover:border-icon z-1 hover:cursor-pointer"
                />

                {imageUrls.map((url, index) => (
                    <SwiperSlide key={`main-${url}-${index}`} className="relative overflow-hidden">
                        <Image
                            src={url}
                            alt={`${name} - Slide ${index + 1}`}
                            fill
                            sizes="(max-width: 768px) 100vw, 50vw"

                            className={`object-cover duration-300 transition ${isHovered ? 'scale-102' : 'scale-100'}`}
                        />
                    </SwiperSlide>
                ))}

                {imageUrls.length > 1 && (
                    <>
                        <Button
                            icon={<ChevronLeft size={14} />}
                            onClick={() => mainSwiperRef.current?.slidePrev()}
                            position="absolute top-1/2 -translate-y-1/2 left-[20px] z-10"
                            cn="bg-button/50 shadow-button/50"
                            size={2}
                        />
                        <Button
                            icon={<ChevronRight size={14} />}
                            onClick={() => mainSwiperRef.current?.slideNext()}
                            position="absolute top-1/2 -translate-y-1/2 right-[20px] z-10"
                            cn="bg-button/50 shadow-button/50"
                            size={2}
                        />
                    </>
                )}
            </Swiper>

            <Background
                show={zoom}
                elements={
                    <>
                        <Title
                            name={name}
                            buttons={
                                <Button icon={<X size={14} />} onClick={() => setZoom(false)} position="relative" size={3}/>
                            }
                        />
                        <Swiper
                            onSwiper={(swiper) => {
                                modalSwiperRef.current = swiper;
                            }}
                            slidesPerView={1}
                            spaceBetween={40}
                            loop={imageUrls.length > 1}
                            pagination={{ clickable: true }}
                            modules={[Pagination]}
                            className="w-full h-full flex-1 px-[20px] relative"
                        >
                            {imageUrls.map((url, index) => (
                                <SwiperSlide key={`modal-${url}-${index}`} className="relative w-full h-full flex items-center justify-center">
                                    <div className="relative w-full h-[calc(100%-38px)]">
                                        <Image
                                            src={url}
                                            alt={`${name} - Zoom ${index + 1}`}
                                            fill
                                            className="object-contain rounded-[20px]"
                                            sizes="100vw"
                                        />
                                    </div>
                                </SwiperSlide>
                            ))}

                            {imageUrls.length > 1 && (
                                <>
                                    <Button
                                        icon={<ChevronLeft size={14} />}
                                        onClick={() => modalSwiperRef.current?.slidePrev()}
                                        position="absolute top-1/2 -translate-y-1/2 left-[40px] z-10"
                                        cn="bg-button/50 shadow-button/50"
                                        size={2}
                                    />
                                    <Button
                                        icon={<ChevronRight size={14} />}
                                        onClick={() => modalSwiperRef.current?.slideNext()}
                                        position="absolute top-1/2 -translate-y-1/2 right-[40px] z-10"
                                        cn="bg-button/50 shadow-button/50"
                                        size={2}
                                    />
                                </>
                            )}
                        </Swiper>
                    </>
                }
            />
        </>
    );
}