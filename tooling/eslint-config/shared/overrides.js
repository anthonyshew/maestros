/** @type {import("eslint").Linter.Config} */
module.exports = {
  overrides: [
    {
      files: ['**/tailwind.config.ts', '**/tailwind.config.js'],
      rules: {
        'import/no-default-export': 'off',
      },
    },
  ],
};
