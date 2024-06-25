FROM node:22-alpine as build
WORKDIR /app
RUN npm install -g @angular/cli