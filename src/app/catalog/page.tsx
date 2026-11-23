import { SearchX, SlidersHorizontal } from "lucide-react";
import Button from "@/src/components/Button";
import NotFoundCard from "@/src/components/NotFoundCard";
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
                name={`Catálogo - ${products.length} resultados`}
                buttons={<Button text="Filtrar" icon={<SlidersHorizontal size={14} />} size={3}/>}
            />
            {products.length > 0 ? (
                <div className="grid grid-cols-7 gap-[20px] w-full px-[37px]">
                    {products.map((product) => (
                        <ProductCard 
                            key={product.id} 
                            product={product} 
                            aspect="916"
                        />
                    ))}
                </div>
            ) : (
                <div className="w-full px-[37px]">
                    <NotFoundCard
                        icon={<SearchX size={28} />}
                        title="Nenhum produto encontrado"
                        message={
                            search
                                ? `Não encontramos nenhum resultado para "${search}". Tente pesquisar por outro termo.`
                                : "Nenhum produto disponível no catálogo no momento."
                        }
                    />
                </div>
            )}
        </>
    );
}
