/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: 'dist',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        stream: false,
        os: false,
        canvas: false,
      }
    }
    return config
  },
  experimental: {
    appDir: true,
  },
  typescript: {
    ignoreBuildErrors: false,
  },
}

module.exports = nextConfig

