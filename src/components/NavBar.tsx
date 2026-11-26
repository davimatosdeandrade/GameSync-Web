"use client";
import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { Home, Gamepad2, ShoppingCart, User } from "lucide-react";
import SearchInput from "./SearchInput";
import Button from "./Button";
import Login from "./login";
import { getCatalog } from "../services/api";
import { ProductSimpleDetail } from "../types/product";
import { User as UserType } from "../types/user";
import { getPrice } from "../utils/price";

interface NavBarProps {
    user: UserType | null;
}

export default function NavBar({ user }: NavBarProps) {
    const pathname = usePathname();
    const router = useRouter();
    const [search, setSearch] = useState("");
    const [results, setResults] = useState<ProductSimpleDetail[]>([]);
    const [showLogin, setShowLogin] = useState(false);
    const links = [
        { href: "/", label: "Destaques", icon: <Home size={14} /> },
        { href: "/catalog", label: "Catálogo", icon: <Gamepad2 size={14} /> },
        ...(user
            ? [
                  { href: "/cart", label: "Carrinho", icon: <ShoppingCart size={14} /> },
                  { href: "/profile", label: "Perfil", icon: <User size={14} /> },
              ]
            : []),
    ];

    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        setSearch(pathname === "/catalog" ? params.get("search") || "" : "");
        setResults([]);
    }, [pathname]);

    useEffect(() => {
        const open = () => setShowLogin(true);
        window.addEventListener("open-login", open);
        return () => window.removeEventListener("open-login", open);
    }, []);

    useEffect(() => {
        const trimmed = search.trim();

        if (pathname !== "/catalog" && !trimmed) {
            setResults([]);
            return;
        }

        let cancelled = false;
        const timer = setTimeout(async () => {
            if (pathname === "/catalog") {
                const current = new URLSearchParams(window.location.search).get("search") || "";
                if (trimmed !== current) {
                    router.replace(trimmed ? `/catalog?search=${encodeURIComponent(trimmed)}` : "/catalog");
                }
                return;
            }

            const data = await getCatalog(trimmed).catch(() => []);
            if (!cancelled) setResults(data.slice(0, 5));
        }, 200);

        return () => {
            cancelled = true;
            clearTimeout(timer);
        };
    }, [search, pathname, router]);

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            setResults([]);
            const query = search.trim() ? `?search=${encodeURIComponent(search.trim())}` : "";
            router.push(`/catalog${query}`);
        }
    };

    return (
        <>
            <div className="fixed z-4 top-0 left-1/2 -translate-x-1/2 flex justify-center items-center h-[77px] px-[20px] gap-[20px] 
                [background:radial-gradient(ellipse,rgba(0,0,0,1)_0%,transparent_70%)]"
            >
                <div className="relative min-w-[calc((100vw-40px)/5)] h-[37px]">
                    <div className="absolute top-0 right-0 w-full bg-button rounded-[20px]">
                        <SearchInput
                            placeholder="Pesquise por jogos, giftcards, DLCs..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            onKeyDown={handleKeyDown}
                            onBlur={() => setResults([])}
                        />

                        {pathname !== "/catalog" && results.map((product) => (
                            <div
                                key={product.id}
                                onMouseDown={() => {
                                    setResults([]);
                                    setSearch("");
                                    router.push(`/product/${product.id}`);
                                }}
                                className="group flex items-center justify-between w-full h-[37px] px-[20px] bg-button rounded-full hover:cursor-pointer"
                            >
                                <h4 className="group-hover:text-text1 transition duration-300">{product.name}</h4>
                                <h4 className="group-hover:text-text1 transition duration-300">{getPrice(product.offers)}</h4>
                            </div>
                        ))}
                    </div>
                </div>

                {links.map((link) => (
                    <Button key={link.href} icon={link.icon} active={pathname === link.href} onClick={() => router.push(link.href)} size={2} />
                ))}
                {!user && (
                    <Button text="Entrar" icon={<User size={14} />} onClick={() => setShowLogin(true)} size={3} />
                )}
            </div>

            <Login show={showLogin} onClose={() => setShowLogin(false)} />
        </>
    );
}
