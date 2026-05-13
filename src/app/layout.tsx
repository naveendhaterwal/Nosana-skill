import type { Metadata } from "next";
import { Space_Grotesk, Space_Mono, Inter } from "next/font/google";
import "./globals.css";
import { Preloader } from "@/components/ui/preloader";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk"
});

const spaceMono = Space_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-space-mono"
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter"
});

export const metadata: Metadata = {
  title: "Nosana Skill Marketplace",
  description: "Discover reusable deployment skills for AI apps, agents, APIs, GPU workloads, debugging, and orchestration.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} ${spaceGrotesk.variable} ${spaceMono.variable} antialiased font-sans min-h-screen flex flex-col bg-background text-foreground`}>
        <Preloader />
        {children}
      </body>
    </html>
  );
}
