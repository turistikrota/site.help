const { i18n } = require('./next-i18next.config.js')

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  reactStrictMode: true,
  transpilePackages: ['@turistikrota/ui'],
  images: {
    domains: ['s3.turistikrota.com', 'avatar.turistikrota.com'],
  },
  i18n: i18n,
}

module.exports = nextConfig
