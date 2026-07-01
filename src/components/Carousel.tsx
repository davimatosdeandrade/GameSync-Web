"use client"

import { Product } from "../types/product";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/pagination'
import { Pagination } from "swiper/modules";

import Title from "./Title";
import CardProduct from "./CardProduct";

interface CarouselProps {
    name: string;
    products: Product[];
}

export default function Carousel({ name, products }: CarouselProps) {
    return(
        <div className="w-full">
            <Title
                title={name}
            />
            <Swiper
                slidesPerView={2.333}
                spaceBetween={10}
                slidesOffsetBefore={20}
                slidesOffsetAfter={20}
                modules={[Pagination]}
                className="w-full mt-[10px]"
            >
                {products.map((product) => (
                    <SwiperSlide className="h-[1000px]">
                        <CardProduct 
                            key={product.id}
                            product={product}
                            size="featured"
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}