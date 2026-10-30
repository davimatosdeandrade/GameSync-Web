import Button from "@/src/components/Button";
import Title from "@/src/components/Title";
import { EllipsisVertical } from "lucide-react";   

export default async function CartPage() {
    return(
        <>
        <Title
            name="Carrinho"
            buttons={<Button text="Sem função" icon={<EllipsisVertical size={14} />} size={3}/>}
        />  
        <div className="h-[20px] w-full bg-red-900">
            
        </div>
        </>
    )
}