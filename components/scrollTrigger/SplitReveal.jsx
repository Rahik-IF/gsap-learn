'use client';

import { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger);


//Great for:
//Features

//Testimonials
//Product comparisons
//Brand storytelling


const sections = [
  {
    img: '/example-image.jpg',
    title: 'Designed to Impress',
    desc: 'Built with precision and elegance, our design speaks sophistication at every glance.',
    reverse: false,
  },
  {
    img: '/example-image.jpg',
    title: 'Performance You Can Trust',
    desc: 'Experience unmatched speed, smoothness, and stability with our industry-leading engine.',
    reverse: true,
  },
];

export default function SplitRevealPage() {
  const container = useRef();

  useGSAP(() => {
    gsap.utils.toArray('.split-section').forEach((section) => {
      const image = section.querySelector('.image-side');
      const text = section.querySelector('.text-side');

      gsap.fromTo(
        image,
        { x: -100, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1.2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      gsap.fromTo(
        text,
        { x: 100, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1.2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    });
  }, { scope: container });

  return (
    <section
      ref={container}
      className="bg-black text-white min-h-screen py-24 space-y-32 px-6 sm:px-20"
    >
      {sections.map((item, index) => (
        <div
          key={index}
          className={`split-section flex flex-col-reverse lg:flex-row ${
            item.reverse ? 'lg:flex-row-reverse' : ''
          } items-center gap-12`}
        >
          {/* Image Side */}
          <div className="image-side flex-1">
            <Image
              src={item.img}
              alt={item.title}
              width={600}
              height={400}
              className="rounded-2xl shadow-xl"
            />
          </div>

          {/* Text Side */}
          <div className="text-side flex-1 space-y-4">
            <h2 className="text-3xl font-bold text-cyan-400">{item.title}</h2>
            <p className="text-lg text-gray-300">{item.desc}</p>
          </div>
        </div>
      ))}
    </section>
  );
}
