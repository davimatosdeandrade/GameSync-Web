import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "overlayscrollbars/overlayscrollbars.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import NavBar from "../components/NavBar";
import ScrollWrapper from "../components/ScrollWrapper";
import { getSessionUser } from "../services/auth";

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

export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const user = await getSessionUser();

    return (
        <html
            lang="en"
            className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
        >
            <body className="bg-bg1 pb-[20px]">
                <ScrollWrapper>
                    <div className="fixed bottom-0 z-2 w-full h-[40px] bg-linear-to-t from-bg1 to-bg1/0"/>
                    <NavBar user={user} />
                    {children}
                </ScrollWrapper>
                <ToastContainer
                    position="bottom-right"
                    autoClose={4000}
                    theme="dark"
                    toastClassName="bg-main! text-text1! rounded-[16px]! shadow-[0_0_0_2px_var(--color-button)]!"
                />
            </body>
        </html>
    );
}