/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  extends: [require.resolve('../eslint-config/node.js')],
  parserOptions: {
    project: true,
  },
};
