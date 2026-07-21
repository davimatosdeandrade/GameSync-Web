import { Funnel } from "lucide-react";
import Button from "@/src/components/Button";
import ProductCard from "@/src/components/ProductCard";
import Title from "@/src/components/Title";
import { mockProducts } from "@/src/services/mocks";

export default function CatalogPage() {
    return (
        <>
        <Title
            name={7000 + " resultados"}
            buttons={
                <Button 
                    icon={<Funnel size={14}/>}
                />
            }
        />
        <div className="grid grid-cols-7 gap-[20px] w-full px-[40px]">
            {mockProducts.map((product) => (
                <ProductCard 
                    key={product.id} 
                    product={product} 
                    aspect="916"
                />
            ))}
        </div> 
        </>
    );
}
