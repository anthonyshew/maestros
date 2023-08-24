const { withContentlayer } = require('next-contentlayer');

/** @type {import('next').NextConfig} */
const moduleExports = {
  experimental: {
    appDir: true,
  },
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
  transpilePackages: ['@repo/prisma', '@repo/ui'],
};

module.exports = withContentlayer(moduleExports);
