FROM node:10-alpine
MAINTAINER Pedro Magnus
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .