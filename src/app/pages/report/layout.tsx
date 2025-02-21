import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
    title: "отчеты",
    description: "Страница отчетов",
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
