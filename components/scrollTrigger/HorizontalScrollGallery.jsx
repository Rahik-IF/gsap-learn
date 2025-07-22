'use client';

import { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const images = [
  '/example-image.jpg',
  '/example-image.jpg',
  '/example-image.jpg',
  '/example-image.jpg'
];

export default function HorizontalScrollGallery() {
  const containerRef = useRef();
  const horizontalRef = useRef();

  useGSAP(() => {
    const sections = gsap.utils.toArray('.panel');
    const totalWidth = horizontalRef.current.scrollWidth;

    gsap.to(horizontalRef.current, {
      x: () => `-${totalWidth - window.innerWidth}px`,
      ease: 'none',
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top top',
        end: () => `+=${totalWidth}`,
        scrub: true,
        pin: true,
        anticipatePin: 1
      }
    });
  }, []);

  return (
    <section ref={containerRef} className="bg-black text-white overflow-hidden">
      <div
        ref={horizontalRef}
        className="flex w-max space-x-8 py-24 px-12"
      >
        {images.map((src, i) => (
          <div
            key={i}
            className="panel min-w-[80vw] h-[60vh] bg-gray-800 rounded-2xl overflow-hidden shadow-xl flex items-center justify-center"
          >
            <img
              src={src}
              alt={`Panel ${i + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
