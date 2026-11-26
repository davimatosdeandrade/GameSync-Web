"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import Button from "@/src/components/Button";
import { LoginButton } from "@/src/components/login";
import NotFoundCard from "@/src/components/NotFoundCard";
import Title from "@/src/components/Title";
import { getSessionUser, logout } from "@/src/services/auth";
import { User as UserType } from "@/src/types/user";
import { User, Mail, Gamepad2, ShoppingBag, Settings, LogOut, Lock, KeyRound, Check, Save, Trash2} from "lucide-react";

type ProfileTab = "items" | "orders" | "account";

export default function ProfilePage() {
    const router = useRouter();
    const [activeTab, setActiveTab] = useState<ProfileTab>("items");
    const [user, setUser] = useState<UserType | null | undefined>(undefined);

    useEffect(() => {
        const loadUser = () => {
            getSessionUser().then(setUser);
        };
        loadUser();
        window.addEventListener("auth-change", loadUser);
        return () => window.removeEventListener("auth-change", loadUser);
    }, []);

    const handleLogout = async () => {
        try {
            await logout();
            setUser(null);
            toast.info("Você saiu da sua conta.");
            router.refresh();
        } catch {
            toast.error("Erro ao sair da conta.");
        }
    };

    if (user === undefined) {
        return <Title name="Perfil" />;
    }

    if (!user) {
        return (
            <>
                <Title name="Perfil" />
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
                name="Perfil"
                buttons={<Button text="Sair" icon={<LogOut size={14} />} onClick={handleLogout} size={3} />}
            />

            <div className="flex flex-col gap-[20px] w-full px-[37px]">
                <div className="flex items-center justify-between w-full bg-main rounded-[20px] p-[20px] gap-[20px]">
                    <div className="flex items-center gap-[20px]">
                        <div className="flex items-center justify-center w-[77px] h-[77px] rounded-full bg-main2 shadow-[0_0_0_2px] shadow-button text-icon shrink-0">
                            <User size={32} />
                        </div>

                        <div className="flex flex-col gap-[10px]">
                            <h1>Olá, {user.name}</h1>
                            <div className="flex items-center gap-[14px] flex-wrap">
                                <div className="flex items-center gap-[8px] px-[14px] h-[37px] bg-main2 rounded-[20px]">
                                    <Mail size={14} className="text-icon" />
                                    <h4>{user.email}</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex items-center gap-[20px] w-full z-1">
                    <Button
                        text="Meus Itens"
                        icon={<Gamepad2 size={14} />}
                        active={activeTab === "items"}
                        onClick={() => setActiveTab("items")}
                        size={1}
                    />
                    <Button
                        text="Meus Pedidos"
                        icon={<ShoppingBag size={14} />}
                        active={activeTab === "orders"}
                        onClick={() => setActiveTab("orders")}
                        size={1}
                    />
                    <Button
                        text="Minha Conta"
                        icon={<Settings size={14} />}
                        active={activeTab === "account"}
                        onClick={() => setActiveTab("account")}
                        size={1}
                    />
                </div>

                {activeTab === "items" && (
                    <NotFoundCard
                        icon={<Gamepad2 size={28} />}
                        title="Você ainda não possui nenhum item"
                        message="Os jogos, DLCs e gift cards adquiridos aparecerão aqui com suas chaves de ativação."
                    />
                )}

                {activeTab === "orders" && (
                    <NotFoundCard
                        icon={<ShoppingBag size={28} />}
                        title="Você ainda não realizou nenhum pedido"
                        message="Aqui você poderá acompanhar o histórico de compras, valores e status de cada pedido."
                    />
                )}

                {activeTab === "account" && (
                    <div className="grid grid-cols-6 gap-[20px] w-full">
                        <div className="col-span-3 bg-main rounded-[20px] p-[20px] flex flex-col justify-between gap-[20px]">
                            <div className="flex flex-col gap-[20px]">
                                <h1>Dados da Conta</h1>

                                <div className="flex flex-col gap-[14px]">
                                    <div className="flex flex-col gap-[8px]">
                                        <h3>Nome</h3>
                                        <div className="relative h-[37px] w-full rounded-full transition duration-300 bg-main2 shadow-[0_0_0_2px] shadow-button hover:shadow-icon focus-within:shadow-icon text-text2 focus-within:text-icon">
                                            <input
                                                type="text"
                                                placeholder="Seu nome"
                                                defaultValue={user.name}
                                                className="w-full h-full bg-transparent text-[14px] font-[400] outline-0 pl-[14px] pr-[40px] rounded-full text-title placeholder:text-placeholder"
                                            />
                                            <User className="absolute top-[12px] right-[12px]" size={14} />
                                        </div>
                                    </div>

                                    <div className="flex flex-col gap-[8px]">
                                        <h3>E-mail</h3>
                                        <div className="relative h-[37px] w-full rounded-full transition duration-300 bg-main2 shadow-[0_0_0_2px] shadow-button hover:shadow-icon focus-within:shadow-icon text-text2 focus-within:text-icon">
                                            <input
                                                type="email"
                                                placeholder="seu@email.com"
                                                defaultValue={user.email}
                                                className="w-full h-full bg-transparent text-[14px] font-[400] outline-0 pl-[14px] pr-[40px] rounded-full text-title placeholder:text-placeholder"
                                            />
                                            <Mail className="absolute top-[12px] right-[12px]" size={14} />
                                        </div>
                                    </div>

                                    <div className="flex flex-col gap-[8px]">
                                        <h3>Informações da conta</h3>
                                        <div className="grid grid-cols-2 gap-[20px]">
                                            <div className="flex items-center justify-between px-[14px] h-[37px] bg-main2 rounded-[20px]">
                                                <h3>Status da conta</h3>
                                                <div className="flex items-center px-[10px] h-[20px] rounded-[20px] shadow-[0_0_0_2px] shadow-green-400/70 bg-green-400/20">
                                                    <h4 className="text-green-300">{user.active ? "Ativa" : "Inativa"}</h4>
                                                </div>
                                            </div>
                                            <div className="flex items-center justify-between px-[14px] h-[37px] bg-main2 rounded-[20px]">
                                                <h3>Membro desde</h3>
                                                <h4>--/--/----</h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <Button
                                text="Salvar alterações"
                                icon={<Save size={14} />}
                                size={1}
                            />
                        </div>

                        <div className="col-span-3 bg-main rounded-[20px] p-[20px] flex flex-col justify-between gap-[20px]">
                            <div className="flex flex-col gap-[20px]">
                                <h1>Alterar Senha</h1>

                                <div className="flex flex-col gap-[14px]">
                                    <div className="flex flex-col gap-[8px]">
                                        <h3>Senha atual</h3>
                                        <div className="relative h-[37px] w-full rounded-full transition duration-300 bg-main2 shadow-[0_0_0_2px] shadow-button hover:shadow-icon focus-within:shadow-icon text-text2 focus-within:text-icon">
                                            <input
                                                type="password"
                                                placeholder="Digite sua senha atual"
                                                className="w-full h-full bg-transparent text-[14px] font-[400] outline-0 pl-[14px] pr-[40px] rounded-full text-title placeholder:text-placeholder"
                                            />
                                            <Lock className="absolute top-[12px] right-[12px]" size={14} />
                                        </div>
                                    </div>

                                    <div className="flex flex-col gap-[8px]">
                                        <h3>Nova senha</h3>
                                        <div className="relative h-[37px] w-full rounded-full transition duration-300 bg-main2 shadow-[0_0_0_2px] shadow-button hover:shadow-icon focus-within:shadow-icon text-text2 focus-within:text-icon">
                                            <input
                                                type="password"
                                                placeholder="Digite a nova senha"
                                                className="w-full h-full bg-transparent text-[14px] font-[400] outline-0 pl-[14px] pr-[40px] rounded-full text-title placeholder:text-placeholder"
                                            />
                                            <KeyRound className="absolute top-[12px] right-[12px]" size={14} />
                                        </div>
                                    </div>

                                    <div className="flex flex-col gap-[8px]">
                                        <h3>Confirmar nova senha</h3>
                                        <div className="relative h-[37px] w-full rounded-full transition duration-300 bg-main2 shadow-[0_0_0_2px] shadow-button hover:shadow-icon focus-within:shadow-icon text-text2 focus-within:text-icon">
                                            <input
                                                type="password"
                                                placeholder="Confirme a nova senha"
                                                className="w-full h-full bg-transparent text-[14px] font-[400] outline-0 pl-[14px] pr-[40px] rounded-full text-title placeholder:text-placeholder"
                                            />
                                            <KeyRound className="absolute top-[12px] right-[12px]" size={14} />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <Button
                                text="Alterar senha"
                                icon={<Check size={14} />}
                                size={1}
                            />
                        </div>
                        <div className="col-span-6 bg-main rounded-[20px] p-[20px] flex items-center justify-between gap-[20px]">
                            <div className="flex flex-col gap-[4px]">
                                <h3>Desativar conta</h3>
                                <h4>
                                    Desative sua conta caso não queira mais utilizar a plataforma.
                                </h4>
                            </div>

                            <Button
                                text="Desativar conta"
                                icon={<Trash2 size={14} />}
                                size={3}
                                position="relative shrink-0"
                                cn="bg-red-400/20! hover:bg-red-400/30! shadow-red-400/70! hover:shadow-red-400! text-red-300! hover:text-red-200!"
                            />
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}
