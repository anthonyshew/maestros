# Claude Code Review Setup

This repository includes a GitHub Action that automatically performs code reviews using Claude AI on pull requests.

## Setup Instructions

### 1. Get an Anthropic API Key

1. Go to [Anthropic Console](https://console.anthropic.com/)
2. Sign up or log in to your account
3. Navigate to API Keys section
4. Create a new API key
5. Copy the API key (it starts with `sk-ant-`)

### 2. Add the API Key to GitHub Secrets

1. Go to your GitHub repository
2. Navigate to Settings → Secrets and variables → Actions
3. Click "New repository secret"
4. Name: `ANTHROPIC_API_KEY`
5. Value: Your Anthropic API key
6. Click "Add secret"

### 3. How It Works

The Claude Code Review action will:

- Trigger on pull requests (opened, synchronized, reopened)
- Skip draft pull requests
- Only review code files (js, ts, py, go, etc.)
- Analyze the diff and provide constructive feedback
- Post the review as a comment on the PR

### 4. Review Features

Claude will provide feedback on:

- Code quality and best practices
- Potential bugs or issues
- Security considerations
- Performance implications
- Suggestions for improvements

### 5. Customization

You can modify the workflow file `.github/workflows/claude-code-review.yml` to:

- Change which file types are reviewed
- Adjust the Claude model used
- Modify the review prompt
- Change when the action triggers

### 6. Cost Considerations

- Each review uses Claude API tokens
- Cost depends on the size of your diffs
- Consider setting up usage limits in your Anthropic account
- The action skips draft PRs to avoid unnecessary reviews

### 7. Troubleshooting

If the action fails:

1. Check that `ANTHROPIC_API_KEY` is properly set in repository secrets
2. Verify your Anthropic account has sufficient credits
3. Check the Actions tab for detailed error logs
4. Ensure the repository has proper permissions for the action