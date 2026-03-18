import type { Metadata } from "next";
// import localFont from "next/font/local";
import "./globals.css";

import Header from "@/components/layout/header/Header";
import Footer from "@/components/layout/footer/Footer";

export const metadata: Metadata = {
  title: "Spacery",
  description: "Explore • Filter • Feel",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr">

    <body>
      <Header />

      {children}

      <Footer />
    </body>
  </html>
  );
}
