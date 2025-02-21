import type { Metadata } from "next";
import React from "react";
import Navbar from "@/app/components/Navbar";
export const metadata: Metadata = {
    title: "СКЛАД",
    description: "Система учета товаров",
};


export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <main>
            <Navbar />
            {children}
        </main>
    );
}
