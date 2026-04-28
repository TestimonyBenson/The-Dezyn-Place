import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer"; // Import the new Footer

const inter = Inter({ subsets: ["latin"] }); 

export const metadata: Metadata = {
  title: "The Dezyn Place | DezynFlo Consultants",
  description: "Premium hybrid services in Events, Cleaning, and Beautification.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <Navbar />
        {/* flex-grow ensures the main content expands to push the footer to the bottom */}
        <main className="min-h-screen flex flex-col flex-grow">
          {children}
        </main>
        <Footer /> {/* Add the Footer here */}
      </body>
    </html>
  );
}