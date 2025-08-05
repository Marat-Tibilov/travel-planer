import type { Metadata } from "next";
import { Geist, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import {Toaster} from "react-hot-toast";
import {CheckAuth} from "@/app/check-auth";


const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
    display: "swap",
});

const geistMono = JetBrains_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
    display: "swap",
});

export const metadata: Metadata = {
    title: "WanderPlan",
    description: "Your travel planner",
};

export default function RootLayout({children,}: Readonly<{ children: React.ReactNode; }>) {
    return (
        <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
        <body className="antialiased bg-white text-black">
        <div className="min-h-screen flex flex-col">
            <CheckAuth>
                <Header />
                <main className="flex-1 p-4">
                    {children}
                    <Toaster position="top-right" toastOptions={{ duration: 3000 }} />
                </main>
            </CheckAuth>
        </div>
        </body>
        </html>
    );
}