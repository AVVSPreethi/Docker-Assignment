FROM node:16-alpine as build-step
WORKDIR /app
COPY package.json /app
RUN npm install
COPY . /app
RUN npm run build -- --outputPath=./dist/out --prod


FROM nginx:1.15 as run
COPY --from=build-step /app/dist/out/ /usr/share/nginx/html
EXPOSE 5000

