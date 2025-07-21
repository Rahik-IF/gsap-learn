// app/scrollTrigger/layout.jsx
'use client';

import React from 'react';
import Link from 'next/link';

export default function ScrollTriggerLayout({ children }) {
  return (
    <div className="min-h-screen bg-gray-950 text-white flex flex-col">
      {/* Header / Nav */}
      <header className="bg-gray-900 border-b border-gray-800 py-4 px-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-cyan-400">GSAP ScrollTrigger</h1>
        <Link
          href="/"
          className="text-sm text-gray-300 hover:text-cyan-300 transition"
        >
          ← Back to Home
        </Link>
      </header>

      {/* Main Content */}
      <main className="flex-1 p-6">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-800 text-center text-sm text-gray-500 py-4">
        &copy; {new Date().getFullYear()} GSAP Animations by Rahik
      </footer>
    </div>
  );
}
