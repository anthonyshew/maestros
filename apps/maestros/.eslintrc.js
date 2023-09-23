/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  extends: [require.resolve('@repo/lint/next.js')],
  parserOptions: {
    project: true,
  },
  plugins: ['@typescript-eslint'],
};
