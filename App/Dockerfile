FROM node:lts-alpine as build

ARG FONTAWESOME_NPM_AUTH_TOKEN
ENV FONTAWESOME_NPM_AUTH_TOKEN=${FONTAWESOME_NPM_AUTH_TOKEN}

WORKDIR /srv/app

COPY ./.npmrc ./
COPY ./package.json ./
COPY ./yarn.lock ./
COPY ./next.config.js ./

RUN yarn config set network-timeout 100000 -g
RUN yarn --non-interactive --immutable --prefer-offline

COPY . .

ENV NODE_ENV production

RUN yarn build

FROM node:lts-alpine as final
ENV NODE_ENV production
WORKDIR /srv/app

RUN yarn global add pm2

COPY --from=build /srv/app/package.json ./
COPY --from=build /srv/app/yarn.lock ./
COPY --from=build /srv/app/next.config.js ./
COPY --from=build /srv/app/ecosystem.config.yml ./
COPY --from=build /srv/app/node_modules/ ./node_modules/
COPY --from=build /srv/app/.next/ ./.next/
COPY --from=build /srv/app/public/ ./public/

EXPOSE 3000
ENTRYPOINT ["pm2-runtime", "/srv/app/ecosystem.config.yml"]
