'use client';

import { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger);

//Features
//pin: The image stays fixed while scrolling through feature descriptions

//stagger: Features appear one-by-one



const features = [
  'Ultra HD Display with 120Hz refresh rate',
  'All-day battery life with fast charging',
  'Triple-lens camera system with AI enhancements',
  'Water & dust resistant, built to last',
  'Crafted with aerospace-grade aluminum'
];

export default function PinnedShowcase() {
  const container = useRef();

  useGSAP(() => {
    gsap.to('.feature', {
      opacity: 1,
      y: 0,
      duration: 1,
      stagger: 0.3,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: '.feature-list',
        start: 'top center',
        end: 'bottom center',
        scrub: true
      }
    });
  }, { scope: container });

  return (
    <section ref={container} className="min-h-screen bg-black text-white px-6 sm:px-16 py-20">
      <div className="flex flex-col lg:flex-row gap-12 max-w-7xl mx-auto">
        {/* Pinned Product Image */}
        <div className="lg:w-1/2 sticky top-24 h-fit">
          <Image
            src="/example-image.jpg"
            alt="Product"
            width={600}
            height={600}
            className="rounded-xl shadow-2xl"
          />
        </div>

        {/* Scrolling Features */}
        <div className="lg:w-1/2 space-y-12 feature-list">
          {features.map((text, index) => (
            <div
              key={index}
              className="feature opacity-0 translate-y-12 transition-all duration-1000 bg-gray-800 p-6 rounded-xl shadow-md border border-gray-700"
            >
              <h3 className="text-xl font-semibold text-cyan-400 mb-2">
                Feature {index + 1}
              </h3>
              <p className="text-gray-300">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
