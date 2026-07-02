import { ChevronDown } from "lucide-react";

import Button from "@/src/components/Button";
import CardProduct from "@/src/components/CardProduct";
import Title from "@/src/components/Title";

import { mockProducts } from "@/src/services/mocks";

export default function CatalogoPage() {
    return (
        <div className="flex flex-wrap gap-[10px] mt-[10px]">  
            <Title
                buttons={
                    <>
                    <Button 
                        icon={<ChevronDown size={14} />} 
                        text="Plataforma"
                        size="featured"
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
                    </>
                }
            />
            <div className="flex flex-wrap w-full gap-[10px] px-[20px]">
                {mockProducts.map((product) => (
                <CardProduct 
                    key={product.id} 
                    product={product} 
                    size="default" 
                />
            ))}
            </div>         
        </div>
    );
}
