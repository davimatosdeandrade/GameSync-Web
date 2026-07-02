import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import NavBar from "../components/NavBar";
import Title from "../components/Title";
import SearchInput from "../components/SearchInput";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "GameSync",
    description: "Sua loja de games preferida!",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html
            lang="en"
            className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
        >
            <body className="bg-bg1 py-[10px] pl-[57px]">
                <NavBar />
                <Title
                    buttons={
                        <SearchInput 
                            placeholder="Pesquise..."
                        />
                    }
                />
                {children}
            </body>
        </html>
    );
}
