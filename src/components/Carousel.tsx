"use client"
import { Product } from "../types/product";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/pagination'
import { Pagination, Keyboard, Autoplay } from "swiper/modules";

import Title from "./Title";
import CardProduct from "./CardProduct";

interface CarouselProps {
    name?: string;
    products: Product[];
    aspect: "916" | "169" | "219";
}

export default function Carousel({ name, products, aspect }: CarouselProps) {
    const slidesPerViewCarousel = {
        "916": 7,
        "169": 2.333,
        "219": 1
    }

    return(
        <div className="w-full">
            {name != null && 
                <Title
                    title={name}
                />
            }
            <Swiper
                slidesPerView={slidesPerViewCarousel[aspect]}
                spaceBetween={20}
                slidesOffsetBefore={40}
                slidesOffsetAfter={40}
                modules={[Pagination, Keyboard, Autoplay]}
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

