/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  extends: [require.resolve('@repo/lint/node.cjs')],
  ignorePatterns: ['./src/components'],
  parserOptions: {
    project: `${__dirname}/tsconfig.json`,
  },
};
