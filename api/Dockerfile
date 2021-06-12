FROM node:14.17-buster-slim
RUN npm i -g @nestjs/cli
WORKDIR /workspace
COPY package*.json ./
RUN npm i
COPY . .