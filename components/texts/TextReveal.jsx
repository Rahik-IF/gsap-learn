'use client';

import { useRef } from 'react';
import { gsap } from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(TextPlugin, ScrollTrigger);

export default function TextReveal() {
  const sectionRef = useRef();
  const textRef = useRef();

  useGSAP(() => {
    gsap.fromTo(
      textRef.current,
      {
        text: '',
      },
      {
        text: 'Experience Next-Level Animations with GSAP TextPlugin!',
        duration: 3,
        ease: 'power1.inOut',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top center',
          end: 'bottom top',
          scrub: true,
        },
      }
    );
  }, { scope: sectionRef });

  return (
    <section
      ref={sectionRef}
      className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-black via-gray-900 to-black px-6 py-32 text-white"
    >
      <h2
        ref={textRef}
        className="text-3xl sm:text-4xl md:text-5xl font-bold text-cyan-400 text-center max-w-3xl leading-snug"
      ></h2>
    </section>
  );
}
