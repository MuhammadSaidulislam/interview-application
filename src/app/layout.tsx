import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import "./globals.css"
import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";


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
              Ace Your Next Job Interview
            </h1>
            <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
              Practice interview questions, get expert tips, and land your dream job with confidence.
            </p>
            <Button className="mt-6 cursor-pointer bg-gradient-to-r from-emerald-600 to-cyan-600 hover:from-emerald-700 hover:to-cyan-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 shadow-xl hover:shadow-emerald-500/30 transform hover:scale-105">
              Get Started
            </Button>

          </section>

          {/* Cards Section */}
          <section className="grid gap-6 px-6 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto pb-20">
            <Card className="bg-white rounded-2xl shadow-md hover:shadow-xl transition">
              <CardHeader>
                <CardTitle className="text-xl text-indigo-600">Mock Interviews</CardTitle>
              </CardHeader>
              <CardContent className="text-slate-600">
                Practice real-world interview questions tailored for your role.
              </CardContent>
            </Card>

            <Card className="bg-white rounded-2xl shadow-md hover:shadow-xl transition">
              <CardHeader>
                <CardTitle className="text-xl text-indigo-600">Resume Feedback</CardTitle>
              </CardHeader>
              <CardContent className="text-slate-600">
                Get AI-powered feedback on your resume and cover letter.
              </CardContent>
            </Card>

            <Card className="bg-white rounded-2xl shadow-md hover:shadow-xl transition">
              <CardHeader>
                <CardTitle className="text-xl text-indigo-600">Career Insights</CardTitle>
              </CardHeader>
              <CardContent className="text-slate-600">
                Stay ahead with market trends and role-specific salary insights.
              </CardContent>
            </Card>
          </section>

        </main>
        <Footer />
      </body>
    </html>
  );
}
