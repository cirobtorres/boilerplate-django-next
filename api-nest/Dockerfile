# FROM node:21-alpine3.18
FROM node:latest

WORKDIR /usr/src/api-nest

COPY . .
COPY ./.env.production ./.env

RUN npm install --quiet --no-optional --loglevel=error
RUN npm run build

EXPOSE 3001

CMD ["npm", "run", "start:prod"]
