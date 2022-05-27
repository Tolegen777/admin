FROM node:16-alpine

COPY package*.json ./

RUN npm i npm 

EXPOSE 8080 

RUN npm install

COPY . .