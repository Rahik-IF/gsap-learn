'use client';

import { useEffect } from 'react';

export default function ServiceWorkerRegister() {
  useEffect(() => {
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker
          .register('/sw.js')
          .then((registration) => {
            console.log('✅ Service Worker registered:', registration);
          })
          .catch((registrationError) => {
            console.log('❌ Service Worker registration failed:', registrationError);
          });
      });
    }
  }, []);

  return null;
}
