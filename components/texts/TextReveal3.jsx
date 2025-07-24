'use client';

import { useRef } from 'react';
import { gsap } from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(TextPlugin);

export default function AdvancedTextReveal2() {
  const textRef = useRef();
  const wordRefs = useRef([]);

  useGSAP(() => {
    const ctx = gsap.context(() => {
      // Typing text animation
      gsap.to(textRef.current, {
        text: 'Welcome to the World of Stunning Texts',
        duration: 3,
        ease: 'power1.inOut',
        repeat: -1,
        yoyo: true,
      });

      // Ping-pong word animations
      wordRefs.current.forEach((word, i) => {
        gsap.to(word, {
          y: -20,
          scale: 1.2,
          backgroundColor: '#0ff',
          color: '#000',
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
          duration: 0.8 + i * 0.2,
          delay: i * 0.1,
        });
      });
    });

    return () => ctx.revert();
  }, []);

  const bouncingWords = ['Ping', 'Pong', 'Glow', 'Pop'];

  return (
    <section className="min-h-screen bg-gradient-to-r from-indigo-900 via-purple-900 to-indigo-900 flex flex-col items-center justify-center px-6">
      <h1
        ref={textRef}
        className="text-3xl md:text-5xl font-bold text-cyan-300 text-center mb-10"
      ></h1>

      <div className="flex gap-4 flex-wrap justify-center">
        {bouncingWords.map((word, i) => (
          <div
            key={i}
            ref={(el) => (wordRefs.current[i] = el)}
            className="px-6 py-3 text-lg md:text-2xl bg-white/10 text-white border border-cyan-400 rounded-full shadow-lg"
          >
            {word}
          </div>
        ))}
      </div>
    </section>
  );
}
