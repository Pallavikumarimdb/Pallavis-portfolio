import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/main/Navbar";
import Footer from "@/components/main/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Pallavi Kumari - Full-Stack & AI Engineer",
  description:
    "Full-Stack Software Engineer building web and AI-powered products. 80+ merged open-source contributions across 15+ projects.",
  openGraph: {
    title: "Pallavi Kumari - Full-Stack & AI Engineer",
    description:
      "Full-Stack Software Engineer building web and AI-powered products. 80+ merged open-source contributions across 15+ projects.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${geistMono.variable}`}>
      <body className="bg-background font-sans text-zinc-300 antialiased overflow-x-hidden">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
