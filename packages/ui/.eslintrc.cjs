/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  extends: [require.resolve('@repo/lint/node.js')],
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: true,
  },
  ignorePatterns: ['tsup.config.ts'],
  plugins: ['@typescript-eslint'],
};
