import { Funnel } from "lucide-react";
import Button from "@/src/components/Button";
import CardProduct from "@/src/components/CardProduct";
import Title from "@/src/components/Title";
import { mockProducts } from "@/src/services/mocks";

export default function CatalogPage() {
    return (
        <>
        <Title
            name="Catálogo"
            buttons={
                <Button 
                    icon={<Funnel size={14}/>}
                />
            }
        />
        <div className="grid grid-cols-7 gap-[20px] w-full px-[40px]">
            {mockProducts.map((product) => (
                <CardProduct 
                    key={product.id} 
                    product={product} 
                    aspect="916"
                />
            ))}
        </div> 
        </>
    );
}
