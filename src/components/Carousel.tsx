"use client"
import { Product } from "../types/product";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper";
import 'swiper/css';
import 'swiper/css/pagination'
import { Autoplay, Pagination } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Title from "./Title";
import CardProduct from "./CardProduct";
import Button from "./Button";
import { useRef } from "react";
import Image from "next/image";

type CarouselProps = {
    name?: string;
    aspect: "916" | "169";
    slidesPerView: number;
    autoplay?: boolean;
} & (
    | { type: "cards"; items: Product[] }
    | { type: "gallery"; items: string[] }
)

export default function Carousel({ name, items, type, aspect, slidesPerView, autoplay = false}: CarouselProps) {
    const swiperRef = useRef<SwiperType | null>(null);

    const carouselImageAspect = {
        916: "aspect-[9/16]",
        169: "aspect-[16/9]",
    }

    return(
        <div className="relative w-full">
            {name != null && 
                <Title
                    name={name}
                    buttons={
                        <>
                        <Button 
                            icon={<ChevronLeft size={14} />}
                            onClick={() => swiperRef.current?.slidePrev()}
                        />
                        <Button 
                            icon={<ChevronRight size={14} />}
                            onClick={() => swiperRef.current?.slideNext()}
                        />
                        </>
                    }
                />
            }
            <Swiper
                onSwiper={(swiper) => (swiperRef.current = swiper)}
                slidesPerView={slidesPerView}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                }}
                spaceBetween={20}
                slidesOffsetBefore={40}
                slidesOffsetAfter={40}           
                modules={[...(autoplay ? [Autoplay] : []), Pagination]}
                className={`w-full ${name == null && "mt-[20px]"}`}
            >
                {type === "cards" && (items as Product[]).map((item) => (
                    <SwiperSlide key={item.id}>
                        <CardProduct 
                            product={item} 
                            aspect={aspect} 
                        />
                    </SwiperSlide>
                ))}

                {type === "gallery" && (items as string[]).map((item, index) => (
                    <SwiperSlide key={index}>
                        <div className={`relative w-full ${carouselImageAspect[aspect]}`}>
                            <Image
                                src={item}
                                alt={`imagem-${index}`}
                                fill
                                className="object-cover rounded-[20px]"
                            />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}