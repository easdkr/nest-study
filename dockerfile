FROM node:16 AS builder

WORKDIR /app

COPY . . 

RUN npm ci 
RUN npm run build
RUN rm -rf src

FROM node:16-alpine
WORKDIR /app

COPY --from=builder /app ./

CMD ["npm", "run", "start:prod"]