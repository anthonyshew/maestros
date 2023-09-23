/** @type {import("eslint").Linter.Config} */
module.exports = {
  rules: {
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/sort-type-constituents': 'warn',
    'no-floating-decimal': 'warn',
    'react/no-unescaped-entities': 'off',
    'unicorn/filename-case': 'off',
    'no-alert': 'off',
    'tsdoc/syntax': 'off',
    camelcase: 'off',
    'turbo/no-undeclared-env-vars': [
      'error',
      {
        allowList: ['NODE_ENV'],
      },
    ],
  },
};
