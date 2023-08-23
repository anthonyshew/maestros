/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  extends: [require.resolve('./tooling/eslint-config/node.cjs')],
  ignorePatterns: ['./apps/**', './packages/**', './tooling/**'],
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: `./tsconfig.json`,
  },
  plugins: ['@typescript-eslint'],
};
