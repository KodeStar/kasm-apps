/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/kasm-apps',
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
