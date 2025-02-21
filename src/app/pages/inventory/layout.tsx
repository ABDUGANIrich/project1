import type { Metadata } from "next";
import React from "react";

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
        <html lang="en">
            <body className="antialiased">
                {children}
            </body>
        </html>
    );
}
