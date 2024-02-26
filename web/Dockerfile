# FROM node:21-alpine3.18
FROM node:latest

WORKDIR /usr/app

COPY . .
# COPY package*.json ./

RUN npm install --quiet --no-optional --loglevel=error

# COPY . .

EXPOSE 3000

CMD ["npm", "run", "dev"]
