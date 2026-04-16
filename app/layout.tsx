import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import ContactModal from "@/app/components/ContactModal";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Blue Island Professional Pool Maintenance | Estero, FL",
  description:
    "Blue Island Professional Pool Maintenance offers expert pool cleaning, spa maintenance, water diagnostics, and equipment repairs in Estero, Bonita Springs, Naples, and Fort Myers, FL. Schedule your free estimate today!",
  keywords: [
    "pool maintenance Estero FL",
    "spa maintenance",
    "pool cleaning",
    "water diagnostics",
    "pool equipment repair",
    "Southwest Florida pool service",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="blue-island">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        <main>{children}</main>
        <Footer />
        <ContactModal />
      </body>
    </html>
  );
}
