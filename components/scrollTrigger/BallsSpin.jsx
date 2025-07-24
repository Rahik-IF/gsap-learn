'use client';

import { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

export default function BallsSpin() {
  const scrollRef = useRef();

  useGSAP(() => {
    const boxes = gsap.utils.toArray(scrollRef.current.children);

    boxes.forEach((box, i) => {
      gsap.to(box, {
        x: 150 * (i + 1),
        rotation: 360,
        borderRadius: '100%',
        scale: 1.5,
        scrollTrigger: {
          trigger: box,
          start: 'bottom bottom',
          end: 'top 20%',
          scrub: true,
        },
        ease: 'power1.inOut',
      });
    });
  }, { scope: scrollRef });

  return (
    <section className="min-h-screen bg-black text-white py-20 px-6">
      <h2 className="text-center text-3xl font-bold text-cyan-400 mb-16">
        Scroll to Transform the Boxes
      </h2>
      <div
        ref={scrollRef}
        className="flex flex-col gap-24 items-center max-w-4xl mx-auto"
      >
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="w-[100px] h-[100px] bg-cyan-500 rounded-md"
          />
        ))}
      </div>
    </section>
  );
}
