/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  extends: [require.resolve('@repo/lint/node.cjs')],
  ignorePatterns: ['tsup.config.ts'],
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: `./tsconfig.json`,
  },
  plugins: ['@typescript-eslint'],
};
