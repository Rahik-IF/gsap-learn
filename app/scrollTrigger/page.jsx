'use client';

import Link from 'next/link';
import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

const demos = [
  { title: 'Simple Rotation', path: '/scrollTrigger/demo-1' },
  { title: 'Simple Moving', path: '/scrollTrigger/demo-2' },
  { title: 'Rotation on Scroll', path: '/scrollTrigger/demo-3' },
  { title: 'Ping Pong Balls Rotation+Movement', path: '/scrollTrigger/demo-4' },
  { title: 'Parallex Effects', path: '/scrollTrigger/demo-5' },
];

function ScrollTriggerPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-black text-white py-16 px-4">
      <div className="max-w-5xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">GSAP ScrollTrigger Demos</h1>
        <p className="text-lg text-gray-300">
          Explore interactive animations built with GSAP and ScrollTrigger.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {demos.map((demo, index) => (
          <Link
            key={index}
            href={demo.path}
            className="group block bg-gradient-to-tr from-gray-800 to-gray-700 p-6 rounded-xl shadow-lg hover:shadow-2xl transform transition duration-300 hover:-translate-y-1 hover:scale-[1.02]"
          >
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold group-hover:text-cyan-400 transition">
                {demo.title}
              </h2>
              <FaArrowRight className="text-gray-400 group-hover:text-cyan-300 transition" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default ScrollTriggerPage;
