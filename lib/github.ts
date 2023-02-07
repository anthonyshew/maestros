import { Octokit } from 'octokit'
import { env } from 'lib/env'

export const github = new Octokit({ auth: env.GITHUB_PAT })