import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import LenisProvider from "@/components/provider/LenisProvider";
// import SmoothScroll from "@/components/provider/LenisProvider";
// import Footer from "@/components/footer/page";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Welcome to my portfolio! I’m a passionate and detail-oriented developer/designer dedicated to crafting clean, modern, and user-friendly digital experiences. My work combines creativity and technology to deliver impactful results — from responsive web applications to elegant user interfaces.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-x-clip w-full`}
      >
        <LenisProvider>
        {children}
        </LenisProvider>
      </body>

    </html>
  );
}
