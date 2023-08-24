const { withContentlayer } = require('next-contentlayer');

/** @type {import('next').NextConfig} */
const moduleExports = {
  experimental: {
    appDir: true,
  },
  eslint: { ignoreDuringBuilds: true },
};

module.exports = withContentlayer(moduleExports);
