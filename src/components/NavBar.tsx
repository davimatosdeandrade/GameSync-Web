"use client";
import { usePathname, useRouter } from "next/navigation";
import { Home, Gamepad2 } from "lucide-react";
import SearchInput from "./SearchInput";
import Button from "./Button";
// import { useState, useEffect } from "react";

export default function NavBar() {
    const pathname = usePathname();
    const router = useRouter();
    // const [scrolled, setIsScrolled] = useState(false);

    const links = [
        { href: "/", label: "Destaques", icon: <Home size={14} /> },
        { href: "/catalog", label: "Catálogo", icon: <Gamepad2 size={14} /> },
    ];

    // useEffect(() => {
    //     const handleScroll = () => {
    //         setIsScrolled(window.scrollY > 40);
    //     };

    //     window.addEventListener("scroll", handleScroll);

    //     return () => window.removeEventListener("scroll", handleScroll);
    // }, [])

    return (
        <div className="fixed z-4 top-0 left-1/2 -translate-x-1/2 flex justify-center items-center h-[77px] px-[20px] gap-[20px] [background:radial-gradient(ellipse,rgba(0,0,0,1)_0%,transparent_70%)]">       
            <SearchInput placeholder="Pesquise..." />
            {links.map((link) => (
                <Button
                    key={link.href}
                    icon={link.icon}
                    active={pathname === link.href}
                    onClick={() => router.push(link.href)}
                />
            ))}
        </div>
    );
}