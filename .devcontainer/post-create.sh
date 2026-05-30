#!/usr/bin/env bash
set -euo pipefail

# Named-volume mount points come up owned by root. Reclaim them for the node user
# so `npm ci` and the Claude Code settings write below don't fail with EACCES.
sudo chown -R node:node \
    /workspace/node_modules \
    /workspace/.next \
    /home/node/.claude

cd /workspace && npm ci

# Update Claude Code to the latest published version. The devcontainer feature
# pins whatever version was current when the image was built, and Claude Code's
# in-process auto-update can't write to the global npm prefix on rebuild, so we
# do it explicitly here. The feature installs the package as root, so reclaim
# ownership first — otherwise `npm install -g` can't rename the existing dir,
# and the in-process auto-update wouldn't work either.
sudo chown -R node:npm /usr/local/share/npm-global/lib/node_modules/@anthropic-ai
npm install -g @anthropic-ai/claude-code@latest

# Default Claude Code to bypassPermissions ("YOLO") in this sandboxed container so
# `claude` runs without per-tool prompts. Idempotent merge: preserves other settings
# and respects a manual override (e.g. defaultMode set to "default" by the user).
node -e '
  const fs = require("fs");
  const path = "/home/node/.claude/settings.json";
  fs.mkdirSync("/home/node/.claude", { recursive: true });
  const settings = fs.existsSync(path) ? JSON.parse(fs.readFileSync(path, "utf8")) : {};
  settings.permissions = settings.permissions || {};
  if (!settings.permissions.defaultMode) {
    settings.permissions.defaultMode = "bypassPermissions";
    fs.writeFileSync(path, JSON.stringify(settings, null, 2) + "\n");
  }
'

# Restore ~/.claude.json from the latest backup if it's missing. The named-volume
# mount preserves /home/node/.claude/ (credentials, history, backups), but the
# top-level config lives in /home/node/ which is wiped on container rebuild.
# Claude Code writes timestamped backups into /home/node/.claude/backups/, so we
# can recover login + project state automatically instead of re-authenticating.
if [ ! -f /home/node/.claude.json ]; then
  latest_backup=$(ls -1t /home/node/.claude/backups/.claude.json.backup.* 2>/dev/null | head -n 1 || true)
  if [ -n "${latest_backup}" ]; then
    cp "${latest_backup}" /home/node/.claude.json
    chmod 600 /home/node/.claude.json
    echo "Restored ~/.claude.json from ${latest_backup}"
  fi
fi
