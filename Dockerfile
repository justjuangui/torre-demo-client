FROM node:14.15.5-alpine3.13 as build-step

RUN mkdir /app

WORKDIR /app
COPY package-lock.json /app
COPY package.json /app

ENV GENERATE_SOURCEMAP=false
RUN npm install

COPY . /app

RUN npm run build

# Stage 2
FROM nginx:1.19.9-alpine
COPY --from=build-step /app/build /usr/share/nginx/html
