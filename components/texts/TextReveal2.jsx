'use client';

import { useRef } from 'react';
import { gsap } from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(TextPlugin, ScrollTrigger);

export default function AdvancedTextReveal() {
  const sectionRef = useRef();

  useGSAP(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          end: '+=400',
          scrub: true,
        },
      });

      tl.fromTo(
        '.headline-text',
        { text: '' },
        {
          text: 'Experience the Future of Motion Design.',
          duration: 4,
          ease: 'power3.inOut',
        }
      );

      tl.from(
        '.highlighted-word',
        {
          y: 80,
          opacity: 0,
          skewY: 10,
          stagger: 0.15,
          duration: 1,
          ease: 'expo.out',
        },
        '-=2.5'
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="min-h-screen bg-gradient-to-b from-zinc-900 to-black flex items-center justify-center px-6"
    >
      <div className="max-w-4xl text-center">
        <h1
          className="headline-text text-4xl md:text-6xl font-extrabold text-cyan-300 leading-tight"
        ></h1>

        <div className="mt-12 text-2xl md:text-3xl font-semibold text-white space-y-4">
          {['Scroll smarter.', 'Animate better.', 'Stand out.'].map((line, i) => (
            <div key={i} className="highlighted-word">
              {line}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
