import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Roudi Hannan | Software Engineer",
  description: "Portfolio of Roudi Hannan - IT Specialist and Software Engineer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} antialiased min-h-screen flex flex-col`}>
        <Navbar />
        <main className="grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}