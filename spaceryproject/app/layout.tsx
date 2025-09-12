import type { Metadata } from "next";
import { Jersey_25 } from "next/font/google";
import { Plus_Jakarta_Sans } from "next/font/google";
// import localFont from "next/font/local";
import "./globals.css";

import Header from "@/components/layout/header/Header";
import Footer from "@/components/layout/footer/Footer";

// 1. Import Jersey 25 depuis Google Fonts
const jersey = Jersey_25({
  subsets: ["latin"],
  weight: "400", // Jersey n’a qu’un seul style
  variable: "--font-jersey", // variable CSS utilisée par Tailwind
});

// 2. Import Plus Jakarta Sans depuis Google Fonts
const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"], // Tous les styles
  variable: "--font-jakarta", // variable CSS utilisée par Tailwind
});

// 3. Import d’une police locale (optionnel)

export const metadata: Metadata = {
  title: "Spacery",
  description: "Explore • Filter • Feel",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr">
      <body
        className={`${jersey.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
