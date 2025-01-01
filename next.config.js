/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  distDir: 'dist',
  trailingSlash: true,
  basePath: '',
  assetPrefix: './',
}

module.exports = nextConfig

