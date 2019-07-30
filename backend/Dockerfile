FROM node:8.16.0-alpine

COPY . /root/backend
WORKDIR /root/backend

RUN yarn global add gulp-cli && \
    yarn install && \
    gulp

FROM node:8.16.0-alpine

COPY --from=0 /root/backend/dist /backend/dist
COPY --from=0 /root/backend/package.json /backend/package.json

WORKDIR /backend

RUN yarn install --prod

CMD ["node", "/backend/dist/Main.js"]