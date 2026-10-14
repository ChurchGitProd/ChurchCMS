/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'uxmagic.blob.core.windows.net',
      },
      {
        protocol: 'https',
        hostname: 'assets.tina.io',
      },
    ],
  },
}

module.exports = nextConfig
