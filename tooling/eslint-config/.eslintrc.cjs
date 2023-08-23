/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  extends: [require.resolve('./node.cjs')],
  ignorePatterns: ['./src/components'],
  parserOptions: {
    project: `${__dirname}/tsconfig.json`,
  },
};
