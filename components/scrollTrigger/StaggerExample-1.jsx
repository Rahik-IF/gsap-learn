// app/scrollTrigger/stagger-demo/page.jsx
'use client';

import { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const data = [
  'Creative Design',
  'Stunning Animation',
  'Smooth Scroll Effects',
  'Responsive Layout',
  'Built with GSAP + Next.js'
];

export default function StaggerScrollDemo() {
  const container = useRef();

  useGSAP(() => {
    gsap.fromTo(
      '.stagger-item',
      {
        opacity: 0,
        y: 80,
        rotateX: 45,
        transformOrigin: 'top center'
      },
      {
        opacity: 1,
        y: 0,
        rotateX: 0,
        duration: 1,
        ease: 'back.out(1.7)',
        stagger: 0.2,
        scrollTrigger: {
          trigger: container.current,
          start: 'top 75%',
          end: 'bottom 20%',
          toggleActions: 'play reverse play reverse',
        }
      }
    );
  }, { scope: container });

  return (
    <section
      ref={container}
      className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white px-8 py-20 flex flex-col items-center justify-center space-y-8"
    >
      <h2 className="text-4xl font-bold text-center text-cyan-400">
        Scroll Stagger Animation
      </h2>
      <ul className="space-y-6 w-full max-w-3xl">
        {data.map((item, index) => (
          <li
            key={index}
            className="stagger-item bg-gray-800 text-lg sm:text-xl text-center py-6 px-4 rounded-xl shadow-md border border-gray-700 hover:scale-105 transition"
          >
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
}
