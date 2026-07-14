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
        />
        <div className="grid grid-cols-7 gap-[20px] w-full px-[40px] mb-[20px]">
            <Button 
                icon={<ChevronDown size={14} />} 
                text="Plataforma"
                options={["teste", "teste", "teste"]}
            />
            <Button 
                icon={<ChevronDown size={14} />} 
                text="Ativação"
                options={["teste", "teste", "teste"]}
            />
            <Button 
                icon={<ChevronDown size={14} />} 
                text="Sistema"
                options={["teste", "teste", "teste"]}
            />
            <Button 
                icon={<ChevronDown size={14} />} 
                text="Tipo"
                options={["teste", "teste", "teste"]}
            />
            <Button 
                icon={<ChevronDown size={14} />} 
                text="Categorias"
                options={["teste", "teste", "teste"]}
            />
            <Button 
                icon={<ChevronDown size={14} />} 
                text="Distribuidor"
                options={["teste", "teste", "teste"]}
            />
            <Button 
                icon={<ChevronDown size={14} />} 
                text="Preço"
                options={["teste", "teste", "teste"]}
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
