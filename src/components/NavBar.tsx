"use client";
import { usePathname, useRouter } from "next/navigation";
import { Home, Gamepad2, ArrowUp } from "lucide-react";
import SearchInput from "./SearchInput";
import Button from "./Button";
import { useState, useEffect } from "react";

export default function NavBar() {
    const pathname = usePathname();
    const router = useRouter();
    const [scrolled, setIsScrolled] = useState(false);

    const links = [
        { href: "/", label: "Destaques", icon: <Home size={14} /> },
        { href: "/catalogo", label: "Catálogo", icon: <Gamepad2 size={14} /> },
    ];

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 40);
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, [])

    return (
        <div className="fixed z-3 top-0 left-0 flex bg-linear-to-b from-bg1 to-bg1/0 justify-center items-center w-full h-[77px] px-[40px] gap-[20px]">
            <div className="absolute left-[40px] flex gap-[20px]">
                <div className="h-[37px] px-[20px] bg-main shadow-[0_0_0_2px] shadow-main rounded-[20px]">
                    <h1>Destaques</h1>
                </div>
                {scrolled &&
                <Button
                    icon={<ArrowUp size={14}/>}
                    size="default"
                    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                />}
            </div>
            <SearchInput placeholder="Pesquise..." />
            {links.map((link) => (
                <Button
                    key={link.href}
                    icon={link.icon}
                    size="default"
                    active={pathname === link.href}
                    onClick={() => router.push(link.href)}
                />
            ))}
        </div>
    );
}