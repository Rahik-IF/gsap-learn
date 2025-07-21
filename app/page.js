'use client';
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 to-black text-white px-6 py-16 sm:px-12">
      <main className="max-w-2xl text-center space-y-8">
        <h1 className="text-4xl sm:text-5xl font-bold text-cyan-400">
          Learn GSAP with Next.js & Tailwind CSS
        </h1>

        <p className="text-lg text-gray-300">
          Dive into modern, scroll-based animation using <strong>GSAP</strong>,
          with <strong>ScrollTrigger</strong> and elegant UI — built with the latest
          Next.js App Router setup.
        </p>

        <Link
          href="/scrollTrigger"
          className="inline-flex items-center gap-2 bg-cyan-600 hover:bg-cyan-500 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300"
        >
          Explore ScrollTrigger Demos <FaArrowRight />
        </Link>
      </main>
    </div>
  );
}
