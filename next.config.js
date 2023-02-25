const { withContentlayer } = require("next-contentlayer");

/** @type {import('next').NextConfig} */
const moduleExports = {
  experimental: {
    appDir: true,
    typedRoutes: true,
  },
};

module.exports = withContentlayer(moduleExports);
