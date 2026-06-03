# Nosana Skill Marketplace

The **AI Compute Skill Marketplace** for the decentralized cloud. Deploy, optimize, and orchestrate AI workloads with deterministic operational skills designed for the Nosana Network.

## Features

- **Discover Skills**: Find the right operational skill for your AI workload.
- **Install & Configure**: Easy CLI installation to configure your inputs (repo, model, framework).
- **Deploy Workloads**: Execute skills to automatically provision GPUs and run your AI apps.
- **Agent Integration**: Works seamlessly with AI agents like Antigravity, Cursor, Claude Code, Windsurf, Goose, and Gemini CLI.

## Installation

### One-Command Install

To install all 14 Nosana operational skills at once, run the following in your terminal:

```bash
npx nos-skill@beta add-all nos
```

*(Append the `--yes` flag to skip all confirmation prompts.)*

### Verify Installation

You can confirm all skills are installed correctly by running:

```bash
npx nos-skill installed
npx nos-skill list
```

### Install Individual Skills

You can also pick and install only the skills you need. For example:

```bash
npx nos-skill add nos/deploy-ai-agent
```

## Available Skills

- `nos/analyze-ai-project` — Workload orchestration compiler
- `nos/debug-nosana-deployment` — Incident-response & telemetry debugger
- `nos/deploy-ai-agent` — Autonomous AI agent deployer
- `nos/deploy-ai-project` — CLI job execution operator
- `nos/deploy-persistent-api` — Long-running service deployment engine
- `nos/recommend-gpu-market` — GPU cost & market selection engine
- `nos/network-monitor` — Blockchain state & market monitor
- `nos/node-operator` — Compute host infrastructure operator
- `nos/nosana-ai-deployment-operator` — AI deployment engine
- `nos/nosana-deployment-architect` — Deployment architecture engine
- `nos/nosana-failure-recovery-operator` — Failure recovery engine
- `nos/nosana-market-analyst` — Market analysis engine
- `nos/nosana-persistent-service-operator` — Persistent service operator
- `nos/skill-composer` — Async orchestration controller

## Getting Started (Development)

This is a [Next.js](https://nextjs.org) project. First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
