import QuestionCard from "@/components/QuestionCard";
import ToolCard from "@/components/ToolCard";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className=" min-h-screen bg-[lab(96_-0.41_-1.96)]">

      {/* Hero Section */}
      <section className="text-center py-20 px-4">
        <h1 className="text-5xl md:text-7xl font-bold leading-tight bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent block">
          Get hired faster with our mock interview practice tool
        </h1>
        <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
          Ace any job interview with unlimited mock interviews, tailored feedback, and an interactive interview simulator.
        </p>

        <Link href="/exam" className="mt-5 inline-block text-[18px] rounded-full cursor-pointer bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 text-white py-4 px-10">
          Practice Exam
        </Link>

      </section>

      {/* tool card */}
      <section className="grid gap-6 px-6 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto pb-20">
        <ToolCard />
      </section>
      {/* Question card */}
      <section className="grid gap-6 px-6 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto pb-20">
        <QuestionCard />
      </section>
    </main>
  );
}
