const { withContentlayer } = require('next-contentlayer');
const withVercelToolbar = require('@vercel/toolbar/plugins/next');

/** @type {import('next').NextConfig} */
const moduleExports = {
  // We do these in GitHub Actions checks so we don't do them here.
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
};

module.exports = withVercelToolbar(withContentlayer(moduleExports));
