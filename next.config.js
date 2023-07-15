const { withContentlayer } = require("next-contentlayer");

/** @type {import('next').NextConfig} */
const moduleExports = {
  experimental: {
    appDir: true,
    serverComponentsExternalPackages: ["shiki"],
  },
};

module.exports = withContentlayer(moduleExports);
