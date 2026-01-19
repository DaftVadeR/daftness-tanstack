FROM oven/bun:1 AS base
WORKDIR /usr/src/app

# ---------- install deps (cached) ----------
FROM base AS install
RUN mkdir -p /temp/dev
COPY package.json bun.lockb /temp/dev/
RUN cd /temp/dev && bun install --frozen-lockfile

RUN mkdir -p /temp/prod
COPY package.json bun.lockb /temp/prod/
RUN cd /temp/prod && bun install --frozen-lockfile --production

# ---------- build ----------
FROM base AS build
COPY --from=install /temp/dev/node_modules ./node_modules
COPY . .
ENV NODE_ENV=production
RUN bun --bun vite build

# ---------- runtime ----------
FROM base AS runtime
ENV NODE_ENV=production

# production deps only
COPY --from=install /temp/prod/node_modules ./node_modules

# copy the built output (THIS is what you run)
COPY --from=build /usr/src/app/.output ./.output

# copy any runtime files your server might read at runtime
# (only include if you actually need them)
COPY --from=build /usr/src/app/package.json ./package.json
COPY --from=build /usr/src/app/public ./public
COPY --from=build /usr/src/app/dist ./dist

USER bun
EXPOSE 3000

CMD ["bun", "run", ".output/server/index.mjs"]
