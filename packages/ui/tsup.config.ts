import { execSync } from 'node:child_process'
import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/index.ts'],
  clean: true,
  onSuccess: async () => {
    execSync("tsc --emitDeclarationOnly")
  },
  // These are false for preserving directives
  // https://github.com/egoist/tsup/issues/835#issuecomment-1594905290
  splitting: false,
  treeshake: false,
})
