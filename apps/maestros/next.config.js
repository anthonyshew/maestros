const { withContentlayer } = require("next-contentlayer");

/** @type {import('next').NextConfig} */
const moduleExports = {
	transpilePackages: ["@repo/db", "@repo/ui"],
	// We do these in GitHub Actions checks so we don't do them here.
	eslint: { ignoreDuringBuilds: true },
	typescript: { ignoreBuildErrors: true },
};

module.exports = withContentlayer(moduleExports);
