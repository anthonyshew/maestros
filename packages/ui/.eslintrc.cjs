/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  extends: [require.resolve('@repo/lint/react-internal.js')],
  parserOptions: {
    project: true,
  },
  plugins: ['@typescript-eslint'],
};
