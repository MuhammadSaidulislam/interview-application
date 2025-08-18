import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import "./globals.css"
import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import ToolCard from "@/components/ToolCard";



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
        <main className=" min-h-screen bg-[lab(96_-0.41_-1.96)]">

          {/* Hero Section */}
          <section className="text-center py-20 px-4">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent block">
             Get hired faster with our mock interview practice tool
            </h1>
            <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
           Ace any job interview with unlimited mock interviews, tailored feedback, and an interactive interview simulator.
            </p>
            <Button className="mt-6 cursor-pointer bg-gradient-to-r from-emerald-600 to-cyan-600 hover:from-emerald-700 hover:to-cyan-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 shadow-xl hover:shadow-emerald-500/30 transform hover:scale-105">
              Get Started
            </Button>

          </section>

         {/* tool card */}
<ToolCard/>

        </main>
        <Footer />
      </body>
    </html>
  );
}
