FROM node:18-alpine as builder

WORKDIR /app

COPY package*.json .
RUN npm install

COPY src/ src/

CMD ["npm", "start"]