#
# ---- Base Node ----
FROM node:14-alpine3.11 AS build-base

# Install python as needed to build node-gyp when npm install
RUN apk update && apk upgrade
RUN apk add --no-cache python make g++

#
# ---- Dependencies ----
FROM build-base as dependencies
WORKDIR /dependencies
# Copy only package-lock.json and package.json to install only if these files changes
ADD package*.json ./
RUN npm set progress=false && npm config set depth 0
RUN npm install --only=production
# copy production node_modules aside
RUN cp -R node_modules prod_node_modules

#
# ---- Build ----
FROM dependencies as build
WORKDIR /build
ADD package*.json ./
RUN npm install
# Add the rest of files
ADD . ./
# Enforce linting
RUN npm run lint
# Run general tests
RUN npm run test
# Trigger the production build
RUN npm run generate

#
# ---- Release ----
FROM node:14-alpine3.11 as release

WORKDIR /app

ADD package*.json ./
ADD src ./src
ADD config ./config
ADD locales ./locales

COPY --from=dependencies /dependencies/prod_node_modules /app/node_modules
COPY --from=build /build/.nuxt /app/.nuxt
COPY --from=build /build/nuxt.config.ts /app/
COPY --from=build /build/dist /app/

ENTRYPOINT ["npm", "start"]

ENV HOST 0.0.0.0
EXPOSE 8080
