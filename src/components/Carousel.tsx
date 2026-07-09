"use client"
import { Product } from "../types/product";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/pagination'
import { Pagination } from "swiper/modules";

import Title from "./Title";
import CardProduct from "./CardProduct";

interface CarouselProps {
    name?: string;
    products: Product[];
    aspect: "916" | "169" | "219";
    slidesPerView: number;
}

export default function Carousel({ name, products, aspect, slidesPerView}: CarouselProps) {
    return(
        <div className="w-full">
            {name != null && 
                <Title
                    title={name}
                    sticky={true}
                />
            }
            <Swiper
                slidesPerView={slidesPerView}
                spaceBetween={20}
                slidesOffsetBefore={40}
                slidesOffsetAfter={40}           
                modules={[Pagination]}
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

