FROM node:lts-alpine as build-client
ARG VITE_GITHUB_TOKEN
ENV GENERATE_SOURCEMAP false
WORKDIR /usr/src/client
COPY ./client/package*.json ./
RUN npm ci
COPY ./client .
RUN npm run build

FROM node:lts-alpine as build-srv
WORKDIR /usr/src/server
COPY ./server/package*.json ./
RUN npm ci
COPY ./server .

FROM node:lts-alpine
WORKDIR /usr/src
COPY --from=build-client /usr/src/client/dist ./client/dist
COPY --from=build-srv /usr/src/server ./server
WORKDIR /usr/src/server

EXPOSE 8000

CMD npm start