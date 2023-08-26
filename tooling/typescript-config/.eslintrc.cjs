/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  extends: [require.resolve('../eslint-config/node.js')],
  ignorePatterns: ['./src/components'],
  parserOptions: {
    project: `${__dirname}/tsconfig.json`,
  },
};
