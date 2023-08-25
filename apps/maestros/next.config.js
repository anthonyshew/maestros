const { withContentlayer } = require('next-contentlayer');

/** @type {import('next').NextConfig} */
const moduleExports = {
  experimental: {
    appDir: true,
  },
  eslint: { ignoreDuringBuilds: true },
  transpilePackages: ['@repo/ui'],
};

module.exports = withContentlayer(moduleExports);
