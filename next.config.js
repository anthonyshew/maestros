const { withContentlayer } = require("next-contentlayer");

/** @type {import('next').NextConfig} */
const moduleExports = {
  experimental: {
    appDir: true,
  },
};

module.exports = withContentlayer(moduleExports);
