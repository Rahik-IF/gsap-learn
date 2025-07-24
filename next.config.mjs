import nextPwa from 'next-pwa';

/** @type {import('next').NextConfig} */
const withPWA = nextPwa({
  dest: 'public',
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === 'development',
});

const nextConfig = {
  images: {
    domains: ['res.cloudinary.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
      },
    ],
  },
  env: {
    SERVER: process.env.SERVER,
    BASIC: process.env.BASIC,
    PREMIUM: process.env.PREMIUM,
    ULTRA: process.env.ULTRA,
  },
};

export default withPWA(nextConfig);
