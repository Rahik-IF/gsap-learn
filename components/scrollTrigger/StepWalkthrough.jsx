'use client';

import { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    title: 'Sign Up Easily',
    description: 'Create your account in seconds with just an email and password.',
  },
  {
    title: 'Customize Your Dashboard',
    description: 'Adjust layout, themes, and preferences to match your workflow.',
  },
  {
    title: 'Connect Your Tools',
    description: 'Integrate with your favorite apps like Slack, Notion, or Google Calendar.',
  },
  {
    title: 'Launch & Monitor',
    description: 'Start using it immediately and monitor real-time performance.',
  },
];

export default function StepWalkthrough() {
  const container = useRef();

  useGSAP(() => {
    gsap.utils.toArray('.step-box').forEach((box, index) => {
      gsap.fromTo(
        box,
        { autoAlpha: 0, y: 80 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: box,
            start: 'top 80%',
            end: 'bottom 60%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    });
  }, { scope: container });

  return (
    <section
      ref={container}
      className="bg-gray-950 text-white min-h-screen py-24 px-6 sm:px-16 flex flex-col items-center"
    >
      <h2 className="text-4xl font-bold text-cyan-400 mb-12 text-center">
        How It Works
      </h2>

      <div className="space-y-16 max-w-4xl w-full">
        {steps.map((step, index) => (
          <div
            key={index}
            className="step-box opacity-0 transform transition-all bg-gray-800 border border-gray-700 p-6 rounded-xl shadow-xl"
          >
            <div className="text-cyan-500 text-2xl font-bold mb-2">
              Step {index + 1}
            </div>
            <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
            <p className="text-gray-300">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
