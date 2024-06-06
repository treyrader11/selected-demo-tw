/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      { hostname: `assets.codepen.io` },
      { hostname: `w3.org` },
    ],
  },
};

module.exports = nextConfig;
