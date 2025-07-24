'use client';
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

export default function Home() {

  const pages= [
    { title: "GSAP ScrollTrigger Demos", path: "/scrollTrigger" },
    { title: "GSAP Text Animation", path: "/texts-animations" },
  ];
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

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
          {pages.map((page, index) => (
            <Link
              key={index}
              href={page.path}
              className="group block bg-gradient-to-tr from-gray-800 to-gray-700 p-6 rounded-xl shadow-lg hover:shadow-2xl transform transition duration-300 hover:-translate-y-1 hover:scale-[1.02]"
            >
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold group-hover:text-cyan-400 transition">
                  {page.title}
                </h2>
                <FaArrowRight className="text-gray-400 group-hover:text-cyan-300 transition" />
              </div>
            </Link>
          ))}
        </div>

        <p className="text-sm text-gray-500 mt-8">
          &copy; {new Date().getFullYear()} GSAP Animations by Rahik
        </p>
      </main>
    </div>
  );
}
