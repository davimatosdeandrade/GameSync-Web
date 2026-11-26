import Button from "@/src/components/Button";
import { LoginButton } from "@/src/components/login";
import NotFoundCard from "@/src/components/NotFoundCard";
import Title from "@/src/components/Title";
import { getSessionUser } from "@/src/services/auth";
import { EllipsisVertical, Lock } from "lucide-react";

export default async function CartPage() {
    const user = await getSessionUser();

    if (!user) {
        return (
            <>
                <Title name="Carrinho" />
                <div className="w-full px-[37px]">
                    <NotFoundCard
                        icon={<Lock size={28} />}
                        title="Acesso restrito"
                        message="Você não tem acesso a esta página porque ainda não fez login."
                        button={<LoginButton />}
                    />
                </div>
            </>
        );
    }

    return (
        <>
            <Title
                name="Carrinho"
                buttons={<Button text="Sem função" icon={<EllipsisVertical size={14} />} size={3} />}
            />
            <div className="h-[20px] w-full bg-red-900"></div>
        </>
    );
}
