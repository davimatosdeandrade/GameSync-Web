import { ChevronDown } from "lucide-react";
import Button from "@/src/components/Button";
import CardProduct from "@/src/components/CardProduct";
import Title from "@/src/components/Title";
import { mockProducts } from "@/src/services/mocks";

export default function CatalogoPage() {
    return (
        <>
        <Title
            title="Catálogo"
            sticky={true}
        />
        <div className="grid grid-cols-7 gap-[20px] w-full px-[40px] mb-[20px]">
            <Button 
                icon={<ChevronDown size={14} />} 
                text="Plataforma"
                size="featured"
                options={["teste", "teste", "teste"]}
            />
            <Button 
                icon={<ChevronDown size={14} />} 
                text="Ativação"
                size="featured"
            />
            <Button 
                icon={<ChevronDown size={14} />} 
                text="Sistema"
                size="featured"
            />
            <Button 
                icon={<ChevronDown size={14} />} 
                text="Tipo"
                size="featured"
            />
            <Button 
                icon={<ChevronDown size={14} />} 
                text="Categorias"
                size="featured"
            />
            <Button 
                icon={<ChevronDown size={14} />} 
                text="Distribuidor"
                size="featured"
            />
            <Button 
                icon={<ChevronDown size={14} />} 
                text="Preço"
                size="featured"
            />
        </div>
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
