import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
    title: "Конфигурация",
    description: "Страница настроек",
};


export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <main>
            {children}
        </main>
    );
}
