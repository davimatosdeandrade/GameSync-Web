import { Funnel } from "lucide-react";
import Button from "@/src/components/Button";
import ProductCard from "@/src/components/ProductCard";
import Title from "@/src/components/Title";
import { getCatalog } from "@/src/services/api";

export default async function CatalogPage() {
    const products = await getCatalog();

    return (
        <>
            <Title
                name={`${products.length} resultados`}
                buttons={<Button icon={<Funnel size={14} />} />}
            />
            <div className="grid grid-cols-7 gap-[20px] w-full px-[37px]">
                {products.map((product) => (
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
