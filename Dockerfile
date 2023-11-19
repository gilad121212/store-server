FROM node:lts-slim AS builder
WORKDIR /app

COPY package*.json tsconfig.json ./
RUN npm install
RUN npm install -g typescript


COPY ./src ./src
RUN tsc

FROM node:lts-slim as artifact
WORKDIR /app

COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules ./node_modules

ENV PORT=8181
EXPOSE 8181
CMD [ "node", "./dist/server.js" ]
