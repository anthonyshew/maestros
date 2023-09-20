/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  extends: [require.resolve('./tooling/eslint-config/node.js')],
  ignorePatterns: ['apps/**', 'packages/**', 'tooling/**'],
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: true,
  },
  plugins: ['@typescript-eslint'],
};
