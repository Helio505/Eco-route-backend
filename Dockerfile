# Single-stage build
FROM alpine:3.19.1
RUN apk add --no-cache nodejs npm
WORKDIR /usr/src/app
COPY package*.json .
COPY .env ./
RUN npm install
COPY . .
RUN npx prisma generate
CMD npx prisma migrate deploy && npm run build && npm run start:prod