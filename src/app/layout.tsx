import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import "./globals.css"
import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import ToolCard from "@/components/ToolCard";
import QuestionCard from "@/components/QuestionCard";



export const metadata: Metadata = {
  title: "Interview",
  description: "Interview question",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
