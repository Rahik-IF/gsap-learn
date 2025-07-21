'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function GsapScrollSection() {
  const sectionRef = useRef(null);
  const boxRef = useRef(null);

  useEffect(() => {
    const el = sectionRef.current;
    const box = boxRef.current;

    gsap.fromTo(
      box,
      { y: 200, opacity: 0, rotate: 10 },
      {
        y: 0,
        opacity: 1,
        rotate: 0,
        duration: 1.5,
        ease: 'power4.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 80%',
          end: 'bottom 60%',
          scrub: false,
          toggleActions: 'play none none reverse',
        },
      }
    );
  }, []);

  return (
    <section
      ref={sectionRef}
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-800 to-purple-800 text-white p-10"
    >
      <div
        ref={boxRef}
        className="bg-white text-black p-10 rounded-3xl shadow-2xl text-center max-w-lg w-full transform transition-all duration-300"
      >
        <h2 className="text-4xl font-bold mb-4">GSAP + ScrollTrigger</h2>
        <p className="text-lg">
          This box slides up and fades in as you scroll to it. Welcome to modern animation magic!
        </p>
      </div>
    </section>
  );
}
