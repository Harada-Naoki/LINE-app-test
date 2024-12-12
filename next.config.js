/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['images.unsplash.com'],
  },
  env: {
    LIFF_ID: process.env.LIFF_ID, 
  },
};

module.exports = nextConfig;

