FROM mcr.microsoft.com/devcontainers/typescript-node:1-22-bookworm

# tmux for running long-lived / multi-pane sessions inside the container.
RUN apt-get update \
    && apt-get install -y --no-install-recommends tmux \
    && rm -rf /var/lib/apt/lists/* /root/.npm

# Sensible tmux defaults (mouse scrolling, big scrollback, QoL bindings).
COPY --chown=node:node tmux.conf /home/node/.tmux.conf
