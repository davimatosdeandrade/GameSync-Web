import { SlidersHorizontal } from "lucide-react";
import Button from "@/src/components/Button";
import ProductCard from "@/src/components/ProductCard";
import Title from "@/src/components/Title";
import { getCatalog } from "@/src/services/api";

interface CatalogPageProps {
    searchParams: Promise<{ search?: string }>;
}

export default async function CatalogPage({ searchParams }: CatalogPageProps) {
    const { search } = await searchParams;
    const products = await getCatalog(search);

    return (
        <>
            <Title
                name={`${products.length} resultados`}
                buttons={<Button icon={<SlidersHorizontal size={14} />} />}
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
