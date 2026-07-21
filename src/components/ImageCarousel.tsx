"use client"
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperType } from 'swiper';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import Image from 'next/image';

interface ImageCarouselProps {
    images: string[];
}

export default function ImageCarousel({ images }: ImageCarouselProps) {
    const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);

    const showThumbs = images.length >= 2;
    const thumbsSlidesPerView = Math.min(images.length, 4);

    return (
        <div className="relative w-full aspect-[16/9] rounded-[20px] overflow-hidden">
            {/* Swiper principal */}
            <Swiper
                loop={images.length > 1}
                spaceBetween={10}
                navigation={true}
                thumbs={{ swiper: thumbsSwiper }}
                modules={[FreeMode, Navigation, Thumbs]}
                className="w-full h-full"
            >
                {images.map((src, index) => (
                    <SwiperSlide key={index}>
                        <div className="relative w-full h-full">
                            <Image
                                src={src}
                                alt={`imagem-${index}`}
                                fill
                                className="object-cover"
                            />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Thumbs sobrepostos no canto inferior */}
            {showThumbs && (
                <div className="absolute bottom-0 left-0 w-full z-10 p-[10px]">
                    <Swiper
                        onSwiper={setThumbsSwiper}
                        loop={images.length > 1}
                        spaceBetween={10}
                        slidesPerView={thumbsSlidesPerView}
                        freeMode={images.length > 4}
                        watchSlidesProgress={true}
                        modules={[FreeMode, Thumbs]}
                        className="w-full"
                    >
                        {images.map((src, index) => (
                            <SwiperSlide
                                key={index}
                                className="[&.swiper-slide-thumb-active]:opacity-100 transition-opacity cursor-pointer rounded-[10px] overflow-hidden"
                            >
                                <div className="relative w-full aspect-[16/9]">
                                    <Image
                                        src={src}
                                        alt={`thumb-${index}`}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            )}
        </div>
    );
}