# Dev Container

This directory contains a [Dev Container](https://containers.dev) configuration that runs **Claude Code** (and the tooling it needs) inside an isolated container. The container exists so `claude --dangerously-skip-permissions` (YOLO mode) can run with a meaningfully smaller blast radius than on the host.

## Intended workflow

The host and the dev container each own a slice of the loop:

| Where | What runs there | Why |
| --- | --- | --- |
| **Host** | `npm run dev` (your interactive dev server on `:3000`, browser hits `http://localhost:3000`) | Native filesystem → fast HMR, fast cold compile, no virtiofs tax. You keep coding with hot reload. |
| **Dev container** | Agent (`claude --dangerously-skip-permissions`), edits, `npm run build`, `npm run lint`, `tsc`, `git`, `gh` | Sandboxed blast radius for autonomous agent runs. |

The agent edits files via the bind mount and your host Next.js watcher picks the changes up in the browser.

**Do not run `npm run dev` inside the container.** Source files are bind-mounted from the host with `consistency=cached`, so the Next dev server's file watcher and incremental compile pay the macOS virtiofs tax. Run it on the host instead. Build artifacts (`.next`) and `node_modules` live on named volumes so writes inside the container are fast.

## What's inside

- Node 22 on Debian Bookworm (`mcr.microsoft.com/devcontainers/typescript-node`).
- Claude Code CLI (via `ghcr.io/anthropics/devcontainer-features/claude-code`).
- GitHub CLI (`gh`).

## First-time use

1. Open the repo in VS Code → command palette → **Dev Containers: Reopen in Container**.
2. Wait for the image pull + `post-create.sh` (`npm ci`, Claude Code update). First run takes a few minutes; subsequent reopens are seconds.
3. In a container terminal: `claude` — log in once. Login state is persisted to a named volume (`maik-claude-config`) so it survives container rebuilds.
4. `claude` already runs in YOLO mode (`bypassPermissions`) inside the container — `post-create.sh` ensures `permissions.defaultMode = "bypassPermissions"` in `~/.claude/settings.json` on every container build (idempotent — preserves other settings, and respects a manual override if you set `"defaultMode": "default"` yourself).

## Configuration

- `.devcontainer/.env` is read at container start via `runArgs --env-file`. It is gitignored and **must exist** (even if empty) for the container to start. Copy it from `.env.example`. Set `GH_TOKEN` there if you want `gh` authenticated without an interactive login.

## Named volumes

| Volume | Mount | Purpose |
| --- | --- | --- |
| `maik-claude-config` | `/home/node/.claude` | Claude Code login + history; survives rebuilds. |
| `maik-node-modules` | `/workspace/node_modules` | Fast `node_modules` off the bind mount. |
| `maik-next-build` | `/workspace/.next` | Fast Next.js build cache off the bind mount. |

To wipe a volume (e.g. force a clean `npm ci`): `docker volume rm maik-node-modules`.
