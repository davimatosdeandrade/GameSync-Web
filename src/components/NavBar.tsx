"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { User, ShoppingCart } from "lucide-react";

import SearchInput from "./SearchInput";
import Button from "./Button";

export default function NavBar() {
    const pathname = usePathname();

    const links = [
        { href: "/", label: "Destaques" },
        { href: "/catalogo", label: "Catálogo" },
        { href: "/sobre", label: "Sobre" },
        { href: "/Termos", label: "Termos" },
    ];

    return (
        <div className={`fixed z-3 top-0 left-0 flex h-screen w-[57px] bg-main rounded-r-[20px]`}>
            
        </div>
    );
}
