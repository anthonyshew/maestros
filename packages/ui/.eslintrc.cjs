/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  extends: [require.resolve('@repo/lint/react-internal.js')],
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: true,
  },
  plugins: ['@typescript-eslint'],
};
