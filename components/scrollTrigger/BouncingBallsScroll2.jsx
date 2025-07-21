'use client';

import { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

export default function BouncingBallsScroll2() {
  const container = useRef();

  useGSAP(() => {
    gsap.utils.toArray('.ball').forEach((el, i) => {
      const x = gsap.utils.random(-150, 150); // move left/right
      const y = gsap.utils.random(-100, -250); // move upward
      const rotation = gsap.utils.random(-360, 360); // random rotation

      gsap.fromTo(
        el,
        {
          x: 0,
          y: 0,
          opacity: 0,
          scale: 0.5,
          borderRadius: '0%',
        },
        {
          x,
          y,
          opacity: 1,
          scale: 1,
          rotation,
          borderRadius: '50%',
          ease: 'bounce.out',
          duration: 1.6,
          delay: i * 0.1,
          scrollTrigger: {
            trigger: el,
            start: 'top 90%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    });
  }, { scope: container });

  return (
    <section
      ref={container}
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-black p-10"
    >
      <div className="grid grid-cols-3 sm:grid-cols-5 gap-8">
        {['#ef4444', '#f59e0b', '#10b981', '#3b82f6', '#a855f7', '#ec4899', '#22d3ee', '#84cc16'].map((color, i) => (
          <div
            key={i}
            className="ball w-20 h-20"
            style={{
              backgroundColor: color,
              borderRadius: '0%',
              transform: 'scale(1)',
            }}
          />
        ))}
      </div>
    </section>
  );
}
