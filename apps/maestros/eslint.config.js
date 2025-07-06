/** @type {import("eslint").Linter.Config[]} */
module.exports = [
  {
    ignores: [
      '**/.next/**',
      '**/node_modules/**',
      '**/.contentlayer/**',
      '**/dist/**',
    ],
  },
  {
    files: ['**/*.js', '**/*.jsx'],
    languageOptions: {
      ecmaVersion: 2020,
      sourceType: 'module',
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    rules: {
      'no-unused-vars': 'warn',
      'no-console': 'warn',
    },
  },
];
