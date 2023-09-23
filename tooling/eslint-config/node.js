const { resolve } = require('node:path');
const { rules } = require('./shared/rules.js');
const { overrides } = require('./shared/overrides.js');

const project = resolve(process.cwd(), 'tsconfig.json');

/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: [
    'turbo',
    ...[
      '@vercel/style-guide/eslint/node',
      '@vercel/style-guide/eslint/typescript',
    ].map((config) => require.resolve(config)),
  ],
  ignorePatterns: ['node_modules/', 'dist/'],
  overrides: [
    ...overrides,
    {
      files: ['**/*.test.*'],
      extends: [require.resolve('@vercel/style-guide/eslint/jest')],
      rules: {
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-unsafe-assignment': 'off',
        'jest/valid-expect': 'off',
      },
    },
    {
      files: ['jest.config.*', 'tsup.config.*', 'drizzle.config.ts'],
      rules: {
        'import/no-default-export': 'off',
      },
    },
    {
      files: ['**/turbo/generators/config.*'],
      rules: {
        'import/no-default-export': 'off',
      },
    },
  ],
  root: true,
  rules,
  settings: {
    'import/resolver': {
      typescript: {
        project,
      },
    },
  },
};
