# Dockerfile
FROM node:20-alpine AS build

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

# Serve the build folder
FROM node:20-alpine

RUN npm install -g serve
WORKDIR /app
COPY --from=build /app/dist ./build

CMD ["serve", "-s", "build", "-l", "8080"]