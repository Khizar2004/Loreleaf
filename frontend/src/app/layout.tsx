import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "@/context/AuthContext";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Loreleaf - Personal Knowledge Management",
  description: "A personal knowledge management system inspired by Zettelkasten",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <div className="min-h-screen flex flex-col bg-gray-50">
            <Navbar />
            <main className="flex-grow container mx-auto py-6 px-4">
        {children}
            </main>
            <footer className="bg-gray-100 border-t py-4">
              <div className="container mx-auto px-4 text-center text-gray-600">
                &copy; {new Date().getFullYear()} Loreleaf. All rights reserved.
              </div>
            </footer>
          </div>
        </AuthProvider>
      </body>
    </html>
  );
}
