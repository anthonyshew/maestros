This is a Next.js starter for Turborepo repositories.

It follows the conventions described in [Monorepo Maestros](https://shew.dev/monorepos) including in-repo shared configurations of common tools and Turborepo best practices.

A few things you may need to edit to make this app work with your repo:

- This starter assumes you're using ESLint, Prettier, Tailwind, and TypeScript in your tooling. If you aren't, you may need to make some adjustments.
- Workspace dependencies are defined using pnpm's syntax (`workspace:*`). If you're using npm, yarn, or Bun, change these to `"*"`.
- Workspace dependencies use the name `"@repo/*"`. You may need to adjust these to your workspaces' names in your repository.
- `tailwind.config.ts` contains `'../../packages/ui/src/components/**/*.{ts,tsx}'` in it's `content` array to pick up classes that need to be compiled for your application that come from your UI kit. You may need to update this location if yours is different.
