FROM node:11-alpine
EXPOSE 8080 
RUN apk add --update tini
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY package.json package.json
RUN npm install && npm cache clean --force
COPY . .
CMD [ "node", "server.js" ]
