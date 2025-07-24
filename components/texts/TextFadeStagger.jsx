'use client';

import { useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function TextFadeStagger() {
  const containerRef = useRef();

  useGSAP(() => {
    const ctx = gsap.context(() => {
      gsap.to('#headline', {
        opacity: 1,
        y: 0,
        ease: 'power1.inOut',
        duration: 1,
        scrollTrigger: {
          trigger: '#headline',
          start: 'top 80%',
          end: 'top 40%',
          scrub: true,
        },
      });

      gsap.fromTo(
        '.para',
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          delay: 0.2,
          stagger: 0.15,
          duration: 1,
          ease: 'power1.out',
          scrollTrigger: {
            trigger: '.para',
            start: 'top 85%',
            end: 'top 40%',
            scrub: true,
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="min-h-screen bg-gradient-to-b from-[#0f0f0f] to-black text-white px-6 py-32 flex items-center justify-center"
    >
      <div className="max-w-3xl text-center space-y-6">
        <h2
          id="headline"
          className="text-4xl md:text-5xl font-bold opacity-0 translate-y-5 text-cyan-400"
        >
          Elegant Entrance Animation with GSAP
        </h2>

        <p className="para text-lg text-gray-300 leading-relaxed">
          This animation uses <strong>ScrollTrigger</strong> to reveal content as you scroll.
        </p>
        <p className="para text-lg text-gray-400 leading-relaxed">
          The text fades in smoothly and moves upward using GSAP’s powerful animation engine.
        </p>
        <p className="para text-lg text-gray-500 leading-relaxed">
          Great for hero sections, content intros, or storytelling elements on modern websites.
        </p>
      </div>
    </section>
  );
}
