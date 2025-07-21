'use client';

import { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

export default function BouncingBallsScroll() {
  const container = useRef();

  useGSAP(() => {
    gsap.utils.toArray('.square').forEach((el, i) => {
      gsap.fromTo(
        el,
        {
          y: 100,
          rotation: 0,
          borderRadius: '0%',
        },
        {
          y: -30,
          rotation: 360,
          borderRadius: '50%',
          ease: 'bounce.out',
          duration: 1.5,
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
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-800 to-slate-950 p-10"
    >
      <div className="grid grid-cols-3 sm:grid-cols-5 gap-6">
        {['#ef4444', '#f59e0b', '#10b981', '#3b82f6', '#a855f7', '#ec4899', '#22d3ee'].map((color, i) => (
          <div
            key={i}
            className="square w-20 h-20"
            style={{
              backgroundColor: color,
              borderRadius: '0%',
            }}
          />
        ))}
      </div>
    </section>
  );
}
