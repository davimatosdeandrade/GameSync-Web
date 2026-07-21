import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "../components/NavBar";
import "overlayscrollbars/overlayscrollbars.css";
import ScrollWrapper from "../components/ScrollWrapper";

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
            <body className="bg-bg1 pb-[20px]">
                <ScrollWrapper>
                    <div className="fixed bottom-0 z-2 w-full h-[40px] bg-linear-to-t from-bg1 to-bg1/0"/>
                    <NavBar />
                    {children}
                </ScrollWrapper>
            </body>
        </html>
    );
}