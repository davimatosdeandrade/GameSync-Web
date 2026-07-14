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

interface CarouselProps {
    name?: string;
    products: Product[];
    aspect: "916" | "169" | "219";
    slidesPerView: number;
    autoplay?: boolean;
}

export default function Carousel({ name, products, aspect, slidesPerView, autoplay = false}: CarouselProps) {
    const swiperRef = useRef<SwiperType | null>(null);

    return(
        <div className="relative w-full">
            {name != null && 
                <Title
                    title={name}
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
                {products.map((product) => (
                    <SwiperSlide>
                        <CardProduct 
                            key={product.id}
                            product={product}
                            aspect={aspect}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}