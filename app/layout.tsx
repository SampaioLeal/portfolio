import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";
import "./globals.css";

const fontInter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Antonio Sampaio - DevOps Engineer",
  description:
    "Profissional dedicado a otimizar infraestruturas, automatizar workflows, e garantir a integração e entrega contínua dos seus projetos. Transformando ideias em realidade.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt" className={cn("antialiased", fontInter.variable)}>
      <body>{children}</body>
    </html>
  );
}
