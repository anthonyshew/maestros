const { rules } = require('./shared/rules.js');
const { overrides } = require('./shared/overrides.js');

/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: [
    'turbo',
    ...[
      '@vercel/style-guide/eslint/browser',
      '@vercel/style-guide/eslint/node',
      '@vercel/style-guide/eslint/react',
      '@vercel/style-guide/eslint/next',
      '@vercel/style-guide/eslint/typescript',
    ].map((config) => require.resolve(config)),
  ],
  ignorePatterns: ['**/.next/**', '**/.eslintrc.js'],
  overrides: [
    ...overrides,
    {
      files: ['**/route.tsx'],
      rules: {
        '@next/next/no-img-element': 'off',
        'jsx-a11y/alt-text': 'off',
      },
    },
    {
      files: [
        'pages/**',
        'src/pages/**',
        'next.config.js',
        'app/**/{head,layout,loading,page,error,not-found}.tsx',
        'contentlayer.config.ts',
      ],
      rules: {
        'import/no-default-export': 'off',
      },
    },
  ],
  root: true,
  rules,
};
