'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

export default function PaperPlaneSection() {
  const container = useRef();

  useGSAP(() => {
    gsap.fromTo(
      '.plane',
      {
        opacity: 0,
        scale: 0.6,
        motionPath: {
          path: [{ x: 0, y: 0 }, { x: 400, y: -100 }, { x: 800, y: 0 }],
          autoRotate: true,
        },
      },
      {
        opacity: 1,
        duration: 3,
        ease: 'power1.inOut',
        motionPath: {
          path: [{ x: 0, y: 0 }, { x: 400, y: -100 }, { x: 800, y: 0 }],
          autoRotate: true,
        },
        scrollTrigger: {
          trigger: container.current,
          start: 'top center',
          end: 'bottom center',
          scrub: true,
        },
      }
    );
  }, { scope: container });

  return (
    <section
      ref={container}
      className="relative min-h-screen bg-gradient-to-r from-black via-gray-900 to-black text-white px-6 py-24 flex flex-col lg:flex-row items-center gap-16 overflow-hidden"
    >
      {/* Plane */}
      <div className="absolute top-1/3 left-0 w-full h-[400px] pointer-events-none z-10">
        <img
          src="/paper-plane.svg" 
          alt="Paper Plane"
          className="plane w-[80px] h-auto absolute"
        />
      </div>

      {/* Content */}
      <div className="flex-1 space-y-6 z-20">
        <h2 className="text-4xl font-bold text-cyan-400">Smooth Paper Flight</h2>
        <p className="text-lg text-gray-300">
          Watch the paper plane fly gracefully as you scroll through this section. Combine motionPath with ScrollTrigger for beautiful storytelling animations.
        </p>
      </div>

      {/* Image */}
      <div className="flex-1 z-20">
        <Image
          src="/example-image.jpg"
          alt="Example"
          width={600}
          height={400}
          className="rounded-xl shadow-2xl"
        />
      </div>
    </section>
  );
}
