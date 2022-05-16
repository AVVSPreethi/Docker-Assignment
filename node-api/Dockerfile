FROM node:16-alpine
WORKDIR /src
COPY package.json /src
COPY index.js /src
RUN npm install
COPY . /src
CMD ["node", "index.js"]