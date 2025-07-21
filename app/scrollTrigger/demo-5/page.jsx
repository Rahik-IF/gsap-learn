// app/scrollTrigger/parallax-demo/page.jsx
'use client';

import { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import Image from 'next/image';
gsap.registerPlugin(ScrollTrigger);

export default function ParallaxScrollEffect() {
  const section1 = useRef();
  const section2 = useRef();

  useGSAP(() => {
    const tl1 = gsap.timeline({
      scrollTrigger: {
        trigger: section1.current,
        start: 'top 80%',
        end: 'bottom top',
        scrub: true,
      },
    });

    tl1.fromTo(
      section1.current.querySelector('.parallax-img'),
      { x: -200, rotate: -15, opacity: 0 },
      { x: 0, rotate: 0, opacity: 1, duration: 1.5, ease: 'power2.out' }
    ).fromTo(
      section1.current.querySelector('.parallax-text'),
      { x: 200, opacity: 0 },
      { x: 0, opacity: 1, duration: 1.2, ease: 'power2.out' },
      '<0.3'
    );

    const tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: section2.current,
        start: 'top 80%',
        end: 'bottom top',
        scrub: true,
      },
    });

    tl2.fromTo(
      section2.current.querySelector('.parallax-img'),
      { scale: 0.5, y: 100, opacity: 0 },
      { scale: 1, y: 0, opacity: 1, duration: 1.5, ease: 'power2.out' }
    ).fromTo(
      section2.current.querySelector('.parallax-text'),
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.2, ease: 'power2.out' },
      '<0.3'
    );
  }, []);

  return (
    <>
      {/* Section 1 */}
      <section className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white flex items-center justify-center p-12">
        <div
          ref={section1}
          className="flex flex-col md:flex-row gap-12 items-center max-w-6xl w-full"
        >
          <div className="parallax-img w-full md:w-1/2">
            <Image
              src="/example-image.jpg"
              alt="Parallax"
              width={600}
              height={400}
              className="rounded-lg shadow-xl"
            />
          </div>
          <div className="parallax-text w-full md:w-1/2 text-center md:text-left space-y-4">
            <h2 className="text-3xl sm:text-4xl font-bold text-cyan-400">
              Parallax Reveal Animation
            </h2>
            <p className="text-lg text-gray-300">
              This section combines rotation, movement, and fading effects to create a modern parallax scroll experience.
            </p>
            <p className="text-gray-400">
              ScrollTrigger scrubs the timeline so animations feel tied to your scroll speed.
            </p>
          </div>
        </div>
      </section>

      {/* Section 2 */}
      <section className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white flex items-center justify-center p-12">
        <div
          ref={section2}
          className="flex flex-col md:flex-row-reverse gap-12 items-center max-w-6xl w-full"
        >
          <div className="parallax-img w-full md:w-1/2">
            <Image
              src="/example-image.jpg"
              alt="Parallax 2"
              width={600}
              height={400}
              className="rounded-lg shadow-xl"
            />
          </div>
          <div className="parallax-text w-full md:w-1/2 text-center md:text-left space-y-4">
            <h2 className="text-3xl sm:text-4xl font-bold text-pink-400">
              Zoom + Slide Parallax
            </h2>
            <p className="text-lg text-gray-300">
              This section features a zoom-in image effect with text coming from the top.
            </p>
            <p className="text-gray-400">
              Try different animation styles on scroll to create rich interactive experiences.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
