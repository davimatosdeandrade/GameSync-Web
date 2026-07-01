"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { User, ShoppingCart } from "lucide-react";

import SearchInput from "./SearchInput";
import Button from "./Button";

export default function NavBar() {
    const pathname = usePathname();
    const [isScrolled, setIsScrolled] = useState(false);

    const links = [
        { href: "/", label: "Destaques" },
        { href: "/catalogo", label: "Catálogo" },
        { href: "/sobre", label: "Sobre" },
        { href: "/Termos", label: "Termos" },
    ];

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, [])

    return (
        <div className={`flex fixed left-0 top-0 z-1 ${isScrolled ? "bg-c1" : "bg-transparent"} w-full px-[20px] py-[10px] gap-[10px] rounded-b-[10px] transition-colors`}>
            <Image
                src={"/logo.png"}
                className="flex-shrink-0"
                alt="GameSync logo"
                width={40}
                height={40}
            />
            <nav className="flex items-center bg-c3 h-[40px] px-[10px] gap-[10px] shadow-[0_0_0_2px] shadow-c1 rounded-[10px]">
                {links.map((link) => (
                    <Link
                        key={link.href}
                        href={link.href}
                        className={
                            pathname === link.href
                                ? "transition text-c4"
                                : "transition text-c5 hover:text-c4"
                        }
                    >
                        {link.label}
                    </Link>
                ))}
            </nav>
            <SearchInput
                placeholder="Pesquise por algum jogo..."
            />
            <Button 
                icon={<ShoppingCart size={18} />}
            />
            <Button 
                icon={<User size={18} />}
            />
        </div>
    );
}
