"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { User, Mail, Lock, KeyRound, LogIn, UserPlus } from "lucide-react";
import { toast } from "react-toastify";
import Background from "./Background";
import Button from "./Button";
import { login, register } from "../services/auth";

interface LoginProps {
    show: boolean;
    onClose: () => void;
}

export function LoginButton({ text = "Entrar em uma conta" }: { text?: string }) {
    return (
        <Button
            text={text}
            icon={<LogIn size={14} />}
            onClick={() => window.dispatchEvent(new Event("open-login"))}
            size={3}
        />
    );
}

export default function Login({ show, onClose }: LoginProps) {
    const router = useRouter();

    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");
    const [loginLoading, setLoginLoading] = useState(false);

    const [registerName, setRegisterName] = useState("");
    const [registerEmail, setRegisterEmail] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");
    const [registerConfirmPassword, setRegisterConfirmPassword] = useState("");
    const [registerLoading, setRegisterLoading] = useState(false);

    const handleLogin = async () => {
        if (!loginEmail.trim() || !loginPassword) {
            toast.error("Preencha seu e-mail e senha.");
            return;
        }

        setLoginLoading(true);

        const result = await login({
            email: loginEmail,
            password: loginPassword,
        });

        setLoginLoading(false);

        if (result.error) {
            toast.error(result.error);
            return;
        }

        toast.success(`Bem-vindo, ${result.user?.name}!`);
        setLoginEmail("");
        setLoginPassword("");
        window.dispatchEvent(new Event("auth-change"));
        onClose();
        router.refresh();
    };

    const handleRegister = async () => {
        if (!registerName.trim() || !registerEmail.trim() || !registerPassword) {
            toast.error("Preencha todos os campos para se cadastrar.");
            return;
        }

        if (registerPassword !== registerConfirmPassword) {
            toast.error("As senhas não coincidem.");
            return;
        }

        setRegisterLoading(true);

        const result = await register({
            name: registerName,
            email: registerEmail,
            password: registerPassword,
        });

        setRegisterLoading(false);

        if (result.error) {
            toast.error(result.error);
            return;
        }

        toast.success(`Conta criada com sucesso! Bem-vindo, ${result.user?.name}!`);
        setRegisterName("");
        setRegisterEmail("");
        setRegisterPassword("");
        setRegisterConfirmPassword("");
        window.dispatchEvent(new Event("auth-change"));
        onClose();
        router.refresh();
    };

    return (
        <Background
            show={show}
            onClose={onClose}
            elements={
                <div className="w-full max-w-[920px] mx-[37px] bg-main rounded-[20px] p-[20px] flex gap-[20px]">
                    <div className="flex-1 flex flex-col justify-between gap-[20px]">
                        <div className="flex flex-col gap-[20px]">
                            <div className="flex flex-col gap-[4px]">
                                <h1>Entrar</h1>
                                <h4>Acesse sua conta para ver seus itens, pedidos e compras.</h4>
                            </div>

                            <div className="flex flex-col gap-[14px]">
                                <div className="flex flex-col gap-[8px]">
                                    <h3>E-mail</h3>
                                    <div className="relative h-[37px] w-full rounded-full transition duration-300 bg-main2 shadow-[0_0_0_2px] shadow-button hover:shadow-icon focus-within:shadow-icon text-text2 focus-within:text-icon">
                                        <input
                                            type="email"
                                            placeholder="seu@email.com"
                                            value={loginEmail}
                                            onChange={(e) => setLoginEmail(e.target.value)}
                                            className="w-full h-full bg-transparent text-[14px] font-[400] outline-0 pl-[14px] pr-[40px] rounded-full text-title placeholder:text-placeholder"
                                        />
                                        <Mail className="absolute top-[12px] right-[12px]" size={14} />
                                    </div>
                                </div>

                                <div className="flex flex-col gap-[8px]">
                                    <h3>Senha</h3>
                                    <div className="relative h-[37px] w-full rounded-full transition duration-300 bg-main2 shadow-[0_0_0_2px] shadow-button hover:shadow-icon focus-within:shadow-icon text-text2 focus-within:text-icon">
                                        <input
                                            type="password"
                                            placeholder="Digite sua senha"
                                            value={loginPassword}
                                            onChange={(e) => setLoginPassword(e.target.value)}
                                            onKeyDown={(e) => {
                                                if (e.key === "Enter") handleLogin();
                                            }}
                                            className="w-full h-full bg-transparent text-[14px] font-[400] outline-0 pl-[14px] pr-[40px] rounded-full text-title placeholder:text-placeholder"
                                        />
                                        <Lock className="absolute top-[12px] right-[12px]" size={14} />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <Button
                            text={loginLoading ? "Entrando..." : "Entrar"}
                            icon={<LogIn size={14} />}
                            onClick={handleLogin}
                            disabled={loginLoading}
                            size={1}
                        />
                    </div>

                    <div className="w-[2px] bg-button rounded-full shrink-0" />

                    <div className="flex-1 flex flex-col justify-between gap-[20px]">
                        <div className="flex flex-col gap-[20px]">
                            <div className="flex flex-col gap-[4px]">
                                <h1>Criar conta</h1>
                                <h4>Ainda não tem conta? Cadastre-se agora.</h4>
                            </div>

                            <div className="flex flex-col gap-[14px]">
                                <div className="flex flex-col gap-[8px]">
                                    <h3>Nome</h3>
                                    <div className="relative h-[37px] w-full rounded-full transition duration-300 bg-main2 shadow-[0_0_0_2px] shadow-button hover:shadow-icon focus-within:shadow-icon text-text2 focus-within:text-icon">
                                        <input
                                            type="text"
                                            placeholder="Seu nome"
                                            value={registerName}
                                            onChange={(e) => setRegisterName(e.target.value)}
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
                                            value={registerEmail}
                                            onChange={(e) => setRegisterEmail(e.target.value)}
                                            className="w-full h-full bg-transparent text-[14px] font-[400] outline-0 pl-[14px] pr-[40px] rounded-full text-title placeholder:text-placeholder"
                                        />
                                        <Mail className="absolute top-[12px] right-[12px]" size={14} />
                                    </div>
                                </div>

                                <div className="flex flex-col gap-[8px]">
                                    <h3>Senha</h3>
                                    <div className="relative h-[37px] w-full rounded-full transition duration-300 bg-main2 shadow-[0_0_0_2px] shadow-button hover:shadow-icon focus-within:shadow-icon text-text2 focus-within:text-icon">
                                        <input
                                            type="password"
                                            placeholder="Mínimo de 8 caracteres"
                                            value={registerPassword}
                                            onChange={(e) => setRegisterPassword(e.target.value)}
                                            className="w-full h-full bg-transparent text-[14px] font-[400] outline-0 pl-[14px] pr-[40px] rounded-full text-title placeholder:text-placeholder"
                                        />
                                        <Lock className="absolute top-[12px] right-[12px]" size={14} />
                                    </div>
                                </div>

                                <div className="flex flex-col gap-[8px]">
                                    <h3>Confirmar senha</h3>
                                    <div className="relative h-[37px] w-full rounded-full transition duration-300 bg-main2 shadow-[0_0_0_2px] shadow-button hover:shadow-icon focus-within:shadow-icon text-text2 focus-within:text-icon">
                                        <input
                                            type="password"
                                            placeholder="Confirme sua senha"
                                            value={registerConfirmPassword}
                                            onChange={(e) => setRegisterConfirmPassword(e.target.value)}
                                            onKeyDown={(e) => {
                                                if (e.key === "Enter") handleRegister();
                                            }}
                                            className="w-full h-full bg-transparent text-[14px] font-[400] outline-0 pl-[14px] pr-[40px] rounded-full text-title placeholder:text-placeholder"
                                        />
                                        <KeyRound className="absolute top-[12px] right-[12px]" size={14} />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <Button
                            text={registerLoading ? "Criando..." : "Cadastrar"}
                            icon={<UserPlus size={14} />}
                            onClick={handleRegister}
                            disabled={registerLoading}
                            size={1}
                        />
                    </div>
                </div>
            }
        />
    );
}
