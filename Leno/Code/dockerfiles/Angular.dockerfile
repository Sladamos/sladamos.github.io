FROM node:22-alpine as build
WORKDIR /app
RUN npm install -g @angular/cli
COPY package.json .
COPY package-lock.json .
RUN npm install
CMD ["ng", "serve", "--poll", "2000", "--disable-host-check", "true", "--host", "0.0.0.0"]