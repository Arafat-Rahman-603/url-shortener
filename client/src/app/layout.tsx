import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/componentes/Navbar";
import Footer from "@/componentes/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "TrimURL – Free URL Shortener",
  description: "Shorten, share and track your links with TrimURL. Fast, free and reliable URL shortener with analytics.",
  keywords: "url shortener, link shortener, short links, free url shortener",
  openGraph: {
    title: "TrimURL – Free URL Shortener",
    description: "Shorten, share and track your links with TrimURL.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <body className="min-h-screen flex flex-col antialiased">
        <Navbar />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
