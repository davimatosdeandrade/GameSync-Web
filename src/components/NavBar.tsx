"use client";
import { useEffect, useRef, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { Home, Gamepad2 } from "lucide-react";
import SearchInput from "./SearchInput";
import Button from "./Button";
import { getCatalog } from "../services/api";
import { ProductSimpleDetail, Offer } from "../types/product";

function getPrice(offers: Offer[] = []) {
    if (!offers || offers.length === 0) return "Esgotado";
    const prices = offers.map((o) => Number(o.price));
    const lowest = Math.min(...prices);
    const highest = Math.max(...prices);
    if (lowest !== highest) {
        return `Entre R$${lowest.toFixed(2)} e R$${highest.toFixed(2)}`;
    }
    return `R$${highest.toFixed(2)}`;
}

export default function NavBar() {
    const pathname = usePathname();
    const router = useRouter();

    const [search, setSearch] = useState("");
    const [results, setResults] = useState<ProductSimpleDetail[]>([]);
    const debounceRef = useRef<NodeJS.Timeout | null>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    const links = [
        { href: "/", label: "Destaques", icon: <Home size={14} /> },
        { href: "/catalog", label: "Catálogo", icon: <Gamepad2 size={14} /> },
    ];

    // Sincroniza o input com a URL na página de catálogo
    useEffect(() => {
        if (pathname === "/catalog") {
            const params = new URLSearchParams(window.location.search);
            setSearch(params.get("search") || "");
            setResults([]);
        } else {
            setSearch("");
            setResults([]);
        }
    }, [pathname]);

    // Fecha o dropdown se clicar fora
    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
                setResults([]);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setSearch(value);

        if (debounceRef.current) clearTimeout(debounceRef.current);

        if (pathname === "/catalog") {
            debounceRef.current = setTimeout(() => {
                const query = value.trim() ? `?search=${encodeURIComponent(value.trim())}` : "";
                router.replace(`/catalog${query}`);
            }, 200);
        } else {
            if (value.trim()) {
                debounceRef.current = setTimeout(async () => {
                    try {
                        const data = await getCatalog(value.trim());
                        setResults(data.slice(0, 5));
                    } catch (error) {
                        setResults([]);
                    }
                }, 200);
            } else {
                setResults([]);
            }
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            setResults([]);
            const query = search.trim() ? `?search=${encodeURIComponent(search.trim())}` : "";
            router.push(`/catalog${query}`);
        }
    };

    return (
        <div className="fixed z-4 top-0 left-1/2 -translate-x-1/2 flex justify-center items-center h-[77px] px-[20px] gap-[20px] 
            [background:radial-gradient(ellipse,rgba(0,0,0,1)_0%,transparent_70%)]"
        >       
            <div ref={containerRef} className="relative min-w-[calc((100vw-40px)/5)] h-[37px]">
                <div className="absolute top-0 right-0 w-full bg-button rounded-[20px]">
                    <SearchInput
                        placeholder="Pesquise por jogos, giftcards, DLCs..."
                        value={search}
                        onChange={handleSearch}
                        onKeyDown={handleKeyDown}
                    />

                    {pathname !== "/catalog" && results.map((product) => (
                        <div
                            key={product.id}
                            onClick={() => {
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
                <Button key={link.href} icon={link.icon} active={pathname === link.href} onClick={() => router.push(link.href)} size={2}/>
            ))}
        </div>
    );
}
