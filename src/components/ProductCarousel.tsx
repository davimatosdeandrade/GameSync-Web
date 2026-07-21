"use client"
import { Product } from "../types/product";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper";
import 'swiper/css';
import 'swiper/css/pagination'
import { Pagination } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Title from "./Title";
import ProductCard from "./ProductCard";
import Button from "./Button";
import { useRef } from "react";

type ProductCarouselProps = {
    name: string;
    aspect: "916" | "169";
    slidesPerView: number;
    products: Product[];
} 

export default function ProductCarousel({ name, aspect, slidesPerView, products}: ProductCarouselProps) {
    const swiperRef = useRef<SwiperType | null>(null);

    return(
        <div className="relative w-full">
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
            <Swiper
                onSwiper={(swiper) => (swiperRef.current = swiper)}
                slidesPerView={slidesPerView}
                spaceBetween={20}
                slidesOffsetBefore={40}
                slidesOffsetAfter={40}           
                modules={[Pagination]}
            >
                {products.map((product)=> (
                    <SwiperSlide key={product.id}>
                        <ProductCard 
                            product={product} 
                            aspect={aspect} 
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}