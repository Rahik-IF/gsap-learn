'use client';

import { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

export default function GsapScrollUseGSAP() {
  const container = useRef();

  useGSAP(() => {
    gsap.from('.box', {
      y: 150,
      opacity: 0,
      duration: 1.5,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.box',
        start: 'top 80%',
        toggleActions: 'play none none reverse',
      },
    });
  }, { scope: container });

  return (
    <section
      ref={container}
      className="min-h-screen flex items-center justify-center bg-gradient-to-r from-cyan-500 to-blue-800 p-8"
    >
      <div className="box bg-white text-black p-10 rounded-xl shadow-xl max-w-xl text-center">
        <h1 className="text-4xl font-bold mb-4">useGSAP + ScrollTrigger</h1>
        <p className="text-lg">
          This card fades in and slides up when you scroll to it — powered by GSAP’s React hook!
        </p>
      </div>
    </section>
  );
}
