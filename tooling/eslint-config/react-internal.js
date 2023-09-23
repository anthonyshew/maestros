const { resolve } = require('node:path');
const { rules } = require('./shared/rules');

const project = resolve(process.cwd(), 'tsconfig.json');

/*
 * This is a custom ESLint configuration for use with
 * internal (bundled by their consumer) libraries
 * that utilize React.
 *
 * This config extends the Vercel Engineering Style Guide.
 * For more information, see https://github.com/vercel/style-guide
 *
 */

module.exports = {
  extends: [
    'turbo',
    ...[
      '@vercel/style-guide/eslint/browser',
      '@vercel/style-guide/eslint/node',
      '@vercel/style-guide/eslint/typescript',
      '@vercel/style-guide/eslint/react',
    ].map((config) => require.resolve(config)),
  ],
  globals: {
    JSX: true,
  },
  ignorePatterns: ['node_modules/', 'dist/', '.eslintrc.js'],
  settings: {
    'import/resolver': {
      typescript: {
        project,
      },
    },
  },
  rules,
};
