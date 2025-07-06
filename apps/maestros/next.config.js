const { withContentCollections } = require("@content-collections/next");

/** @type {import('next').NextConfig} */
const moduleExports = {
	transpilePackages: ["@repo/ui"],
	// We do these in GitHub Actions checks so we don't do them here.
	eslint: { ignoreDuringBuilds: true },
	typescript: { ignoreBuildErrors: true },
};

module.exports = withContentCollections(moduleExports);
